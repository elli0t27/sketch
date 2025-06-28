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
        box.addEventListener("mouseover",()=>{
            box.classList.add("hovered")
        })
    }
}
}
for (j = 0; j < 16; j++) {
    const row = document.createElement("div")
    row.classList.add("row")
    for (i = 0; i < 16; i++) {
        const box = document.createElement("div")
        box.classList.add("box")
        row.append(box)
        container.append(row)
    }
}

const box = document.querySelectorAll(".box")

function hov(part) {
    part.addEventListener("mouseover",()=>{
        part.classList.add("hovered")
    })
}
box.forEach(hov)