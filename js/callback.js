



// const main = function (a, b, c, callback) {
//    const result = callback(a, b, c);
//    console.log("результат", (result));
// };
// const mult = function (x, y, z) {
//    return x + y * z;

// };
// const div = function (x, y,z) {
//    return x / y/z;

// };
// main(5, 3, 5, mult);
// main(100, 4,5,div);





// const counter = {
//    value: 0,
//    increment(value) {
//       console.log("increment -> this", this);
//       this.value += value;
//    },
//    decrement(value) {
//       console.log("decrement -> this", this);
//       this.value -= value;
//    },

// };
// const updateCounter = function(value, operation) {
//   operation(value);
// };
// updateCounter(10, counter.increment.bind(counter));
// console.log(counter);
// updateCounter(5, counter.decrement.bind(counter));
// console.log(counter);


// const user = {
//    tag: "Mango",
//    showTag() {
//       console.log("showTag => this", this);
//       console.log("showTag => this.tag", this.tag);

//    },
// };

// const invokeAction = function (action) {
//    // console.log(action);

//    action();
// };

// // console.log(user.showTag);
// invokeAction(user.showTag.bind(user));


//   http://fecore.net.ua/books/m5ph3r-javascript/module-02/scope.html
//  * http://fecore.net.ua/books/m5ph3r-javascript/module-04/closures.html
//  * Измените анонимную функцию которая присваивается к result[i]
//  * так, чтобы в результате в консоли мы послучили числа от 0 до 4 включительно
//  * Изменять можно только функцию 
//  * function () {
//     console.log(i);
//   };


const result = [];

for (var i = 0; i < 5; i++) {
   (result[i] = function () {
      console.log(i)
   }());
};


result[0](); // 5, ожидаем 0
result[1](); // 5, ожидаем 1
result[2](); // 5, ожидаем 2
result[3](); // 5, ожидаем 3
result[4](); // 5, ожидаем 4