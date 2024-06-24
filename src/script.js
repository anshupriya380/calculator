let button=document.getElementById("containerOfAllButtons");
let input=document.getElementById("input");
const one = document.getElementById("one");

one.addEventListener("click",()=>{
    input.value=input.value+1;
})
two.addEventListener("click",()=>{
    input.value =input.value+ 2;
})
three.addEventListener("click",()=>{
    input.value =input.value+ 3;
})
four.addEventListener("click",()=>{
    input.value =input.value+ 4;
})
five.addEventListener("click",()=>{
    input.value =input.value+ 5;
})
six.addEventListener("click",()=>{
    input.value =input.value+ 6;
})
seven.addEventListener("click",()=>{
    input.value =input.value+ 7;
})
eight.addEventListener("click",()=>{
    input.value =input.value+ 8;
})
nine.addEventListener("click",()=>{
    input.value =input.value+ 9;
})
zero.addEventListener("click",()=>{
    input.value =input.value+ 0;
})

minus.addEventListener("click",()=>{
    input.value =input.value+ "-";
})
star.addEventListener("click",()=>{
    input.value = input.value+"*";
})
dot.addEventListener("click",()=>{
    input.value = input.value+".";
})
equal.addEventListener("click",()=>{
    result=(eval(input.value));
    input.value=result;
})
add.addEventListener("click",()=>{
    input.value =input.value+ "+";
})
divide.addEventListener("click",()=>{
    input.value =input.value+ "/";
})
clear.addEventListener("click",()=>{
    input.value ="";
})

