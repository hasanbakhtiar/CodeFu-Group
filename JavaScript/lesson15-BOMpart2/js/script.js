// const btn = document.querySelector('button');

// btn.onclick=()=>{
//     history.forward();
// }

const text = document.querySelector('span')

// text.innerHTML = navigator.appCodeName
// text.innerHTML = navigator.platform
// text.innerHTML = navigator.appVersion
// text.innerHTML = navigator.product
// text.innerHTML = navigator.cookieEnabled === false ? "please, cookie is bloked":"cookie is active"


// prompt('enter name')
// if (window.confirm('password saved?')) {
//     text.innerHTML = 'password  saved';
    
// }else{
//     text.innerHTML = 'password dont  saved';

// }

var preloader = document.querySelector('.preloader');
var wrapper = document.querySelector('.wrapper');
setTimeout(()=>{
        preloader.attributes[0].value = 'hide';
        wrapper.attributes[0].value = 'show';
},300)

 const timeData = setInterval(() => {
    text.innerHTML =   new Date()
}, 1000);

document.querySelector('button').onclick=()=>{
    clearInterval(timeData)
}

// setInterval(function,count )
// setInterval
// setTimeout


// const writeText = ()=>{
//     document.write('Hello<br>');
// }


// setInterval(writeText, 100);
// setTimeout(writeText, 3000);