/*
Add the following elements to the container using ONLY JavaScript and the DOM methods shown above.

a <p> with red text that says “Hey I’m red!”

an <h3> with blue text that says “I’m a blue h3!”

a <div> with a black border and pink background color with the following elements inside of it:
    another <h1> that says “I’m in a div”
    a <p> that says “ME TOO!”
Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.
*/

// your JavaScript file
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

let para = document.createElement("p");
let node = document.createTextNode("Hey I’m red!");
para.style.color = 'red';
para.appendChild(node);

container.appendChild(para);



const h3 = document.createElement("h3");
node = document.createTextNode("I'm a blue h3!");
h3.style.color = 'blue';
h3.appendChild(node);

container.appendChild(h3);



const pinkDiv = document.createElement("div");
pinkDiv.style.border = "1px solid black";
pinkDiv.style.backgroundColor  = "pink";

    const h1 = document.createElement("h1");
    h1.textContent = "I'm in a div";
    pinkDiv.appendChild(h1);

    para = document.createElement("p");
    para.textContent = "ME TOO!";
    pinkDiv.appendChild(para); 

container.appendChild(pinkDiv);