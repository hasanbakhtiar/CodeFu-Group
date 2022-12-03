// LOOPS

// while
// let info = 0;
// while (info > 10) {
//   //condition
//   console.log(info); //result
//   info++; //action
// }

// do while

// var info = 0;

// do{
//     console.log(info);
//     info++;
// }while (info>10) 

// for
// for(let info = 0; info<100; info+=10){
//     if (info === 5) {
//         continue;
//     }
//     console.log(info);
// }

// Array
const product =[
    {
        title:"table",
        price:100,
        color:'red',
        feature:['20sm',"100sm"]
    },
    {
        title:"chair",
        price:30,
        color:'black',
        feature:['10sm',"10sm"]
    },
    {
        title:"window",
        price:40,
        color:'blue',
        feature:['20sm',"100sm"]
    }
];
for (let i = 0; i < product.length; i++) {
        console.log(product[i].title +"->" + product[i].price + "$");
}




// for in

// for of
