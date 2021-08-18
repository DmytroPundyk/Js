const products = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
   // Change code below this line
  
   for (let product of products) {
      if (productName === product.name) {
         return product.price;
      }
   }
   if (!productName) {
      return null;
      }
   
      // Change code above this line
 
}
console.log(getProductPrice("Radar"));
console.log(getProductPrice("Scanner"));
console.log(getProductPrice("Droid"));
console.log(getProductPrice("Engine"));