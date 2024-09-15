//...
//turns the elements of an array into arguments of a function Call.
// or into elements of an array literals...
 
let cats=["Biscuit","Jungle"];
let dogs=["stella","Camper"];

// let animal=["Smoky","Miro","Swimmy",cats, dogs] // we found 3 element and 2 nested element in the array
// console.log(animal)

let animal=["Smoky","Miro","Swimmy", ...cats, ...dogs];
console.log(animal)