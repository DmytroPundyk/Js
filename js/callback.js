



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


// const result = [];

// for (var i = 0; i < 5; i++) {
//    result[i] = (function () {
//       console.log(i)
//    }());
// };


// result[0](); // 5, ожидаем 0
// result[1](); // 5, ожидаем 1
// result[2](); // 5, ожидаем 2
// result[3](); // 5, ожидаем 3
// result[4](); // 5, ожидаем 4


// const result = [];

// for (var i = 0; i < 5; i++) {
//    let k = i;
//    result[i] = function () {
     
//       console.log(k)
//    };
// };


// result[0](); // 5, ожидаем 0
// result[1](); // 5, ожидаем 1
// result[2](); // 5, ожидаем 2
// result[3](); // 5, ожидаем 3
// result[4](); // 5, ожидаем 4


// class Cat {
//   constructor(name) {
//     this.name = name;
//   }

//   speak() {
//     console.log(`${this.name} издаёт звук.`);
//   }
// }

// class Lion extends Cat {
//   speak() {
//     super.speak();
//     console.log(`${this.name} рычит.`);
//   }
// }

// let l = new Lion('Фаззи');
// l.speak();




      function Person(first, last, age, gender, interests) {
        this.name = {
          'first': first,
          'last' : last
        };
        this.age = age;
        this.gender = gender;
        this.interests = interests;
        this.bio = function() {
          // First define a string, and make it equal to the part of
          // the bio that we know will always be the same.
          var string = this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. ';
          // define a variable that will contain the pronoun part of
          // the second sentence
          var pronoun;

          // check what the value of gender is, and set pronoun
          // to an appropriate value in each case
          if(this.gender === 'male' || this.gender === 'Male' || this.gender === 'm' || this.gender === 'M') {
            pronoun = 'He likes ';
          } else if(this.gender === 'female' || this.gender === 'Female' || this.gender === 'f' || this.gender === 'F') {
            pronoun = 'She likes ';
          } else {
            pronoun = 'They like ';
          }

          // add the pronoun string on to the end of the main string
          string += pronoun;

          // use another conditional to structure the last part of the
          // second sentence depending on whether the number of interests
          // is 1, 2, or 3
          if(this.interests.length === 1) {
            string += this.interests[0] + '.';
          } else if(this.interests.length === 2) {
            string += this.interests[0] + ' and ' + this.interests[1] + '.';
          } else {
            // if there are more than 2 interests, we loop through them
            // all, adding each one to the main string followed by a comma,
            // except for the last one, which needs an and & a full stop
            for(var i = 0; i < this.interests.length; i++) {
              if(i === this.interests.length - 1) {
                string += 'and ' + this.interests[i] + '.';
              } else {
                string += this.interests[i] + ', ';
              }
            }
          }

          // finally, with the string built, we alert() it
          alert(string);
        };
        this.greeting = function() {
          alert('Hi! I\'m ' + this.name.first + '.');
        };
      };

let person1 = new Person('Tammi', 'Smith', 32, 'neutral', ['music', 'skiing']);
      console.log(person1.bio())