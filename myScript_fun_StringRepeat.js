//repeat function copy and return the string
let yell= "woo!"
let party=yell.repeat(20);

console.log(party);

let cat={
    meow(times){
        console.log("Meow ".repeat(times));
    },
    purr(times){
        console.log("Purr ".repeat(times));
    },
    Snore(times){
        console.log("ZzzZ ".repeat(times));
    }

}

cat.meow(3)
cat.purr(3)
cat.Snore(3)