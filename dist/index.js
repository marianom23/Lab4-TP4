"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import express from "express"; 
const express = require("express");
const app = express();
const rutas_1 = __importDefault(require("./rutas"));
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(rutas_1.default);
app.listen(port, () => {
    console.log("Servidor en puerto", port);
});
