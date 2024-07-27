const gridContainer = document.querySelector('.grid-container');
let isDrawing = false;

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`
}

function createSquare() {
    const square = document.createElement('div');
    square.classList.add('square');
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = getRandomColor();
    });
    return square;
}

function initGrid(size) {
    gridContainer.innerHTML = '';
    gridContainer.style.gridTemplateColumns =`repeat(${size}, 1fr)`
    gridContainer.style.gridTemplateRows =`repeat(${size}, 1fr)`

    const containerWidth = gridContainer.clientWidth;
    const containerHeight = gridContainer.clientHeight;
    const squareSize = Math.min(containerWidth, containerHeight) / size;
    
    const totalSquares = size * size;
    for (let i = 0; i < totalSquares; i++) {
        const square = createSquare();
        square.style.width = `${squareSize}px`
        square.style.height = `${squareSize}px`
        gridContainer.appendChild(square);
    }
}

function updateValue() {
    let sizeInput = document.querySelector('.size-input');
    let sizeValue = document.querySelector('.size-value');

    // Initial value
    sizeValue.textContent = sizeInput.value;

    // Update value
    sizeInput.addEventListener('input', function() {
        sizeValue.textContent = sizeInput.value;
        initGrid(sizeInput.value);
    })
}

const clearBtn = document.querySelector('.clear-button');
clearBtn.addEventListener('click', () => {
    document.querySelectorAll('.square').forEach(square => {
        square.style.backgroundColor = 'white';
    });
});

const sizeInp = document.querySelector('.size-input');
window.addEventListener('resize', () => initGrid(sizeInp.value));
updateValue();
initGrid(sizeInp.value);
