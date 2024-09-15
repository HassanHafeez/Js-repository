//A function that will return an object
const Skier=(name,sound)=>{
    return{
        name,
        sound,
        powderYell: function(){
            let yell=this.sound;
            console.log(`${yell}! ${yell}`);
        }
    };
}
// console.log(Skier("Sandy","Oye"))

Skier("Sandy","Oye").powderYell();