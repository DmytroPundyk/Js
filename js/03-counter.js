const counter = {
   value: 0,
   increment() {
      console.log("increment -> this", this);
      this.value += 1;
   },
   decrement() {
      console.log("decrement -> this", this);
      this.value -= 1;
   },

};
const decrementBtn = document.querySelector(".js-decrement");
const incrementBtn = document.querySelector(".js-increment");
const valueEL = document.querySelector(".js-value");


decrementBtn.addEventListener("click", function () {
   counter.decrement();
   valueEL.textContent = counter.value;
});

incrementBtn.addEventListener("click", function () {
   counter.increment();
   valueEL.textContent = counter.value;
});


