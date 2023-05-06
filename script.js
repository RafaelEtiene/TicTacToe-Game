let cells = document.getElementsByClassName('cell');
let text = document.getElementById('text');
let restartBtn = document.getElementById('restartBtn');
let winsCountX = document.getElementById('winsX');
let winsCountO = document.getElementById('winsO');

restartBtn.style.display = 'none';

cells = Array.from(cells);
let winsX = 0;
let winsO = 0;


let currentPlayer = "X";

let winningCombinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]


cells.forEach((cell) => {
    cell.addEventListener('click', () => {
        if(cell.innerText.trim() != ""){
            return
        }
        let validateCell = false;
        console.log(cell);
        currentPlayer = currentPlayer == "X" ? "O" : "X";
        cell.innerText = currentPlayer;
        checkForWinner();
        restart();
    })
})


let checkForWinner = () => {
    
    winningCombinations.forEach(combination => {
        let check = combination.every(index => 
            cells[index].innerText.trim() == currentPlayer);
        if(cells.length == 0  && check == false){
            text.innerHTML = `No winner`;
            restartBtn.style.display = 'block';     
        }
        if(check){
            highlightCells(combination);
            restartBtn.style.display = 'block';
        }
    })
}

let highlightCells = (combination) => {
    combination.forEach(index => {
        cells[index].classList.add("highlight");
    })
    text.innerHTML = `${currentPlayer} is winner`;
    if(currentPlayer == "X"){
        winsX++;
        winsCountX.innerText = `X wins: ${winsX}`;
    }else{
        winsO++;
        winsCountO.innerText = `O wins: ${winsO}`
    }
}

let restart = () => {

    restartBtn.addEventListener('click', () => {
        cells.forEach((cell) => {
            cell.innerText = "";
            cell.classList.add("normal");
            text.innerHTML = "Tic Tac Toe Game";
            restartBtn.style.display = 'none';
    }) 
    return true;
    
    })   
}