<?php
//prendo il file json 
$discs = file_get_contents("dischi.json");
// li trasformo in formato php
$discs = json_decode($discs, true);
//eventuale manipolazione in php

//lo riporto in formato stringa
$json_string = json_encode($discs);
header("Content-Type: application/json");
//lo stampo in pagina
echo($json_string) ;