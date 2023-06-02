// Мінімум
// 1.
const shoppingList = [
  { name: 'Рис',
    quantity: 3,
    purchased: false,
    pricePerUnit: 150, 
    total: 450, 
  },
  { name: 'Хліб',
    quantity: 3,
    purchased: true,
    pricePerUnit: 30,
    total: 90,
  },
  { name: 'Молоко',
    quantity: 1,
    purchased: false,
    pricePerUnit: 50,
    total: 50,
  },
  { name: 'Олія',
    quantity: 4,
    purchased: false,
    pricePerUnit: 80,
    total: 320,
},
];
 
shoppingList.sort((a, b) => (a.purchased === b.purchased) ? 0 : a.purchased ? 1 : -1); 

function displayShoppingList() {
  console.log('Список покупок:');
  shoppingList.forEach(item => {
    const status = item.purchased ? 'Придбано' : 'Не придбано';
    console.log(`${item.name} (Кількість: ${item.quantity}, Ціна за штуку: ${item.pricePerUnit}, Сума: ${item.total}, Статус: ${status})`);
  });
}
displayShoppingList();

function purchaseProduct (productName) {
  const foundProduct = shoppingList.find(item => item.name.toLowerCase() === productName.toLowerCase());
  if (foundProduct) {
    foundProduct.purchased = true;
    console.log(`Продукт ${foundProduct.name} придбаний.`);
  } else {
    console.log(`Продукт ${productName} не знайдено у списку покупок.`);
    }
  }
  purchaseProduct('Молоко');
  purchaseProduct('Пиво');

  // Норма
  // 1.
  function removeProduct(productName) {
    const updatedList = shoppingList.filter(item => item.name.toLowerCase() !== productName.toLowerCase());
    return updatedList;
  }
const newList = removeProduct('Молоко');
console.log(newList);

// 2.
function updateShoppingList(productName, quantity, pricePerUnit) {
  const updatedList = shoppingList.map(item => {
    if (item.name.toLowerCase() === productName.toLowerCase()) {
      return {
        ...item,
        quantity: item.quantity + quantity,
        total: item.total + quantity * pricePerUnit,
      };
    } else {
      return item;
    }
  });

  const foundProduct = updatedList.find(item => item.name.toLowerCase() === productName.toLowerCase());
  if (foundProduct) {
    console.log(`Кількість та сума продукту ${foundProduct.name} змінені.`);
  } else {
    const newProduct = {
      name: productName,
      quantity: quantity,
      purchased: false,
      pricePerUnit: pricePerUnit,
      total: quantity * pricePerUnit,
    };
    updatedList.push(newProduct);
    console.log(`Продукт ${newProduct.name} додано.`);
  }
  return updatedList;
}

const updatedList = updateShoppingList('Хліб', 2, 30);
console.log(updatedList);

const updatedList2 = updateShoppingList('Масло', 1, 70);
console.log(updatedList2);


displayShoppingList();
 
// Максимум 
// 1.
function calculateTotal() {
  let total = 0;
  updatedList2.forEach(item => {
    total += item.total;
  });
  return total;
}

// 2.
function calculateUnPurchasedTotal() {
  let total = 0;
  updatedList2.forEach(item => {
    if (!item.purchased) {
      total += item.total;
    }
  });
  return total;
}
const task1 = calculateUnPurchasedTotal();
// 3.
function sortProducts(ascending = true) {
  const sortedList = updatedList2.sort((a, b) => {
    return ascending ? a.total - b.total : b.total - a.total;
  });
  return sortedList;
}


const totalAmount = calculateTotal();
console.log(`Загальна сума всіх продуктів: ${totalAmount}`);

const unpurchasedTotalAmount = calculateUnPurchasedTotal();
console.log(`Загальна сума непридбаних продуктів: ${unpurchasedTotalAmount}`);


const sortedListAsc = sortProducts();
console.log('Продукти від меншої до більшої суми:');
sortedListAsc.forEach(item => {
  console.log(`${item.name}: ${item.total}`);
});


const sortedListDesc = sortProducts(false);
console.log('Продукти від більшої до меншої суми:');
sortedListDesc.forEach(item => {
  console.log(`${item.name}: ${item.total}`);
});




