//import express from "express"; 
const express = require("express");
const app = express(); 

import rutas from "./rutas"

const port = 3000;
app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.use(rutas)

app.listen(port, () => { 
    console.log("Servidor en puerto", port); 
}) 