const mainbody = document.querySelector("#container");


function creategrid(x) {
let cellsHeightandWidth = x
let cellSize = 600/cellsHeightandWidth
for(var i = 0; i < cellsHeightandWidth; i++) {
    for(var j = 0; j< cellsHeightandWidth; j++) {
        var div = document.createElement("div");
        div.style.width = cellSize + "px";
        div.style.height = cellSize + "px";
        div.style.display = "inline-block";
        div.style.outline = "1px solid black";
        div.style.margin = 0;
        div.style.border = 0;

        var jump = document.createElement("br");
        document.getElementById("container").appendChild(div)
        
    }
}
makeHoverable()
}

function makeHoverable() {
    const nodes = document.getElementById('container').childNodes;
    for(let i=0; i<nodes.length; i++) {
    if (nodes[i].nodeName.toLowerCase() == 'div') {
        nodes[i].addEventListener('mouseenter', e => nodes[i].classList.add('hoveredCell'))
     }
}
}


function resizeGrid () {
    let newSize = prompt("Input a new size for the Grid.")
    if (newSize > 100 || newSize<1) {
        alert("Please input a size above 0x0 and less than or equal to 100x100!")
    }
    else{
    mainbody.innerHTML= ""
    creategrid(newSize)
    }
}

function clearGrid() {
    let gridSize = Math.sqrt(mainbody.getElementsByTagName('div').length);
    mainbody.innerHTML=''
    console.log(gridSize)
    creategrid(gridSize);
}



let resizeButton = document.querySelector ("#GridResize");
resizeButton.addEventListener('click', function() {
    resizeGrid();
});

let clearButton = document.querySelector ("#ClearButton");
clearButton.addEventListener('click', function() {
    clearGrid();
});


creategrid(16)

