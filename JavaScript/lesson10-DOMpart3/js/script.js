
// localStorage.setItem
// localStorage.getItem
// localStorage.clear
// localStorage.removeItem

// document.querySelector('h1').innerHTML = localStorage.getItem('data');
// localStorage.removeItem('info')

// localStorage.clear();

// mode with localstorage

const modeClassName = {
    dark:"navbar navbar-expand-lg bg-dark navbar-dark",
    light:"navbar navbar-expand-lg bg-light navbar-light"
}

const modeBtn = document.querySelector('#mode');
const nav = document.querySelector('nav');

if (localStorage.getItem('mode') === null) {
    localStorage.setItem('mode',modeClassName.light)
}else{
    const modeFunc =()=>{
        if (nav.className === modeClassName.light) {
            nav.className = modeClassName.dark;
            localStorage.setItem('mode',modeClassName.dark)
        }else{
            nav.className = modeClassName.light;
            localStorage.setItem('mode',modeClassName.light)
        }
    }
    modeBtn.onclick=modeFunc;
}

nav.className = localStorage.getItem('mode');
