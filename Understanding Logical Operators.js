let isWeekend = true;
let isHoliday = true;
let isSunny = false;

// The && operator checks if both conditions are true, || checks if either one is true.

if(isWeekend && isSunny){
    console.log("it's the weekend and and it's Sunny, Let's go to the park!.")
}else if(isHoliday && !isSunny){
    console.log("It's a holiday but not Sunny, Let's go to the museum. ")
}else if(isWeekend || isHoliday){
    console.log("It's is either weekend or a holiday, Let's decide based on the weather.")
}else{
    console.log("It's neither the weekend nor a holiday, let's stay at home.")
}
