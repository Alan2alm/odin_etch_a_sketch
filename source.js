const container = document.querySelector("#container");
let x = 16;
generateGrid();

function newGrid(){
    x = askValue();
    container.textContent = '';
    generateGrid();
};

function generateGrid(){
    for (let i = 0; i < x; i++){
        let divRow = document.createElement("div");
        divRow.setAttribute("id", "divRow");
        for (let k = 0; k < x; k++){
            let div = document.createElement("div");
            div.setAttribute("id", "grid");
            div.addEventListener("mouseover", ()=>{
                changeColor(div);
            });
            divRow.appendChild(div);
        }
        container.appendChild(divRow);
    };
};

function askValue(){
    x = Number(prompt("Type the value, Only 0 to 100.", "0"));
    if (x >= 100 || x < 0){
        x = askValue();
    }
    return x;
}

function changeColor(e){
    e.setAttribute('style', 'background: rgb(' + getRandomRGBValue() + ', ' + getRandomRGBValue() + ', ' + getRandomRGBValue() + ')');
};

function getRandomRGBValue() {
    return Math.floor(Math.random() * 255);
  }
  