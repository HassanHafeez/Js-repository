//use to replace for in and for each and we can use this to loop over iterable objects like arrays maps and sets.
const line=()=>{
    return(
        console.log("_________________________________")
    ) 
}

for (let letter of "Hassan"){
    console.log(letter)
}
line()

//ARRAY
let topics = ["js","node", "css","web"]

//For in write total no. of values/element
for (let topic in topics){
    console.log(topic)
}
//For of print all values in the array
let Topics = ["javascript","node", "css","web"]
for (let topic of Topics){
    console.log(topic)
}
line()

//Map
const course = new Map();

course.set("HTML", ["Web Structure", "Hyper-text markup language"]);
course.set("CSS", ["Web Styling", "Cas. styling sheet"]);
course.set("JS", ["Web Functionality", "Scripting language"]);

for (let [key, value] of course) {
    console.log(key, value);
}
line()

const topic = new Map();

topic.set("/HTML/Webpage","Html file");
topic.set("/CSS/css","style sheet");
topic.set("/JS/script","scripting sheet");

for (let route of topic) {
    console.log(`All the topic are ${route}`);
}
line()