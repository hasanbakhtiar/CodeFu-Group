
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

// multilang with localstorage

const lang={
    en:["Home","About","Services","Blog",'Contact'],
    az:["Ana Sehife","Haqqimizda","Xidmetlerimiz","Meqale",'Elaqe']
}

const langBtn = document.querySelector('#lang');
const langItem = document.querySelectorAll('.nav-link');

if (localStorage.getItem('lang') === null && localStorage.getItem('langBtn') === null) {
    localStorage.setItem('lang',lang.az);
    localStorage.setItem('langBtn',"AZ")
}else{
   langBtn.onclick=()=>{
    if (langBtn.innerHTML === "AZ") {
        for(let i in lang.az){
            langItem[i].innerHTML = lang.az[i];
            localStorage.setItem('lang',lang.az);
        }
        langBtn.innerHTML = "EN";
        localStorage.setItem('langBtn',"EN");
    }else{
        for(let i in lang.en){
            langItem[i].innerHTML = lang.en[i];
            localStorage.setItem('lang',lang.en);
        }
        langBtn.innerHTML = "AZ";
        localStorage.setItem('langBtn',"AZ");
    }
   }
}

langBtn.innerHTML = localStorage.getItem('langBtn');

for(let i in lang.az){
    langItem[i].innerHTML = localStorage.getItem('lang').split(',')[i];
}
