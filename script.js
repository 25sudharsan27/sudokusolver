var arr = [[], [], [], [], [], [], [], [], []];
for (var row = 0; row < 9; row++) {
    for (var column = 0; column < 9; column++) {
        arr[row][column] = document.getElementById(row * 9 + column);
    }
}

var board = [[], [], [], [], [], [], [], [], []];

function FillBoard(board) {
    for (var row = 0; row < 9; row++) {
        for (var column = 0; column < 9; column++) {
            arr[row][column].innerText = board[row][column] !== 0 ? board[row][column] : '';
        }
    }
}

function BoardColor(){
    for(var row=0 ; row<9 ;row++){
        for(var column = 0; column < 9 ; column++){
            arr[row][column].style.transition = "background-color 0.5s";
            arr[row][column].style.backgroundColor = "white";
        }
    }
}
const puzzles = [
    [
        [0, 0, 7, 1, 0, 0, 0, 6, 0],
        [1, 0, 5, 2, 0, 8, 0, 0, 0],
        [6, 0, 0, 0, 0, 7, 1, 2, 0],
        [3, 1, 2, 4, 0, 5, 0, 0, 8],
        [0, 0, 6, 0, 9, 0, 2, 0, 0],
        [0, 0, 0, 0, 0, 3, 0, 0, 1],
        [0, 0, 1, 0, 0, 4, 9, 8, 6],
        [8, 0, 3, 9, 0, 6, 0, 0, 0],
        [0, 6, 0, 0, 8, 2, 7, 0, 3]
    ],
    [
        [0, 0, 0, 2, 6, 0, 7, 0, 1],
        [6, 8, 0, 0, 7, 0, 0, 9, 0],
        [1, 9, 0, 0, 0, 4, 5, 0, 0],
        [8, 2, 0, 1, 0, 0, 0, 4, 0],
        [0, 0, 4, 6, 0, 2, 9, 0, 0],
        [0, 5, 0, 0, 0, 3, 0, 2, 8],
        [0, 0, 9, 3, 0, 0, 0, 7, 4],
        [0, 4, 0, 0, 5, 0, 0, 3, 6],
        [7, 0, 3, 0, 1, 8, 0, 0, 0]
    ],
    [
        [0, 2, 0, 6, 0, 8, 0, 0, 0],
        [5, 8, 0, 0, 0, 9, 7, 0, 0],
        [0, 0, 0, 0, 4, 0, 0, 0, 0],
        [3, 7, 0, 0, 0, 0, 5, 0, 0],
        [6, 0, 0, 0, 0, 0, 0, 0, 4],
        [0, 0, 8, 0, 0, 0, 0, 1, 3],
        [0, 0, 0, 0, 2, 0, 0, 0, 0],
        [0, 0, 9, 8, 0, 0, 0, 3, 6],
        [0, 0, 0, 3, 0, 6, 0, 9, 0]
    ],
    [
        [0, 0, 0, 0, 2, 0, 0, 0, 0],
        [5, 0, 0, 0, 0, 0, 0, 8, 4],
        [0, 0, 0, 1, 0, 8, 0, 2, 0],
        [0, 0, 0, 0, 0, 0, 3, 0, 0],
        [9, 0, 7, 0, 0, 0, 0, 0, 1],
        [0, 2, 0, 7, 0, 0, 4, 0, 0],
        [0, 0, 5, 0, 0, 6, 0, 0, 0],
        [0, 0, 0, 0, 4, 0, 0, 0, 0],
        [0, 4, 0, 0, 0, 0, 0, 0, 7]
    ],
    [
        [5, 0, 0, 0, 3, 0, 0, 0, 0],
        [0, 0, 2, 8, 0, 0, 0, 0, 4],
        [0, 1, 0, 0, 0, 0, 0, 0, 5],
        [0, 0, 0, 0, 2, 4, 0, 0, 0],
        [0, 9, 0, 0, 0, 7, 0, 0, 0],
        [8, 0, 0, 6, 0, 0, 0, 0, 0],
        [4, 0, 0, 0, 0, 0, 0, 2, 0],
        [0, 0, 0, 3, 0, 0, 6, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 8, 0]
    ],
    [
        [0, 0, 0, 0, 0, 1, 0, 0, 0],
        [4, 0, 0, 9, 0, 0, 2, 0, 0],
        [0, 5, 0, 2, 0, 0, 0, 0, 7],
        [0, 0, 3, 0, 0, 0, 1, 6, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 8, 5, 0, 0, 0, 3, 0, 0],
        [9, 0, 0, 0, 0, 2, 0, 1, 0],
        [0, 0, 6, 0, 0, 5, 0, 0, 9],
        [0, 0, 0, 1, 0, 0, 0, 0, 0]
    ],
    [
        [0, 0, 0, 0, 0, 0, 0, 0, 7],
        [0, 1, 0, 0, 0, 8, 6, 0, 5],
        [0, 0, 7, 0, 0, 1, 0, 0, 0],
        [3, 0, 0, 4, 6, 0, 0, 5, 0],
        [5, 0, 0, 3, 0, 0, 0, 0, 0],
        [0, 0, 0, 8, 0, 0, 3, 0, 0],
        [9, 0, 0, 0, 5, 0, 7, 0, 0],
        [1, 2, 0, 9, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 4, 0, 0]
    ],
    [
        [8, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 3, 6, 0, 0, 0, 0, 0],
        [0, 7, 0, 0, 9, 0, 2, 0, 0],
        [0, 5, 0, 0, 0, 7, 0, 0, 0],
        [0, 0, 0, 0, 4, 5, 7, 0, 0],
        [0, 0, 0, 1, 0, 0, 0, 3, 0],
        [0, 0, 1, 0, 0, 0, 0, 6, 8],
        [0, 0, 8, 5, 0, 0, 0, 1, 0],
        [0, 9, 0, 0, 0, 0, 4, 0, 0]
    ],
    [
        [1, 0, 0, 0, 0, 7, 0, 0, 0],
        [0, 5, 0, 0, 3, 0, 0, 0, 0],
        [0, 0, 9, 0, 0, 0, 8, 0, 4],
        [0, 4, 0, 0, 2, 0, 0, 0, 0],
        [5, 0, 0, 0, 0, 0, 0, 0, 9],
        [0, 0, 0, 0, 4, 0, 0, 1, 0],
        [2, 0, 7, 0, 0, 0, 5, 0, 0],
        [0, 0, 0, 0, 8, 0, 0, 9, 0],
        [0, 0, 0, 4, 0, 0, 0, 0, 3]
    ],
    [
        [0, 0, 0, 0, 0, 0, 0, 2, 7],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 3, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 6],
        [7, 0, 0, 0, 0, 4, 0, 0, 0],
        [0, 5, 8, 6, 3, 0, 0, 0, 0],
        [0, 1, 3, 2, 6, 0, 0, 0, 0],
        [4, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 8, 0, 0]
    ],
  ];

