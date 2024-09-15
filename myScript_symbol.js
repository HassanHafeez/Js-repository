
/*if you want to capture a unique identifier and associate that with 
an object make it a symbol and you'll never get into naming conflicts.
*/

const id= Symbol();

const courseInfo={
    title:"JavaScript",
    topics:["Strings","Arrays","Objects"],
    id:"js-course"
}

courseInfo[id]=41234 //unique identifier
console.log(courseInfo)

const courseInfo2={
    title:"Pythons",
    topics:["Strings","Arrays","Objects"],
    id:"py-course"
}

courseInfo2[id]=4123900 //unique identifier
console.log(courseInfo2)
console.log("\n")