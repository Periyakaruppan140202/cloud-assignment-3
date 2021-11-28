var button = document.querySelector("button");
button.addEventListener("click", () => {
  console.log("Button Clicked");
});

//Vanilla JS program to print the curr time in the interval of 5 seconds.
let count = 0;
const rate = 5000;
let lastClick = Date.now() - rate;
document.addEventListener("click", (event) => {
  if (Date.now() - lastClick >= rate) {
    count += event.clientX;
    console.log(count);
    lastClick = Date.now();
  }
});

//SetInterval using Observables

Rx.Observable.fromEvent(document, "click")
  .throttleTime(1000)
  .map((event) => event.clientX)
  .scan((count, clientX) => count + clientX, 0)
  .subscribe((count) => console.log(count));

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Resolved! ");
  }, 1000);
});

const observePromise = Rx.Observable.fromPromise(promise);

observePromise.subscribe((result) => console.log(result));
