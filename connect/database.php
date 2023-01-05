<?php

abstract class Connected
{
    private  $localhost = "localhost";
    private  $username = "root";
    private  $db_password = "";
    private  $db_name = "quizizy";

    protected function conn()
    {
        try {
            $connect = new PDO("mysql:host=$this->localhost;dbname=$this->db_name", $this->username, $this->db_password);
            return $connect;
        } catch (PDOException $e) {
            echo $e ;
        }
    }
}

?>