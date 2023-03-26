
let box = document.getElementById('box-container');


for(let i=1; i<=100; i++){

   if(i%3==0){

    if(i%5==0){
        console.log('FizzBuzz');
        box.innerHTML += `<div class="box box--fizzbuzz">FizzBuzz</div>`  
    }else{
        console.log('Fizz');
        box.innerHTML += `<div class="box box--fizz">Fizz</div>`  
        }
    
    }else if(i%5==0){
        console.log('Buzz');
        box.innerHTML += `<div class="box box--buzz">Buzz</div>`  
    }else{
        console.log(i);
        box.innerHTML += `<div class="box box--num">${i}</div>`  
    }
 
}