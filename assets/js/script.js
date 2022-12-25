//Start Quiz
const enter_btn         = document.querySelector(".enter-btn button");

//Infos Box
const info_box          = document.querySelector(".info-box");
const exit_btn          = info_box.querySelector(".buttons .quit");
const start_btn         = info_box.querySelector(".buttons .start");

//Quiz Box
const quiz_box          = document.querySelector(".quiz-box");
const next_btn          = quiz_box.querySelector(".next-btn");
const question_text     = quiz_box.querySelector(".question-text");
const option_list       = quiz_box.querySelector(".option-list");
const total_question    = quiz_box.querySelector(".total-question");
const bar_progress      = document.querySelector(":root");

//Stepper component
const stepper           = document.querySelector(".container");
const bullet_one        = stepper.querySelector("#bullet-1");
const bullet_two        = stepper.querySelector("#bullet-2");
const bullet_tree       = stepper.querySelector("#bullet-3");
const bar_stepper       = document.querySelector(":root");

//Result Box
const result_box        = document.querySelector(".result-box");
const quit_btn          = result_box.querySelector(".buttons .quit");
const replay_btn        = result_box.querySelector(".buttons .restart");
const expilcation       = result_box.querySelector(".explication");

// Counters
let question_counter    = 0; //Question counter
let question_number     = 1; //Question number  
let progress_conter     = 10; //Progress Bar counter
let score_counter       = 0; //User Score counter
let incorect_array      = [];//Array Stock incorrect Response


// ------------------------ Buttons ------------------------ //


// Button Quizizy clicked
enter_btn.onclick   = ()=>{
    info_box.classList.add("active-info") //Show info box
    stepper.classList.add("active-stepper") //Show stepper
    bullet_one.classList.add("coloring-bullet") //Coloring first bullet
}

// Button Exit Quiz clicked
exit_btn.onclick    = ()=>{
    info_box.classList.remove("active-info") //Hide info box
    stepper.classList.remove("active-stepper") //Hide stepper
    bullet_one.classList.remove("coloring-bullet") //Deoloring first bullet
}

// Button Start Quiz clicked
start_btn.onclick   = ()=>{
    bar_progress.style.setProperty('--bar-progress', `${progress_conter}%`) //Progress bar 10%
    bar_stepper.style.setProperty('--bar-stepper', '50%') //Progress stepper to second step
    info_box.classList.remove("active-info"); //Hide info box
    quiz_box.classList.add("active-quiz"); //Show quiz box
    bullet_two.classList.add("coloring-bullet"); //Coloring second bullet
    showQuestions(0);
    questionCounter(1);
}

// Button Next clicked
next_btn.onclick        = ()=>{
    if(question_counter < questions.length - 1){
        question_counter ++
        question_number ++
        progress_conter +=10
        showQuestions(question_counter)
        questionCounter(question_number)
        bar_progress.style.setProperty('--bar-progress', `${progress_conter}%`) //Incrementation Progress bar
        next_btn.style.display     = "none"
    }else{
        showResult();
    }
}

// Button Replay Quiz clicked
replay_btn.onclick      = ()=>{
    question_counter    = 0
    question_number     = 1
    progress_conter     = 10
    score_counter       = 0
    incorect_array      = []
    result_box.classList.remove("active-result"); //Hide stepper
    bar_stepper.style.setProperty('--bar-stepper', '50%') //Restart Progress stepper to first step
    bar_progress.style.setProperty('--bar-progress', `${progress_conter}%`) //Restart Progress bar
    quiz_box.classList.add("active-quiz"); //Show quiz box
    bullet_tree.classList.remove("coloring-bullet"); //Decooloring third bullet
    showQuestions(question_counter);
    questionCounter(question_number);
    next_btn.style.display          = "none"
    expilcation.innerHTML           = ""

}

