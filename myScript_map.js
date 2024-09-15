//Why Map
let course= new Map();

course.set("react",{description: "UI"});
course.set("jest",{description: "Testing"});

console.log(course)
console.log(course.react) // we cant asses the keys with not notation the map is not object.
console.log(course.get("react"))

//map provides Arrays of object feature
let details = new Map( // sending values directly into constructor
    [
        [new Date(), "today"],
        [2, {javascript:["JS","Node","react"]}],
        ["item",[1,2]]
    ]
); 

console.log(details.size);
// console.log(details)

//Loop print all values
details.forEach(function(item){
    console.log(item)
})