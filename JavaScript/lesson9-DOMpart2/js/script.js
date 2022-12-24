// const btn = document.querySelector('button')
// const text = document.querySelector('h1');

// btn.onclick=()=>{
//     text.style.backgroundColor = 'red';
//     text.style.color = 'white';
//     text.style.width = "30%"
// }

// btn.onclick=()=>{
    // text.classList.add('blueClass');
    // text.attributes[0].value = 'blueClass';
    // text.classList.remove('blueClass');
// }


// const modeItems = document.querySelector('#mode');
// document.querySelector("#btnMode").onclick=()=>{
//     if (modeItems.className === 'light') {
//         modeItems.className = 'dark'
//     }else{
//         modeItems.className = 'light'
        
//     }
// }


// const menuBtn = document.querySelector('button');
// const main  = document.querySelector('main');
// const toggleMenu = ()=>{
//     if (menuBtn.innerHTML === '<i class="fa-solid fa-x"></i>') {
//         menuBtn.innerHTML = ' <i class="fa-sharp fa-solid fa-bars"></i>'
//         menuBtn.style.transition = '1s';
//         main.attributes[0].value = 'hide';
//     }else{
//         menuBtn.style.transition = '1s';

//         menuBtn.innerHTML = '<i class="fa-solid fa-x"></i>'
//         main.attributes[0].value = 'show';

//     }
// }

// menuBtn.onclick = toggleMenu;



const btnMode = document.querySelector('#mode-btn');
const nav = document.querySelector('nav');

btnMode.onclick=()=>{
    if (nav.className === "navbar navbar-expand-lg bg-dark navbar-dark" ) {
        nav.className = "navbar navbar-expand-lg bg-light navbar-light";
    }else{
        nav.className = "navbar navbar-expand-lg bg-dark navbar-dark";
    }
}