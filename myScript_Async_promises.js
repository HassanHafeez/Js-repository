const delay=(seconds)=>
    new Promise((resolve,reject)=>{

        if(typeof seconds !== "number"){
            reject( new Error("Seconds must be in numbers"))
        }
        setTimeout(resolve,seconds *1000)
    
    });

console.log("Zero seconds")

delay(1).then(()=>console.log("One Second"));
delay("one").then(()=>console.log("five Seconds"));