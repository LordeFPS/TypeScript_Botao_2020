const input1 = document.getElementById("num_1") as HTMLInputElement;
const input2 = document.getElementById("num_2") as HTMLInputElement;
const button = document.getElementById("button")! ; // ! ingnora este componente porque ele é um botão

function sum(a: number,b: number){
       return a + b;
}

button.addEventListener("click", function(){
    
    console.log(sum(Number(input1.value), Number(input2.value)));

})