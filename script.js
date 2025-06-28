const container = document.querySelector(".grid")

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
        let op = 0
        box.addEventListener("mouseover",()=>{
            box.style.backgroundColor="black"
            box.style.opacity= op+0.1
            op=op+0.1
        })
    }
}
}
newGrid()