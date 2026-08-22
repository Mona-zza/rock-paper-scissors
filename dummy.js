const playerdisplay = document.getElementById
("player-choice");
const computerdisplay = document.getElementById
("computer-choice");
const resultdisplay = document.getElementById
("resultdisplay");

const choices =["Rock","Paper","scissors"];

function Game(playerchoice){

    const computerchoice = choices[Math.floor (Math.
        random () * 3)];

        const getresult = (playerchoice, computerchoice) =>

            playerchoice === computerchoice ? "IT IS A TIE!😕" :
        ( playerchoice === "Rock" && computerchoice === "scissors") ||
        (playerchoice === "paper" && computerchoice === "Rock")  ||
        (playerchoice ==="scissors" && computerchoice === "Paper") 
        ? "YOU WIN !😍"
        : "YOU LOSE😔";

         const result =getresult(playerchoice,computerchoice);
         resultdisplay.textContent = result;
         playerdisplay.textContent = `PLAYER :${playerchoice}`
         computerdisplay.textContent =`COMPUTER:${computerchoice}`

         resultdisplay.style.backgroundColor =
         result === "IT IS A TIE!😕"
         ? "BLUE"
         : result =="YOU WIN !😍"
         ? "GREEN"
         : "red";
         resultdisplay.style.border = "2px solid transparent"
         resultdisplay.style.color = "white";
} 