function getRandomPuzzle() {
    BoardColor();
    const randomIndex = Math.floor(Math.random() * puzzles.length);
    return puzzles[randomIndex];
}

function generateSimpleSudoku() {
    const puzzle = getRandomPuzzle();
    return JSON.parse(JSON.stringify(puzzle)); // Deep copy
}

let GetPuzzle = document.getElementById('GetPuzzle');
let SolvePuzzle = document.getElementById('SolvePuzzle');

GetPuzzle.onclick = function() {
    board = generateSimpleSudoku();
    FillBoard(board);
}

SolvePuzzle.onclick = async () => {
    await sudokuSolver(board, 0, 0, 9);
};

function updateCellColor(row, column, color) {
    arr[row][column].style.transition = "background-color 0.5s";
    arr[row][column].style.backgroundColor = "rgb(207, 226, 252)";
}

function isValid(board, row, column, num, boardSize) {
    for (let var1 = 0; var1 < boardSize; var1++) {
        if ((board[row][var1] === num) || (board[var1][column] === num)) {
            return false;
        }
    }

    let squareRootValue = Math.sqrt(boardSize);
    let startingRowIndexOfSubMatrix = row - (row % squareRootValue);
    let startingColumnIndexOfSubMatrix = column - (column % squareRootValue);
    for (let var1 = startingRowIndexOfSubMatrix; var1 < startingRowIndexOfSubMatrix + squareRootValue; var1++) {
        for (let var2 = startingColumnIndexOfSubMatrix; var2 < startingColumnIndexOfSubMatrix + squareRootValue; var2++) {
            if (board[var1][var2] === num) {
                return false;
            }
        }
    }
    return true;
}

// Use a promise to handle delays
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function sudokuSolver(board, row, column, boardSize) {
    if (row === boardSize) {
        FillBoard(board);
        return true;
    }

    if (column === boardSize) {
        return sudokuSolver(board, row + 1, 0, boardSize);
    }

    if (board[row][column] !== 0) {
        return sudokuSolver(board, row, column + 1, boardSize);
    }

    for (let num = 1; num <= 9; num++) {
        if (isValid(board, row, column, num, boardSize)) {
            board[row][column] = num;

            // await delay(0.000000000000000000000000000001); // Wait for 100ms
            arr[row][column].innerText = num;
            updateCellColor(row, column, "lightgreen");

            if (await sudokuSolver(board, row, column + 1, boardSize)) {
                return true;
            }

            await delay(0.000000000000000000000000000001); // Wait before backtracking
            arr[row][column].innerText = '';
            updateCellColor(row, column, ""); // Reset color
            board[row][column] = 0;
        }
    }
    return false;
}
