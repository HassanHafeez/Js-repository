const sandwich ={
    title:"Reuben",
    price: 100,
    description:"A classic",
    ingredients:[
        "bread",
        "corned beef",
        "dressing",
        "iceberg",
        "cheese"
    ]
};
console.log(sandwich.title)
console.log(sandwich.price)

//Update to include the variables with destructuring
const {title,price} ={
    title:"Classic Reuben",
    price: 200,
    description:"A classic",
    ingredients:[
        "bread",
        "corned beef",
        "dressing",
        "iceberg",
        "cheese"
    ]
};
console.log(title)
console.log(price)
console.log("_________________________________")

//-------------example 2-------------//
const vacation ={

    destination:"Bali",
    travelers:2,
    activity:"exploring",
    cost: 500
};

const marketing=({destination,activity})=>{
    return `Come to ${destination} and do some ${activity}.`;
}

console.log(marketing(vacation))
console.log("_________________________________")
