// const box = document.querySelector('div');
// const headText = document.querySelector('h1');
// text.innerHTML = headText.nodeName;
// text.innerHTML = headText.nodeType;
// text.innerHTML = headText.nodeValue;
// text.innerHTML = headText.firstChild.nodeValue;

// const mainList = document.querySelector('ul');
// text.innerHTML = mainList.firstChild.firstChild.nodeValue;
// text.innerHTML = mainList.lastChild.firstChild.nodeValue;
// text.innerHTML = mainList.lastChild.parentNode.nodeName;
// text.innerHTML = mainList.childNodes[2].firstChild.nodeValue;

// const myNewTextElement = document.createElement('h2');
// const myNewTextValue = document.createTextNode("Hello Everyone");
// myNewTextElement.appendChild(myNewTextValue);
// // box.appendChild(myNewTextElement);
// document.body.appendChild(myNewTextElement);
// document.body.style.backgroundColor = '#757575';
// document.body.style.color = '#fff';

// ToDo App
const input = document.querySelector("input");
const btn = document.querySelector("button");
const todoList = document.querySelector("ol");
const form = document.querySelector("form");
const todoApp = (e) => {
  e.preventDefault();
  const li = document.createElement("li");
  const att = document.createAttribute("class");
  att.value = "list-group-item list-group-item-action";
  li.setAttributeNode(att);
  li.innerHTML = input.value;
  todoList.appendChild(li);
  input.value = "";

  li.onclick = () => {
    if (li.style.textDecoration === "none") {
      li.style.textDecoration = "line-through";
    } else {
      li.style.textDecoration = "none";
    }
  };

  li.ondblclick = () => {
    li.remove();
  };
};

form.onsubmit = todoApp;
