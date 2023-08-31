// dom 초기화
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext('2d');

const colorBtns = document.querySelectorAll(".pallet button");
const eraserBtn = document.querySelector("#eraser");
const downloadBtn = document.querySelector("#download");

//그리기 설정
let isDrawing = false;
let isErasing = false;

ctx.lineWidth = 5;
ctx.strokeStyle = "red";

//이벤트 리스너
function startDrawing(e){
    isDrawing = true;
    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);
}

function drawing(e){
    if(!isDrawing) return;
    if(isErasing){
        // 지우기 모드
        ctx.clearRect(e.offsetX, e.offsetY, 20, 20);
    }else{
        // 그리기 모드
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
    }
}

function stopDrawing(){
    isDrawing = false;
    ctx.closePath();
}

//색상 선택
function changeColor(e){
    isErasing = false;
    ctx.strokeStyle = e.currentTarget.dataset.color;
    colorBtns.forEach(button => {
        if(button === e.currentTarget){
            button.classList.add("selected");
        }else{
            button.classList.remove("selected");
        }
    });
    eraserBtn.classList.remove("selected");
}

function startErasing(e){
    isErasing = true;
    colorBtns.forEach(button => button.classList.remove("selected"))
    e.currentTarget.classList.add("selected");
}

function downloadCanvas(){
    const image = canvas.toDataURL("image/png", 1.0);
    const linkEl = document.createElement("a");
    linkEl.href = image;
    linkEl.download = 'Paint'
    linkEl.click();
}

//이벤트 연결
canvas.addEventListener("mousedown", startDrawing);
canvas.addEventListener("mousemove", drawing);
canvas.addEventListener("mouseup", stopDrawing);
colorBtns.forEach(button => button.addEventListener("click", changeColor));
eraserBtn.addEventListener("click", startErasing);
downloadBtn.addEventListener("click", downloadCanvas);