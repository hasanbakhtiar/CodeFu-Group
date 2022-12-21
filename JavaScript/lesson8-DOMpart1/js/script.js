// for (let index = 0; index < 6; index++) {
//     document.getElementsByTagName('li')[index].innerHTML = 'new value'
// }
// document.getElementsByClassName('text')[1].innerHTML = 'new value added'
// document.getElementById('test').innerHTML = 'new data added';

// QuerySelectors

// document.querySelector('h1').innerHTML = 'new data'

// document.querySelectorAll('h1')[1].innerHTML = 'new data'

// document.querySelector('h1').innerHTML = '<i>new value added</i>'
// document.querySelector('h1').innerText = '<i>new value added</i>'



// const capitalLook = ()=>{
//     document.querySelector('.infoCountry').innerHTML = "London"
// }

// document.querySelector('button').addEventListener('click',capitalLook);
// document.querySelector('button').onclick=capitalLook;



// const infoCountry  = document.querySelector('.infoCountry');
// const btn = document.querySelector('button');

// btn.onclick=()=>{
//     if (infoCountry.innerHTML === 'England') {
//         infoCountry.innerHTML = "London"
//     }else{
//         infoCountry.innerHTML = "England";
//     }
// }


import { pageData } from "../data/pageData.js";
// Multilang 
const  langBtn = document.querySelector('#lang-btn');
const langItem = document.querySelectorAll('.nav-link');

langBtn.onclick =()=>{
    if (langBtn.innerHTML === "AZ") {
        for(let x in pageData.az){
            langItem[x].innerHTML = pageData.az[x];
            langBtn.innerHTML = "EN";
        }
    }else{
        for(let x in pageData.en){
            langItem[x].innerHTML = pageData.en[x];
            langBtn.innerHTML = "AZ";
        }
    }
}

