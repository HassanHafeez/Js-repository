const print= (firstName,gender,Edu)=>{
    console.log("Name: " + firstName )
    //by using Template String 
    console.log(
        `Name: ${firstName}\nGender: ${gender}\nEducation ${Edu} `)
} 

print("Hassan","Male","BsCS")

const orderDetail=(firstName,price)=>{
    let shipping=5.95;
    console.log(`Hi ${firstName}! Thanks for Shopping!
        Total: ${price}
        shipping: ${shipping}
        Grand Total: $${price+shipping}
        `)
}

orderDetail("Ali",500)