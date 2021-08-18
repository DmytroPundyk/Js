// когда switch когда if else

// const dish = 'french fries'; // 'chiken', 'french fries', 'burger'

// switch (dish) {
//   case 'chicken':
//     console.log("it's a chicken!");
//     break;
//   case 'french fries':
//     console.log("it's a french fries!");
//     break;
//   case 'donat':
//     console.log("it's a donat!");
//     break;
//   case 'burger':
//     console.log("it's a burger!");
//     break;
//   default:
//     console.log("I don't know");
// }




// // один тип условия
// if (dish === 'chicken') {
//   console.log("it's a chicken!");
// } else if (dish === 'french fries') {
//   console.log("it's a french fries!");
// } else if (dish === 'donat') {
//   console.log("it's a donat!");
// } else if (dish === 'burger') {
//   console.log("it's a burger!");
// } else {
//   console.log("I don't know");
// }





// let clientCounter = 18;
// const maxClients = 26;

// while (clientCounter < maxClients) {
//    console.log(clientCounter);
//    clientCounter ++;
// }




// let password = '';

// do {
//   password = prompt('Введите пароль длиннее 4-х символов', '');
// } while (password.length < 5);

// console.log('Ввели пароль: ', password);





// const target = 5;
// let sum = 0;

// for (let i = 0; i <= target; i += 1) {
//   sum += i;
// }

// console.log(sum);



// const max = 10;

// for (let i = 0; i <= max; i += 1) {
//   console.log(`${max} % ${i} = `, max % i);
// }




// const number = 10;

// for (let i = 0; i < number; i ++) {
//  if (i % 2 === 0) {
//     continue;
//   } 

//   console.log('Нечетное i: ', i); 
// }


// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Change code below this line
//    if (apartment.hasOwnProperty(key)) {
//       keys.push(key);
//      values.push(apartment[key]);
//      console.log(key);
//     console.log(apartment[key]);
//    }}
  // Change code above this line


 const colors = [
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#2196f3', rgb: '33,150,243' },
  { hex: '#4caf50', rgb: '76,175,80' },
  { hex: '#ffeb3b', rgb: '255,235,59' },
 ];

const hexColors = [];
const rgbColors = [];
// Change code below this line
for (let color of colors) {
  console.log(color["hex"]);
  hexColors.push(color["hex"]);
  rgbColors.push(color["rgb"])
  // hexColors = 
}
console.log(hexColors);
console.log(rgbColors);
