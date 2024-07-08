const rollNo=123;
let studentName="Hafeez";
// const age=18;
// let address="Lahore";
// var state="Punjab";
//console.log(rollNo);
//console.log(studentName);
//const message= `Const: Value cannot br changed after initialization:\nRoll No.: ${rollNo}\n Name: ${studentName}` ;
studentName="Hassan";
const message = `Const: Value cannot be changed after initialization:<br>Roll No.: ${rollNo}<br>Name: ${studentName}
<br>Var: Not to use in ES6.`;
//const table=console.table([studentName,rollNo,age,address,state]);
document.getElementById("var").innerHTML = message ;

