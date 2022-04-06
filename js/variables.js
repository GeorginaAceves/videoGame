 
const canvas = document.getElementById("my-canvas");
const ctx = canvas.getContext("2d");

let frames = 0;
const movement = 1;
 
let bees = [];

let butterflies = [];

let points = 0;

let diff =  1; // dificultad

let requestId; 

//audio
const audio = new Audio();
audio.src = "audio/inspiring-cinematic.mp3";
audio.loop = true;

//heroe default ejemplo 
let characterDefault = {
    points:0,
}