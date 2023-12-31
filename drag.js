const draggable = ($target) => {
    let isPress = false,
        prevPosX = 0,
        prevPosY = 0;
    
    $target.onmousedown = start;
    $target.onmouseup = end;
      
    // 상위 영역
    window.onmousemove = move;
   
    function start(e) {
      prevPosX = e.clientX;
      prevPosY = e.clientY;
  
      isPress = true;
    }
  
    function move(e) {
      if (!isPress) return;
  
      const posX = prevPosX - e.clientX; 
      const posY = prevPosY - e.clientY; 
      
      prevPosX = e.clientX; 
      prevPosY = e.clientY;
      
      $target.style.left = ($target.offsetLeft - posX) + "px";
      $target.style.top = ($target.offsetTop - posY) + "px";
    }
  
    function end() {
      isPress = false;
    }
  }
  
  window.onload = () => {
    const $target = document.querySelector(".mover");
    
    draggable($target);
}

// 추가한 코드
function toggleDrag__div() {
  // 토글 할 버튼 선택 (btn1)
  const Drag__div = document.getElementById('Drag__div');
  // btn1 숨기기 (visibility: hidden)
  if(Drag__div.style.visibility !== 'hidden') {
    Drag__div.style.visibility = 'hidden';
  }
}
