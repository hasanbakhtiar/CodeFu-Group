class Car {
    constructor(brand, model, year) {
      this.ibrand = brand;
      this.imodel = model;
      this.iyear = year;
    }
    calculateSpeed(km,hour){
          return `${this.ibrand}-${this.imodel} speed:${parseInt(km/hour)}km/h`
    }
  }
  Car.prototype.color = "White";

  export {Car};