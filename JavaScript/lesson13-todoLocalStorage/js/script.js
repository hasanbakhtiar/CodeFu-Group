// import data from '../data/car.json';
// const text = document.querySelector('p');

// console.log(data);
// text.innerHTML = data.model


const input = document.querySelector('input');
const btn = document.querySelector('button');
const todo = document.querySelector('.todo');
var taskList;
var localdata = localStorage.getItem('localItem');
var localItems = JSON.parse(localdata);
btn.onclick=()=>{
  if (localItems === null) {
    taskList = [];
  }else{
    taskList = localItems;
  }
  taskList.push(input.value);
  localStorage.setItem('localItem',JSON.stringify(taskList));
  input.value = "";
ShowList();

}

const ShowList = ()=>{
    let outPut = "";
    if (localItems === null) {
        taskList = [];
    }else{
        taskList = localItems;
    }
    taskList.forEach(element => {
        outPut +=`<li>${element}</li>`
    });
    todo.innerHTML = outPut
}
ShowList();






// var data = ['new data','data'];
// localStorage.setItem('localItem',JSON.stringify(data));



// todo.innerHTML = localItems[1]
