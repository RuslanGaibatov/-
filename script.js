const boardElement = document.getElementById('board');
const initialBoard = [
    ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
    ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
    ['.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.'],
    ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
    ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'],
];

let selectedSquare = null;

function createBoard() {
    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            const square = document.createElement('div');
            square.classList.add('square', (row + col) % 2 === 0 ? 'white' : 'black');
            square.dataset.row = row;
            square.dataset.col = col;
            square.innerText = initialBoard[row][col] !== '.' ? initialBoard[row][col] : '';

            square.addEventListener('click', () => handleSquareClick(square));
            boardElement.appendChild(square);
        }
    }
}

function handleSquareClick(square) {
    if (selectedSquare) {
        // Logik für das Bewegen der Figuren
        const fromRow = selectedSquare.dataset.row;
        const fromCol = selectedSquare.dataset.col;
        const toRow = square.dataset.row;
        const toCol = square.dataset.col;

        // Bewege die Figur
        initialBoard[toRow][toCol] = initialBoard[fromRow][fromCol];
        initialBoard[fromRow][fromCol] = '.';
        
        selectedSquare.innerText = '';
        square.innerText = initialBoard[toRow][toCol];
        selectedSquare = null; // Zurücksetzen der Auswahl
    } else {
        selectedSquare = square; // Auswahl der Figur
    }
}

createBoard();
