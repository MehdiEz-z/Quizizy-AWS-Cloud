const enter_btn = document.querySelector(".enter-btn button");
const info_box = document.querySelector(".info-box");
const exit_btn = info_box.querySelector(".buttons .quit");
const start_btn = info_box.querySelector(".buttons .start");
const quiz_box = document.querySelector(".quiz-box");
const stepper = document.querySelector(".container");
const bullet_one = stepper.querySelector("#bullet-1");
const bullet_two = stepper.querySelector("#bullet-2");
const bullet_tree = stepper.querySelector("#bullet-3");
const bar_stepper = document.querySelector(":root");

// Button Quizizy clicked
enter_btn.onclick = ()=>{
    info_box.classList.add("active-info"); //show info box
    stepper.classList.add("active-stepper"); //show stepper
    bullet_one.classList.add("coloring-bullet");
}

// Button Exit Quiz clicked
exit_btn.onclick = ()=>{
    info_box.classList.remove("active-info"); //hide info box
    stepper.classList.remove("active-stepper"); //hide stepper
}

// Button Start Quiz clicked
start_btn.onclick = ()=>{
    bar_stepper.style.setProperty('--bar-stepper', '50%')
    info_box.classList.remove("active-info"); //hide info box
    quiz_box.classList.add("active-quiz"); //show quiz box
    bullet_two.classList.add("coloring-bullet");
}