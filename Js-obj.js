//Object literals
const jsUser={
    //key : values
    name :"Alex",
    "fullName":"Alex john",
    age : 20,
    city: "Lahore",
    email:"hassan@gmail.com"
};
// console.log(jsUser.name);
// console.log(jsUser[fullName]);
// console.log("The name is "jsUser.name+"and city is"jsUser.city);
// console.table(jsUser);

document.getElementById("demo").innerHTML ="Object: <br>"+ jsUser.name + " is " + jsUser.age + " years old.";


// const person = {
//     firstName  : "John",
//     lastName   : "Doe",
//     id         : 5566,
//     myFunction : function() {
//       return this;
//     }
//   };
//  console.log(person)

/********************************************************************/
/* OBject Details*/
//OBJECT
//var myObj={ name: "Hassan Hafeez", age: 21 , address : "Lahore"};

//Employee Example
// let emp3={}; //hardcoded
//     emp3.empName="Haris";
//     emp3.empAge=27;
//     emp3.empGender="M";
//     emp3.empDesignation="Market manager";
//easy way:
// function createEmployeeObject(empName,empAge,empGender,empDesignation) 
// {
//     let newObject={};
//     newObject.empName=empName;
//     newObject.empAge=empAge;
//     newObject.empGender=empGender;
//     newObject.empDesignation=empDesignation;

//     return newObject;
// }

// let emp1= createEmployeeObject("john",23,"M","manager");
// let emp2= createEmployeeObject("jane",25,"M","salesman");

/*Object by using Constructor */

// function createEmployeeObject(empName,empAge,empGender,empDesignation) 
// {
//     //let newObject={}; this line will be changed with //let this={}; at the backend in javascript
//     this.empName=empName;
//     this.empAge=empAge;
//     this.empGender=empGender;
//     this.empDesignation=empDesignation;

//     //return newObject; Js Automatically Added these two lines when it is a constructor ("new" keyword)
// }
// let emp4=new createEmployeeObject("Hassan",20,"M","IT manager");

/*Function meant to be Called in Constructor mode*/

// function Employee(firstName, lastName, age, designation) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//         this.designation = designation;

//         //this.fullName = this.firstName + " " + this.lastName; // Set the fullName property
//         this.getFullName = function () {
//             this.fullName = this.firstName + " " + this.lastName; // Set the fullName property
//             return this.fullName;
//         };
//         this.display = function(){
//                         console.log("Employee information: ");
//                        console.log("Name: " + this.getFullName() + "\nAge: " + this.age + "\nPost: " + this.designation + ".");
            
//     }
//With Class
// class Employee {
//     constructor(firstName, lastName, age, designation) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//         this.designation = designation;

//         //this.fullName = this.firstName + " " + this.lastName; // Set the fullName property
//         this.getFullName = function () {
//             this.fullName = this.firstName + " " + this.lastName; // Set the fullName property
//             return this.fullName;
//         };
//         this.display = function(){
//             console.log("Employee information: ");
//            // console.log("Name: " + this.getFullName() + "\nAge: " + this.age + "\nPost: " + this.designation + ".");
          
//             console.table([
//                 {
//                   "Full Name": this.getFullName(),
//                   "Age": this.age,
//                   "Post": this.designation
//                 }
//               ]);
              
//         }
//     }
// }

// let emp7= new Employee("Aline","Ali",30,"staff")
// let emp8=new Employee("Ali","Raza",23,"Staff member")
// // console.log(emp7.getFullName()+" Full name of the employee 7.")
// // console.log(emp8.getFullName()+" Full name of the employee 8.")

// emp7.display();
// emp8.display();























////////////////////////////////////////////////////////////////////////
//possible ways to create an object in Js
// 1. Object Literals.
// // console.log("1. Object Literals.");
// // const Student={
// //     name: "Hassan",
// //     agr: 21
// // };
// console.log(student);

// 2. Constructor function.
// console.log("2. Constructor function");
// function Student(name,age)
// {
//     this.name=name;
//     this.age=age;    
// };
// const StudentObj = new Student("Hassan Hafeez",21)
// console.log(StudentObj.name);

//3. object.create
// console.log("3. Object.Create");
// const prototypeObj = {
//     name: "john"
// };
// const newObj = Object.create(prototypeObj);
// console.log(newObj.name)


//4. ES6 Class
// class vehicle {
//     constructor(type,price)
//     {
//         this.type=type;
//         this.price=price;
//     }
//     carModel() {
//         if (this.price <= 100) {
//             return "your budget car is Toyota.";
//         } else if (this.price <= 200) {
//             return "your budget car is Honda.";
//         } else {
//             return "your budget is too High you can buy every car!!!";
//         }
//     }
//     carDisplay()
//     {
//         console.log(this.carModel()+" "+this.type+".")
//     }
// }
// const myCar=new vehicle("sedan",200);
// myCar.carDisplay();

//5. factory function
// function createPerson(name, age) {
//     return {
//       name: name,
//       age: age,
//     };
//   }
//   const person = createPerson("Alice", 25);
  
//6. Object Constructor
function School() {
    this.name = "LGS";
    this.noOfStudents = 200;
}

const objSchool = new School();

console.log(`The name of School is ${objSchool.name} and total Students in school are ${objSchool.noOfStudents}.`);

