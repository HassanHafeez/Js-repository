class Vehicle{
    
    constructor(description, wheels){
        this.description=description;
        this.wheels=wheels;
    }
    describeYourself(){
        console.log(
            `I'm a ${this.description} with ${this.wheels} wheels.`
        );
    }
}
//inherit class

class semiTruck extends Vehicle{
    constructor(){
        super("Semi Truck",18) //works as plugin in parent class
    }
}



let groceryStore = new semiTruck()
groceryStore.describeYourself()


// let coolSkiVan= new Vehicle("cool ski Van",4)
// console.log(coolSkiVan.describeYourself())