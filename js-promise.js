//promise:

const promiseOne =new Promise(function(resolve,reject)
{
    setTimeout(function(){
        console.log(`Async Task is completed!`);
        resolve();
    },1000)
})

promiseOne.then(function(){
    console.log("Promise Consumed!!!");
})
//////////////////////////////////////////////////////

new Promise(function(resolve,reject)
    {
        setTimeout(function()
            {
                console.log(`Async 2`);
                resolve();
            }
        ,1000)
    }).then(function(){
        console.log("Async 2 resolved");
    })

////////////////////////////////////////////////////////

const promiseII =new Promise(
    function(resolve,reject)
    {
        setTimeout(()=>{
            let error=false;
            if (!error) {
                resolve(
                    {username: "Hassan",email:"hassan@gmail.com"})
            } else {
                reject(`ERROR: Something went wrong!`)
                
            }
        },1000)
    }
    )

    promiseII.then((user)=>{
       // console.log(user)
        return user;
    }).then((user)=>{
        console.log(`The Username is: ${user.username} and email is: ${user.email}.`);
    })
    .catch((error)=>{
        console.log(error);
    }).finally(()=>{
        console.log(`The Promise is either resolved or Rejected!`);
    })

////////////////////////////////////////////////////////////
// * ASYNC FUNCTION

const promiseIII =new Promise(
    function(resolve,reject)
    {
        setTimeout(()=>{
            let error=false;
            if (!error) {
                resolve(
                    {username: "Hassan",email:"hassan@gmail.com"})
            } else {
                reject(`ERROR: Something went wrong!`)
                
            }
        },1000)
    }
    )

// async function getAllData() {
//     try {
//         const dataSet = await fetch('https://jsonplaceholder.typicode.com/users');
//         // const dataValue = dataSet.json(); JSON WILL WAIT
//         const dataValue = await dataSet.json();
//         console.log(dataValue);
//     } catch (error) {
//         console.log("E:", error);
//     }
// }

// getAllData();

//Same with Then and Catch
fetch('https://jsonplaceholder.typicode.com/users').then((dataSet)=>{
    return dataSet.json();
}).then((dataSet)=>{
    console.log(dataSet);
}).catch((error)=>console.log(error))

