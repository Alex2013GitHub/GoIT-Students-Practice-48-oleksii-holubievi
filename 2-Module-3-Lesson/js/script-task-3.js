// Напиши скрипт для перебору масиву fruits
// циклом for. Для кожного елемента масиву виведіть
// у консоль рядок у форматі номер_елемента: значення_елемента.
// Нумерація елементів має починатися з першого.

const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];

for (let i = 0; i < fruits.length; i++) {
  
  console.table(`${i+1}: ${fruits[i]} `)
}

