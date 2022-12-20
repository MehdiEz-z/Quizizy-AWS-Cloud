const enter_btn = document.querySelector(".enter-btn button");
const info_box = document.querySelector(".info-box");
const exit_btn = info_box.querySelector(".buttons .quit");
const start_btn = info_box.querySelector(".buttons .start");
const quiz_box = document.querySelector(".quiz-box")

// Button Quizizy clicked
enter_btn.onclick = ()=>{
    info_box.classList.add("active-info"); //show info box
}

// Button Exit Quiz clicked
exit_btn.onclick = ()=>{
    info_box.classList.remove("active-info"); //hide info box
}

// Button Start Quiz clicked
start_btn.onclick = ()=>{
    info_box.classList.remove("active-info"); //hide info box
    quiz_box.classList.add("active-quiz"); //show quiz box
}