// Button Quit Quiz clicked
quit_btn.onclick        = ()=>{
    question_counter    = 0
    question_number     = 1
    progress_conter     = 10
    score_counter       = 0
    incorect_array      = []
    result_box.classList.remove("active-result") //Hide stepper
    stepper.classList.remove("active-stepper") //Hide stepper
    bar_stepper.style.setProperty('--bar-stepper', '0%') //Restart Progress stepper to first step
    bar_progress.style.setProperty('--bar-progress', `${progress_conter}%`) //Restart Progress bar
    bullet_one.classList.remove("coloring-bullet") //Decoloring first bullet
    bullet_two.classList.remove("coloring-bullet") //Decoloring second bullet
    bullet_tree.classList.remove("coloring-bullet") //Decooloring third bullet
    showQuestions(question_counter)
    questionCounter(question_number)
    next_btn.style.display          = "none"
    expilcation.innerHTML           = ""
}


// ------------------------ Functions ------------------------ //


//Geting Questions and Responses From Array
function showQuestions(index){
    //Get Question
    let question_tag                = `<span>${questions[index].suite +".  "+ questions[index].question}</span>`
    question_text.innerHTML         = question_tag

    //Get Response
    let option_tag                  = `<div class="option"><span>${questions[index].options[0]}</span></div>
                                    <div class="option"><span>${questions[index].options[1]}</span></div>
                                    <div class="option"><span>${questions[index].options[2]}</span></div>
                                    <div class="option"><span>${questions[index].options[3]}</span></div> `
    option_list.innerHTML           = option_tag

    //Set Attribute "onclick" to Options
    const option                    = option_list.querySelectorAll(".option");
    for(let i = 0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}

//Option Selected
function optionSelected(reponse){
    let user_reponse                = reponse.textContent
    let correct_reponse             = questions[question_counter].reponse
    let question_reponse            = questions[question_counter].question
    let objet                       = {
                                        question : question_reponse,
                                        false    : user_reponse,
                                        true     : correct_reponse,
                                      }
    let allOptions                  = option_list.children.length
    if (user_reponse == correct_reponse) {
        reponse.classList.add("correct")
        score_counter += 100
    }else{
        reponse.classList.add("incorrect")
        incorect_array.push(objet);
        console.log(incorect_array)
    }

    // Once User Select Disable All option
    for(let i = 0; i < allOptions; i++){
        option_list.children[i].classList.add("disabled")
    }
    next_btn.style.display          = "block"
}

//Show Counter Question
function questionCounter(index){
    let questionCounter_tag         = `<span><p>${index}</p>of<p>${questions.length}</p></span>`
    total_question.innerHTML        = questionCounter_tag
}

//Show Result Box
function showResult(){
    bar_stepper.style.setProperty('--bar-stepper', '95%') //Progress stepper to third step
    quiz_box.classList.remove("active-quiz") //Hide quiz box
    result_box.classList.add("active-result") //Show result
    bullet_tree.classList.add("coloring-bullet") //Coloring third bullet

    //Condition Result score
    const score_text                = result_box.querySelector(".score-text");
    if(score_counter == 1000){
        let score_tag               = `<span>and Congrats! You got <p>${score_counter}</p> Points</span>`
        score_text.innerHTML        = score_tag
        expilcation.style.display   =  "none" //Hide explication
    }else if(score_counter < 1000 && score_counter >= 500){
        let score_tag               = `<span>and Nice! You got <p>${score_counter}</p> Points</span>`
        score_text.innerHTML        = score_tag
    }else{
        let score_tag               = `<span>and Sorry! You got only <p>${score_counter}</p> Points</span>`
        score_text.innerHTML        = score_tag
    }
    showCorrection()
}

function showCorrection(){
    for(let j = 0; j < incorect_array.length; j++){
        let correction_tag          = `<div class="correction">
                                            <div class="incorrect-question"><span>${incorect_array[j].question}</span></div>
                                            <div class="incorrect-reponse"><span>${incorect_array[j].false}</span></div>
                                            <div class="correct-reponse"><span>${incorect_array[j].true}</span></div>
                                        </div`
        expilcation.innerHTML       += correction_tag
    }
}

        