const btn = document.querySelector('#btn');

btn.onclick = () => alert('Hello from indirect onclick!');

// using eventListener
const eventBtn = document.querySelector('#events');
eventBtn.addEventListener('click', () => {
    alert('Hello from event listener');
});

// event2
const eventBtn2 = document.querySelector('#events2');
eventBtn2.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
});

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
    button.addEventListener("click", () => {
        alert(button.id);
    });
});
