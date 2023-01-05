<?php
include_once "question.php";

header('Content-Type: application/json');

    $question = new Questions();  
    echo $question->get_questions();

?>