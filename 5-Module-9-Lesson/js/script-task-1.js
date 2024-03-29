// Напишіть метод calcTotalPrice(stoneName), який приймає назву каменю
// та розраховує та повертає загальну вартість каменів з таким ім'ям,
// ціною та кількістю з властивості stones.

const chopShop = {
  stones: [
    { name: 'Emerald', price: 1300, quantity: 4 },
    { name: 'Diamond', price: 2700, quantity: 3 },
    { name: 'Sapphire', price: 1400, quantity: 7 },
    { name: 'Ruby', price: 800, quantity: 2 },
  ],
  //   calcTotalPrice(stoneName) {
  //     const stone = this.stones.find(s => s.name === stoneName);
  //     if (stone) {
  //       return stone.price * stone.quantity;
  //     }
  //     return 0;
  //   },
  // };

  calcTotalPrice(stoneName) {
    const stone = this.stones.find(s => s.name === stoneName);
    if (stone) {
      return stone.price * stone.quantity;
    }
    return 0;
  },
};

console.log(chopShop.calcTotalPrice('Emerald')); // 5200
console.log(chopShop.calcTotalPrice('Diamond')); // 8100
console.log(chopShop.calcTotalPrice('Sapphire')); // 9800
console.log(chopShop.calcTotalPrice('Ruby')); // 1600
console.log(chopShop.calcTotalPrice('no stone')); // 0
