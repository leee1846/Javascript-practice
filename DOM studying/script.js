// EXAMINE THE DOCUMENT OBJECT

// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.forms);
// console.log(document.images);

// let item = document.querySelectorAll('.list-group-item');

// for (let i = 0; i<item.length; i++) {
//   item[i].textContent = 'lala';
//   item[i].style.color = 'dodgerblue';

// let submit = document.querySelector('input[type="submit"]');
// submit.value = 'send'
// let last = document.querySelector('li:last-child');
// last.style.color = 'blue'

// let itemList = document.querySelector('#items');
// console.log(itemList.parentNode)
// itemList.parentNode.style.backgroundColor = 'gray';
// console.log(itemList.parentNode.parentNode)

// let itemList = document.querySelector('#items');
// console.log(itemList.parentElement)
// itemList.parentElement.style.backgroundColor = 'gray';

// let itemList = document.querySelector('#items')
// console.log(itemList.childNodes)

// let itemList = document.querySelector('#items')
// console.log(itemList.children)
// console.log(itemList.children[1]);
// itemList.children[1].style.color = 'yellow';

// let itemList = document.querySelector('#items')
// console.log(itemList.firstChild);
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'hello';
// itemList.firstElementChild.innerHTML = '<h1>dhdh<h1>'

// let itemList = document.querySelector('#items');
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'lala';

// let itemList = document.querySelector('#items');
// console.log(itemList.nextSibling)
// console.log(itemList.nextElementSibling);
// console.log(itemList.previousElementSibling);

// let newDiv = document.createElement("div");
// newDiv.className = "hello";
// newDiv.id = "hello";
// newDiv.setAttribute("title", "hello");
// let newDivText = document.createTextNode("lalababa");
// newDiv.appendChild(newDivText);
// document.body.appendChild(newDiv);
// console.log(newDiv);

// newDiv.style.fontSize = '50px'

// let container = document.querySelector("header .container");
// let h1 = document.querySelector("header h1");

// container.insertBefore(newDiv, h1);

// let button = document.querySelector("#main button");
// button.addEventListener("click", () => {
//   if (button.textContent === "Click Here") {
//     button.textContent = "changed";
//   } else {
//     button.textContent = "Click Here";
//   }
// });

// let button = document.querySelector("#main button");
// button.addEventListener("click", (e) => {
//   console.log(e.clientY,e.clientX)
//   console.log(e.offsetY,e.offsetX)
// });

let button = document.querySelector("#main button");
let box = document.querySelector(".box");

// button.addEventListener("click",runEvent)
// button.addEventListener("dblclick",runEvent)
// button.addEventListener("mousedown",runEvent)

let itemInput = document.querySelector('input[type="text"]');
let form = document.querySelector('form');

itemInput.addEventListener("keydown", runEvent);
function runEvent(e) {
  console.log(`EVENT TYPE: + ${e.type}`);

  // box.innerHTML = `<h3>MouseX: ${e.offsetX} </h3><h3>MouseY: ${e.offsetY}</h3>`;

  // document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},90)`;

  
}

// box.addEventListener("mouseenter", runEvent);
// box.addEventListener("mouseleave", runEvent);
// box.addEventListener("mouseover", runEvent);
