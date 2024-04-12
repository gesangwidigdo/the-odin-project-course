const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

// a <p> with red text that says “Hey I’m red!”
const redPara = document.createElement('p');
redPara.textContent = "Hey I'm red!"
redPara.style.color = 'red';

// an <h3> with blue text that says “I’m a blue h3!”
const blueH3 = document.createElement('h3');
blueH3.textContent = "Hey I'm a blue h3!";
blueH3.style.color = 'blue';

// create new div element
const divChild = document.createElement('div');

// h1 inside divChild
const h1DivChild = document.createElement('h1');
h1DivChild.textContent = "I'm in a div";

// p inside divChild
const divChildPara = document.createElement('p');
divChildPara.textContent = "ME TOO!";

divChild.appendChild(h1DivChild);
divChild.appendChild(divChildPara);

container.appendChild(content);
container.appendChild(redPara);
container.appendChild(blueH3);
container.appendChild(divChild);