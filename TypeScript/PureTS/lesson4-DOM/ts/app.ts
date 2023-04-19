const ul:any = document.querySelector('ul') as HTMLUListElement;

interface productType{
    id: number;
    photo: string;
    title: string;
    category: string;
    discount: number,
    price: number;
    cart: string;
    rate: number;
    review: number;
    status: boolean;
    sku: number;
}


// fetch('http://127.0.0.1:5500/data/products.json')
// .then((res:any):any=>{return res.json()})
// .then((data:any)=>{
//     console.log(data);
    
//     let li:string="";
//     data.map((item:productType)=>{
//         li+=`<li>${item.title}</li>`;
//     })
//     ul.innerHTML = li;
// })

import * as data from "../data/productsimple.js";

console.log(data);