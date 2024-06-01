// See: https://www.theodinproject.com/lessons/foundations-dom-manipulation-and-events#exercise

// your JavaScript file
const container = document.querySelector("#container");

// default
const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);


// item 1 - red paragraph
const para = document.createElement("p");
para.textContent = "Hey I'm red!";
para.style.color = "red";

content.appendChild(para);

// item 2 - blue h3
const h3 = document.createElement("h3");
h3.textContent = "I'm a blue H3!";
h3.style.color = "blue";

content.appendChild(h3);

// item 3 - dive with other studd
const div = document.createElement("div");
div.setAttribute('style',
    'border: black solid; background: pink;',
)

const h1 = document.createElement("h1");
h1.textContent = "I'm in the div";

const para2 = document.createElement("p");
para2.textContent = "Me Too!";

div.appendChild(h1);
div.appendChild(para2);
container.appendChild(div);