document.querySelectorAll('img')[0].setAttribute('src', './images/dice6.png');
document.querySelectorAll('img')[1].setAttribute('src', './images/dice6.png');

let dice1 = document.querySelectorAll('img')[0];
let dice2 = document.querySelectorAll('img')[1];

let flag1 = false;
let flag2 = false;
var N1,N2;

let winner = document.querySelector(".winner");

start = () => {



rollDice1 = () => {
    N1 = Math.floor(Math.random() * 6) + 1;
    console.log('dice 2 : ' + N1);

    switch(N1){
        case 1 : 
        dice1.setAttribute('src', './images/dice1.png');
        break;

        
        case 2 : 
        dice1.setAttribute('src', './images/dice2.png');
        break;

        case 3 : 
        dice1.setAttribute('src', './images/dice3.png');
        break;

        case 4 : 
        dice1.setAttribute('src', './images/dice4.png');
        break;

        case 5 : 
        dice1.setAttribute('src', './images/dice5.png');
        break;

        case 6 : 
        dice1.setAttribute('src', './images/dice6.png');
        break;
        
        default:
            console.log('something went wrong');   
    } 
    flag1 = true;
    flagChecker();
}

rollDice2 = () => {
    N2 = Math.floor(Math.random() * 6) + 1;
    console.log('dice 1 : ' + N2);

    switch(N2){
        case 1 : 
        dice2.setAttribute('src', './images/dice1.png');
        break;

        
        case 2 : 
        dice2.setAttribute('src', './images/dice2.png');
        break;

        case 3 : 
        dice2.setAttribute('src', './images/dice3.png');
        break;

        case 4 : 
        dice2.setAttribute('src', './images/dice4.png');
        break;

        case 5 : 
        dice2.setAttribute('src', './images/dice5.png');
        break;

        case 6 : 
        dice2.setAttribute('src', './images/dice6.png');
        break;
        
        default:
            console.log('something went wrong');   
    }
    flag2 = true;
    flagChecker();
}
reStart = () => {
    flag1 = false;
    flag2 = false;
    flagChecker();
    dice2.setAttribute('src', './images/dice6.png');
    dice1.setAttribute('src', './images/dice6.png');
}
}

flagChecker = () => {
    if(flag1 == false && flag2 == false){
        winner.textContent = "START GAME";
    }
    else if(flag1 == true && flag2 == true){
        if (N1 > N2){
            winner.textContent = "The Winner is Player 1";
        }
        else if(N2 > N1){
            winner.textContent = "The Winner is Player 2";
        }
        else {
            winner.textContent = "The Match is Draw";
        }
    }
    else{
        if(flag1 == true && flag2== false){
            winner.textContent = "Player 2 Roll The Dice";
        }
        
        else if(flag1 == false && flag2 == true){
            winner.textContent = "Player 1   Roll The Dice";
        }
    }
}


