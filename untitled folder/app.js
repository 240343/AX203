var canvas;
var ctx;

var x = 300;
var y = 200;

var mx= 2
var my = 4

var width = 600
var height =  400;

function init(){
	canvas = document.getElementById("myCanvas");
	ctx= canvas.getContext('2d');
	return setInterval(draw,10);
}

function circle(x,y,r){
	ctx.beginPath();
	ctx.arc(x,y,r,0,6.28);
	ctx.closePath();
	ctx.stroke();
	ctx.fillStyle = "red";
	ctx.fill();
}

function draw(){
	circle(x,y,30);

	x += mx;
	y += my;

}

init();