const mainbody = document.querySelector("#etch-a-sketch");

const gridCell = document.createElement('div')
gridCell.classList.add('grid')

let cellsHeightandWidth = 16
let cellSize = 600/cellsHeightandWidth
for(var i = 0; i < cellsHeightandWidth; i++) {
    for(var j = 0; j< cellsHeightandWidth; j++) {
        var div = document.createElement("div");
        div.style.width = cellSize + "px";
        div.style.height = cellSize + "px";
        div.style.background = "white";
        div.style.display = "inline-block";
        div.style.outline = "1px solid black";
        div.style.margin = 0;
        div.style.border = 0;

        var jump = document.createElement("br");
        document.getElementById("container").appendChild(div);
    }
}



function resizeGrid () {

}