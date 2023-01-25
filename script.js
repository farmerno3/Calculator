
let outputScreen = document
.getElementById("outputscreen")
function display(num){
outputScreen.value += num
}
function Calculate(){ 
try{
   outputScreen.value =  eval
  (outputScreen.value);
}

catch(err)
{
alert("It's invalid")
}
}
function Clear(){
   outputScreen.value = "";
   
}
function del(){
   outputScreen.value = outputScreen.value
   .slice(0,-1)
}
