//Start Quiz
const enter_btn = document.querySelector(".enter-btn button");

//Infos Box
const info_box = document.querySelector(".info-box");
const exit_btn = info_box.querySelector(".buttons .quit");
const start_btn = info_box.querySelector(".buttons .start");

//Quiz Box
const quiz_box = document.querySelector(".quiz-box");
const next_btn = quiz_box.querySelector(".next-btn");

//Stepper component
const stepper = document.querySelector(".container");
const bullet_one = stepper.querySelector("#bullet-1");
const bullet_two = stepper.querySelector("#bullet-2");
const bullet_tree = stepper.querySelector("#bullet-3");
const bar_stepper = document.querySelector(":root");

//Result Box
const result_box = document.querySelector(".result-box");
const quit_btn = result_box.querySelector(".buttons .quit");
const replay_btn = result_box.querySelector(".buttons .restart");


// ------------------------------------------------------------------------------//


// Button Quizizy clicked
enter_btn.onclick = ()=>{
    info_box.classList.add("active-info"); //Show info box
    stepper.classList.add("active-stepper"); //Show stepper
    bullet_one.classList.add("coloring-bullet"); //Coloring first bullet
}

// Button Exit Quiz clicked
exit_btn.onclick = ()=>{
    info_box.classList.remove("active-info"); //Hide info box
    stepper.classList.remove("active-stepper"); //Hide stepper
    bullet_one.classList.remove("coloring-bullet"); //Deoloring first bullet
}

// Button Start Quiz clicked
start_btn.onclick = ()=>{
    bar_stepper.style.setProperty('--bar-stepper', '50%') //Progress stepper to second step
    info_box.classList.remove("active-info"); //Hide info box
    quiz_box.classList.add("active-quiz"); //Show quiz box
    bullet_two.classList.add("coloring-bullet"); //Coloring second bullet
    showQuestions();
}

// Button Next Question clicked
next_btn.onclick = ()=>{
    bar_stepper.style.setProperty('--bar-stepper', '95%') //Progress stepper to third step
    result_box.classList.add("active-result") //Show result
    quiz_box.classList.remove("active-quiz"); //Hide quiz box
    bullet_tree.classList.add("coloring-bullet"); //Coloring third bullet
}

// Button Replay Quiz clicked
replay_btn.onclick = ()=>{
    result_box.classList.remove("active-result"); //Hide stepper
    bar_stepper.style.setProperty('--bar-stepper', '50%') //Restart Progress stepper to first step
    quiz_box.classList.add("active-quiz"); //Show quiz box
    bullet_tree.classList.remove("coloring-bullet"); //Decooloring third bullet
}

// Button Quit Quiz clicked
quit_btn.onclick = ()=>{
    result_box.classList.remove("active-result"); //Hide stepper
    stepper.classList.remove("active-stepper"); //Hide stepper
    bar_stepper.style.setProperty('--bar-stepper', '0%') //Restart Progress stepper to first step
    bullet_one.classList.remove("coloring-bullet"); //Decoloring first bullet
    bullet_two.classList.remove("coloring-bullet"); //Decoloring second bullet
    bullet_tree.classList.remove("coloring-bullet"); //Decooloring third bullet
}


// ------------------------------------------------------------------------------//


//Geting Questions and Responses From Array
function showQuestions(){
    const question_text =document.querySelector(".question-text");
    let question_tag = `<span>${questions[0].question}</span>`
    question_text.innerHTML = question_tag;
}