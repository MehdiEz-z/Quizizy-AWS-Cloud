<?php
include_once "database.php";

class Questions extends Connected{
    function get_questions(){
        $query = "SELECT * FROM questions";
        $stmt = $this->conn()->prepare($query);
        $stmt->execute();
        $result = $stmt->fetchALL(PDO::FETCH_ASSOC);

        return json_encode($result, JSON_PRETTY_PRINT);
    }
}
?>