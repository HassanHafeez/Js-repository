console.log("\n")
console.log("Sets")



let books= new Set();
books.add("Pride and Prejudice");
books.add("War and Peace").add("Oliver Twist")

console.log(books)
console.log(books.size)

console.log("Books Has Oliver Twist: ",books.has("Oliver Twist"))

//to print all these item we use Foreach loop, map not work
console.log("\n")
books.forEach(function(items){
    console.log(items)
})