
const calculateSpeed =(brand:string,comingSpeed:number):string=>{
    return `${brand} ${comingSpeed}km/hour`
}

const fetchData =(model:string,km:number,hour:number):void=>{

    const total:number = km/hour;
    console.log(calculateSpeed(model,total));
    
    
}

fetchData(dataOne.model,100,2);