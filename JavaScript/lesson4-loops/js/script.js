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
// const product =[
//     {
//         title:"table",
//         price:100,
//         color:'red',
//         feature:['20sm',"100sm"]
//     },
//     {
//         title:"chair",
//         price:30,
//         color:'black',
//         feature:['10sm',"10sm"]
//     },
//     {
//         title:"window",
//         price:40,
//         color:'blue',
//         feature:['20sm',"100sm"]
//     }
// ];
// for (let i = 0; i < product.length; i++) {
//         console.log(product[i].title +"->" + product[i].price + "$");
// }

// const infoArr = ['table','pen','book'];
// infoArr[3]='data';
// console.log(infoArr[2]);


// const info = [];
// info[5]='table';
// console.log(info);


// const info = ['table','book','pen'];
// info['mykey'] = 'new value';
// console.log(info['mykey']);


// const info = ['table','book',[1,2,3,['new data','mydata',[true,false,['snow',['happy new year']],true]],4],'pen'];
// console.log(info[2][3][2][2][1][0]);

// for in
// const info = ['table','book','pen','data','a'];
// for(let i in info){

//     console.log(i+info[i])
// }

// for of
// const info = ['table','book','pen','data','a'];
// for(let data of info){
//     console.log(data);
// }
// info[1] = 'new value';
// console.log(info);