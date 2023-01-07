// console.log('Hello');
// console.log('js is perfect');

// import { products } from "../data/products.js";


// for(let i in products){
//     console.log(products[i].title);
// }

// prdoucts.map(item=>(console.log(item.title)));




// const fetchData = ()=>{
//     fetch('https://restcountries.com/v3.1/all')
//     .then(res=>res.json())
//     .then(data=>console.log(data.map(item=>(console.log(item.name.common)))))
//     .catch(err=>console.log(err))
// }

// fetchData()


// const fetchApiaSync = async()=>{
//         const comingData = await fetch('https://restcountries.com/v3.1/all');
//         const countryData = await comingData.json();
//         console.log(countryData.map(item=>(console.log(item.name.common))));
// }

// fetchApiaSync();


// Selectors
// const row = document.querySelector('.row');

// const countryList = async()=>{
//     const comingData = await fetch('https://restcountries.com/v3.1/all');
//     const countryData = await comingData.json();

//     let countryCard = "";
//     countryData.map(item=>(
//         countryCard += `  
//         <div class="col-12 col-sm-6 col-md-4">
//         <div class="card" >
//         <img height="200" src="${item.flags.png}" class="card-img-top" alt="...">
//         <div class="card-body">
//           <h5 class="card-title">${item.name.common}</h5>
//           <p class="card-text">${item.capital}</p>
//         </div>
//       </div>
//         </div> 
//         `
//     ))

//     row.innerHTML = countryCard;

// }

// countryList();


const row = document.querySelector('.row');
const btn = document.querySelectorAll('button');


var startCount = 0;
var endCount =50;


const countryList = async()=>{
    const comingData = await fetch('https://restcountries.com/v3.1/all');
    const countryData = await comingData.json();

    let countryCard = "";
    for(let i = startCount; i < endCount;i++){
        countryCard += `  
        <div class="col-12 col-sm-6 col-md-4">
        <div class="card" >
        <img height="200" src="${countryData[i].flags.png}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${countryData[i].name.common}</h5>
          <p class="card-text">${countryData[i].capital}</p>
          <p>count:${i+1}</p>
        </div>
      </div>
        </div> 
        `
    }

    row.innerHTML = countryCard;

}
document.querySelector('input').onclick=()=>{
    document.querySelector('.card').style.backgroundColor = 'gray';
}
btn[0].onclick=()=>{
     startCount = 0;
     endCount =50;
     
    countryList();
}

btn[1].onclick=()=>{
    startCount = 50;
    endCount =100;
   countryList();
}

btn[2].onclick=()=>{
    startCount = 100;
    endCount =150;
   countryList();
}

btn[3].onclick=()=>{
    startCount = 150;
    endCount =200;
   countryList();
}

btn[4].onclick=()=>{
    startCount = 200;
    endCount =250;
   countryList();
}


countryList();