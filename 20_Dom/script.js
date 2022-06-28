const btn = document.querySelector(".btn");
btn.addEventListener("click", generateNumber);
const inputArea = document.querySelector(".inputArea");

const anaDiv = document.querySelector(".container")

let rowDom = document.createElement("div");
rowDom.className = "row";
const smallDom = document.querySelector("small");

function generateNumber() {
    let sayi = inputArea.value;
    if (isNaN(sayi)) {
        smallDom.classList.add("goster");
    } else {
        smallDom.remove();

        for (var i = 0; i <= sayi; i++) {
            anaDiv.appendChild(rowDom);
            const colDom = document.createElement("div");
            colDom.classList.add("col-sm-2", "kutu");
            rowDom.appendChild(colDom);
            colDom.textContent = i;
            if (i % 2 === 0) {
                colDom.classList.add("green");
            } else {
                colDom.classList.add("red");
            }
        }
        inputArea.value = "";
        inputArea.addEventListener("click", temizle)

        function temizle() {
            rowDom.innerHTML = "";
        }
    }


}