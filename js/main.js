const gridContainer = document.querySelector('.main-grid');
let gridSize = 16;
let blackColorBool = false;
let randomColorBool = true;
let whiteColorBool = false;

createGrid(gridSize);

function setGridSize(){
    let currentGridSize = parseInt(prompt("Enter the grid size (1 - 100): "));
    
    if(currentGridSize >= 1 && currentGridSize <= 100){
        gridContainer.innerHTML = '';
        gridSize = currentGridSize;
        createGrid(gridSize);
        document.getElementById("txt").innerHTML = `Current grid size: ${gridSize} x ${gridSize}`;
        
    } else {
        if(currentGridSize < 1 || currentGridSize > 100){
            
            currentGridSize = prompt("Enter the grid size (1 - 100): ");
        
        } else if(currentGridSize === '' || currentGridSize === null){
            return;
        }

    }
        
}
    
function createGrid(gridNewSize){
    for(let i = 0; i < (gridNewSize * gridNewSize); i++){
        const gridCell = document.createElement("div");
        
        gridCell.style.flexBasis = 100 / gridNewSize + '%';
        gridContainer.appendChild(gridCell);
    }
}

function clearGrid(){
    gridContainer.innerHTML = "";
    gridSize = 16;
    createGrid(gridSize);
    document.getElementById("txt").innerHTML = `Current grid size: ${gridSize} x ${gridSize}`;
}

function getRandomColor(){
    return `hsl(${Math.random() * 360},100%,80%)`;
}

function toBlackColor(){
    blackColorBool = true;
    randomColorBool = false;
    whiteColorBool = false;
}

function toRandomColor(){
    blackColorBool = false;
    randomColorBool = true;
    whiteColorBool = false;
}

function toWhiteColor(){
    blackColorBool = false;
    randomColorBool = false;
    whiteColorBool = true;
}

gridContainer.addEventListener("mouseover",(event) => {
    const hoveredElement = event.target;
    
    if(hoveredElement !== gridContainer){
        if(randomColorBool == true){
            hoveredElement.style.backgroundColor = getRandomColor();
        }
        if(blackColorBool == true){
            hoveredElement.style.backgroundColor = "black";
        }
        if(whiteColorBool == true){
            hoveredElement.style.backgroundColor = "white";
        }
    }
});