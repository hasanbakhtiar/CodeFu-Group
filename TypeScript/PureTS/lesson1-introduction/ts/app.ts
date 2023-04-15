// const info:boolean = true;
// console.log(info);


// const infoArr:Array<number> = [1,2,3,4,5,6,7];
// console.log(infoArr);


// type mytype={
//     name:string,
//     year:number,
//     color:string
// }

// const infoObj:mytype = {
//     name:"Hello",
//     year:10,
//     color:"brown"
// }

// type carType={
//     brand:string,
//     model:string,
//     year:number
// }
// const dataOne:carType = {
//     brand:"BMW",
//     model:"x5",
//     year:2020
// }

// const dataTwo:carType = {
//     brand:"Mercedes",
//     model:"s500",
//     year:2020
// }


// if (dataOne.year === dataTwo.year) {
//     console.log('old car');
    
// }else{
//     console.log('err');
// }




// type carType={
//     brand:string,
//     model:string,
//     year:number
// }
// const dataOne:carType = {
//     brand:"BMW",
//     model:"x5",
//     year:2020
// }

// const dataTwo:carType = {
//     brand:"Mercedes",
//     model:"s500",
//     year:2020
// }


// const calculateSpeed =(brand:string,comingSpeed:number):string=>{
//     return `${brand} ${comingSpeed}km/hour`
// }

// const fetchData =(model:string,km:number,hour:number):void=>{

//     const total:number = km/hour;
//     console.log(calculateSpeed(model,total));
    
    
// }

// fetchData(dataOne.model,100,2);



//  class Car {
//     public ibrand:string;
//     public imodel:string;
//     public iyear:number;
//     public inewCar:boolean;
//     constructor(brand:string,model:string,year:number,newCar:boolean){
//             this.ibrand = brand;
//             this.imodel = model;
//             this.iyear = year;
//             this.inewCar = newCar;
//     }

//     protected calculateSpeed(km:number,hour:number):string{
//             return `${this.ibrand} ${km/hour}km/h`
//     }
// }
// class Moto extends Car{
//     constructor(brand:string,model:string,year:number,newCar:boolean){
//         super(brand,model,year,newCar);
//     }
    
//     public test (){
//         return this.ibrand;
//     }
    
// }




// const myCar:Car = new Car("BMW","X5",2020,false);
// console.log(myCar);

// const myMoto:Moto = new Moto("Yamaha",'S500',2023,true);
// // console.log(myMoto.calculateSpeed(300,2));
// console.log(myMoto.ibrand);



// const text:any = document.querySelector<HTMLLIElement>('li');
// const text:any  = document.querySelector('li') as HTMLLIElement;
// text.innerHTML = 'edit';
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




