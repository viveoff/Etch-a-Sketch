const container = document.querySelector("#container");
let gridNum = 16;
const btn = document.querySelector('.btn');

createGrid(gridNum);
colorGrid();

btn.addEventListener('click', () => {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
        }
    do {
        gridNum = prompt('Grid size:');
    } while (gridNum > 100)
    createGrid(gridNum);
})

function createGrid(gridNum) {
    container.innerHTML = '';
    for (i = 0; i < gridNum; i++) {
        parentDiv = document.createElement('div');
        parentDiv.classList.add('sub-container');
        for (j = 0; j < gridNum; j++) {
            div = document.createElement('div');
            div.classList.add('grid');
            parentDiv.appendChild(div);
        }
        container.appendChild(parentDiv);
    }

    grid = document.querySelectorAll('.grid');
    subContainer = document.querySelectorAll('.sub-container');
    gridSize();
    colorGrid();
}

function gridSize() {
    grid.forEach((grid) => {
        grid.style.width = (750 / gridNum) + "px";
        grid.style.height = (750/ gridNum) + "px";
    })
}

function colorGrid() {
    grid.forEach((grid) => {
        grid.addEventListener("mouseenter", () => {
            grid.style.backgroundColor = 'black';
        });
    });
}