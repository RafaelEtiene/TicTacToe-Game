let cells = document.getElementsByClassName('cell');
let text = document.getElementById('text');

debugger
console.log(text);

cells = Array.from(cells);

let currentPlayer = "X";

let winningCombinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

let checkForWinner = () => {
    winningCombinations.forEach(combination => {
        let check = combination.every(index => 
            cells[index].innerText.trim() == currentPlayer)
        if(check){
            highlightCells(combination);
        }
    })
}

let highlightCells = (combination) => {
    combination.forEach(index => {
        cells[index].classList.add("highlight")
        text.innerHTML = `${currentPlayer} is winner`    
    })
}

cells.forEach((cell) => {
    cell.addEventListener('click', () => {
        if(cell.innerText.trim() != ""){
            return
        }
        cell.innerText = currentPlayer;
        checkForWinner();
        currentPlayer = currentPlayer == "X" ? "O" : "X";

    })
})