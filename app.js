let scoreUser = 0;
let scoreComp = 0;
const spanUser = document.getElementById("userscore");
const spanComp = document.getElementById("computerscore");
const scoreDisplay = document.querySelector("tabscore");
const result = document.querySelector(".result > p");
const r = document.getElementById("rock");
const p = document.getElementById("paper");
const s = document.getElementById("scissors");


function getChoiceComp() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumbers = (Math.floor(Math.random() * 3));
    return choices[randomNumbers];
}

function win(choiceUser, compChoice) {
    scoreUser++;
    spanUser.innerHTML = scoreUser;
    spanComp.innerHTML = scoreComp;
    const userName = "user".fontsize(4).sub();
    const compName = "comp".fontsize(4).sub();
    result.innerHTML = `${choiceUser}${userName} a battu ${compChoice}${compName}. T'as gagné !!`;
    document.getElementById(choiceUser).classList.add("green");
    setTimeout(() => { document.getElementById(choiceUser).classList.remove("green"); }, 300)
}

function lose(choiceUser, compChoice) {
    scoreComp++;
    spanUser.innerHTML = scoreUser;
    spanComp.innerHTML = scoreComp;
    const userName = "user".fontsize(4).sub();
    const compName = "comp".fontsize(4).sub();
    result.innerHTML = `${choiceUser}${userName} a été battu par ${compChoice}${compName}. T'as malheureusement perdu !!`;
    document.getElementById(choiceUser).classList.add("red");
    setTimeout(() => { document.getElementById(choiceUser).classList.remove("red"); }, 300)
}

function draw(choiceUser, compChoice) {
    const userName = "user".fontsize(4).sub();
    const compName = "comp".fontsize(4).sub();
    result.innerHTML = `${choiceUser}${userName} est égal à ${compChoice}${compName}. Il y a égalité !!`;
    document.getElementById(choiceUser).classList.add("grey");
    setTimeout(() => { document.getElementById(choiceUser).classList.remove("grey"); }, 300)
}

function game(choiceUser) {
    const compChoice = getChoiceComp();
    switch (choiceUser + compChoice) {
        case 'rockscissors':
        case 'paperrock':
        case 'scissorspaper':
            win(choiceUser, compChoice);
            break;
        case 'rockpaper':
        case 'scissorspaper':
        case 'paperrock':
            lose(choiceUser, compChoice); 
            break;
        case 'paperpaper':
        case 'rockrock':
        case 'scissorsscissors':
            draw(choiceUser, compChoice);
            break;
    }
}

function main() {
    r.addEventListener('click', function () {
        game("rock");
    })
    p.addEventListener('click', function () {
        game("paper");
    })
    s.addEventListener('click', function () {
        game("scissors");
    })
}

main();