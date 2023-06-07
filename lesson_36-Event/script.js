// 1.

document.addEventListener('DOMContentLoaded', function() {
  const textContainer = document.getElementById('textContainer');
  let isEditMode = false;
  let originalText = null;


  document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.key === 'e') {
      event.preventDefault();
      enableEditMode();
    } else if (event.ctrlKey && event.key === 's') {
      event.preventDefault();
      disableEditMode();
    }
  });

  function enableEditMode() {
    if (isEditMode) return;

    isEditMode = true;
    originalText = textContainer.innerText;

    textContainer.innerHTML = '<textarea>' + originalText + '</textarea>';

    const textarea = textContainer.querySelector('textarea');
    textarea.focus();
  }

  function disableEditMode() {
    if (!isEditMode) return;

    isEditMode = false;

    const textarea = textContainer.querySelector('textarea');
    const newText = textarea.value;

    textContainer.innerHTML = newText || originalText;
  }
});

// 2.

function sortTable(columnIndex) {
  const table = document.getElementById('myTable');
  const rows = Array.from(table.getElementsByTagName('tr'));

  rows.shift();

  rows.sort((a, b) => {
    const cellA = a.getElementsByTagName('td')[columnIndex];
    const cellB = b.getElementsByTagName('td')[columnIndex];
    const valueA = cellA.textContent;
    const valueB = cellB.textContent;

    if (columnIndex === 1 || columnIndex === 2) {
   
      return Number(valueA) - Number(valueB);
    } else {
      return valueA.localeCompare(valueB);
    }
  });
  rows.forEach(row => table.appendChild(row));
};

// 3.
function startResize(event) {
  event.preventDefault();

  const textBlock = document.getElementById('myTextBlock');
  const initialWidth = textBlock.offsetWidth;
  const initialHeight = textBlock.offsetHeight;
  const startX = event.clientX;
  const startY = event.clientY;

  document.onmousemove = function (event) {
    const newWidth = initialWidth + (event.clientX - startX);
    const newHeight = initialHeight + (event.clientY - startY);

    textBlock.style.width = newWidth + 'px';
    textBlock.style.height = newHeight + 'px';
  };

  document.onmouseup = function () {
    document.onmousemove = null;
    document.onmouseup = null;
  };
};
