// 1.
let playList = [
  {
   author: "LED ZEPPELIN",
   song:"STAIRWAY TO HEAVEN"
  },
  
  {
   author: "QUEEN",
   song:"BOHEMIAN RHAPSODY"
  },
  
  {
   author: "LYNYRD SKYNYRD",
   song:"FREE BIRD"
  },
  
  {
   author: "DEEP PURPLE",
   song:"SMOKE ON THE WATER"
  },
  {
   author: "JIMI HENDRIX",
   song:"ALL ALONG THE WATCHTOWER"
  },
  
  {
   author: "AC/DC",
   song:"BACK IN BLACK"
  },
  
  {
   author: "QUEEN",
   song:"WE WILL ROCK YOU"
  },
  
  {
   author: "METALLICA",
   song:"ENTER SANDMAN"
  }
  ];

  const playlistElement = document.getElementById('playlist');
  playList.forEach((song, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${index + 1}. ${song.song} - ${song.author}`;
    playlistElement.appendChild(listItem);
  });
  // 2.
     const openButton = document.getElementById('openBtn');
     const modal = document.getElementById('myModal');
     const closeButton = document.getElementsByClassName('close')[0];
     const closeBtn = document.getElementById('closeBtn');
 
     
     openButton.addEventListener('click', () => modal.style.display = 'block');
 
     closeButton.addEventListener('click', () => modal.style.display = 'none');
 
     closeBtn.addEventListener('click', () => modal.style.display = 'none');

    //  3.
 
    const redLight = document.getElementById('redLight');
    const yellowLight = document.getElementById('yellowLight');
    const greenLight = document.getElementById('greenLight');
    const toggleButton = document.getElementById('toggleButton');

    function toggleTrafficLight() {
      if (redLight.style.backgroundColor === 'red') {
       
        redLight.style.backgroundColor = 'black';
        yellowLight.style.backgroundColor = 'yellow';
      } else if (yellowLight.style.backgroundColor === 'yellow') {
       
        yellowLight.style.backgroundColor = 'black';
        greenLight.style.backgroundColor = 'green';
      } else {
      
        greenLight.style.backgroundColor = 'black';
        redLight.style.backgroundColor = 'red';
      }
    }
    toggleButton.addEventListener('click', toggleTrafficLight);
    

