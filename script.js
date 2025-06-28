const container = document.querySelector(".grid")
function randomColor() {
    num1= String(Math.floor(Math.random()*255))
    num2= Math.floor(Math.random()*255)
    num3= Math.floor(Math.random()*255)
    return `rgb(${num1},${num2},${num3})`}
function newGrid(){
    const num = parseInt(prompt("Enter num of grid"))
    container.innerHTML=""
    for (j = 0; j < num; j++) {
    const row = document.createElement("div")
    row.classList.add("row")
    for (i = 0; i < num; i++) {
        const box = document.createElement("div")
        box.classList.add("box")
        row.append(box)
        container.append(row)
        box.addEventListener("mouseover",()=>{
            box.style.backgroundColor=randomColor()
        })
    }
}
}
newGrid()