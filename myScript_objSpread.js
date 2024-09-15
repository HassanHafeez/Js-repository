//Spread Operator is used with Object
//Spread Operator is used to push the items from one object into another


const dayTime={
    breakFast: "Tea with Boiled Egg",
    lunch: "Chinese"
};

const nightTime = "Mac and Cheese";

//creating a menu
//without spread operator: there is some nesting going on where we don't want it to be.

const backPackingMeals={
    dayTime,
    nightTime
}

// we want to put them both Breakfast and lunch at the same level as the nightTime

const backPackingMealsWithSpOp={
    ...dayTime,
    nightTime
    //so they all have there own keys
}

console.log(backPackingMeals)
console.log(backPackingMealsWithSpOp)