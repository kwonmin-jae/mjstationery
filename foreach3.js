const tabButtons = document.querySelectorAll('.tabButtons > button')
const tabContents = document.querySelectorAll('.tabContents > div')

Array.from(tabButtons).forEach((button, index)=>{
    button.addEventListener('click', function(){
        // 버튼 누르는 동시에 각 버튼과 컨텐츠에 붙어있는 on 제거하기
        for(button of tabButtons) button.classList.remove("on");
        for(content of tabContents) content.classList.remove("on");

        // 클릭시 그 버튼과 인덱스번호가 맞는 컨텐츠박스에 on 붙이기
        this.classList.add('on')
        tabContents[index].classList.add('on')
    })
})
tabButtons[0].click() // 트리거 실행 (첫번째 열어놓기)
