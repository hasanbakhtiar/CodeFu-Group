// ES5
// function Car(brand,model,year){
//     this.ibrand = brand;
//     this.imodel = model;
//     this.iyear = year;

// }Car

import { Car } from "./Car.js";
import { Lorry } from "./Lorry.js";
import { Moto } from "./Moto.js";

const myCar = new Car("BMW", "X5", 2022);
console.log(myCar.calculateSpeed(300,4));
console.log(myCar.ibrand);



const myMoto = new Moto("Yamaha","s500",2022);
console.log(myMoto.calculateSpeed(500,4));


const myLorry = new Lorry("Volvo","v100",2022);
console.log(myLorry.calculateSpeed(500,9));




// class a{
//     b(){
//         console.log('Hello');
//     }
// }

// class c extends a{

// }

// const myA = new a();
// const myC = new c();
// myA.b();
// myC.b();