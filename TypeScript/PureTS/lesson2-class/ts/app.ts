

 class Car {
    public ibrand:string;
    public imodel:string;
    public iyear:number;
    public inewCar:boolean;
    constructor(brand:string,model:string,year:number,newCar:boolean){
            this.ibrand = brand;
            this.imodel = model;
            this.iyear = year;
            this.inewCar = newCar;
    }

    protected calculateSpeed(km:number,hour:number):string{
            return `${this.ibrand} ${km/hour}km/h`
    }
}
class Moto extends Car{
    constructor(brand:string,model:string,year:number,newCar:boolean){
        super(brand,model,year,newCar);
    }
    
    public test (){
        return this.ibrand;
    }
    
}




const myCar:Car = new Car("BMW","X5",2020,false);
console.log(myCar);

const myMoto:Moto = new Moto("Yamaha",'S500',2023,true);
// console.log(myMoto.calculateSpeed(300,2));
console.log(myMoto.ibrand);



const text:any = document.querySelector<HTMLLIElement>('li');
const text:any  = document.querySelector('li') as HTMLLIElement;
text.innerHTML = 'edit';