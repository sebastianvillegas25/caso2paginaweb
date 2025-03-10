<?php
// /app/controllers/HomeController.php

class HomeController {
    public function index() {
        // Aquí se carga la vista principal
        require_once '../app/views/home.php';
    }
}
?>
