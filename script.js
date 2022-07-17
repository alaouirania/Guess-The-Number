const number = document.getElementById('number');
const clue = document.getElementById('clue');
const rand = Math.floor(Math.random() * 100);
console.log(rand);
function guess(){
    const number = document.getElementById('number');
    const clue = document.getElementById('clue');
        if(number.value < rand){
            clue.innerHTML = "The number guessed is smaller than the right number !";
        }else if(number.value > rand){
            clue.innerHTML = "The number guessed is bigger than the right number !";
        }else if(number.value === rand){
            clue.innerHTML = "The number is right !";
        }else{
            clue.innerHTML = "Enter a valid number !";
        }
}

