var canvas;
var ctx;

var x = 300;
var y = 300;
var size = 40;

var mx = 0;
var my = 0;

var WIDTH = 600;
var HEIGHT = 600;

var gameover = false;

var circleX;
var circleY;

var circleCollision = false;
var score = 0

function drawCircle (){
	ctx = document.getElementById("myCanvas").getContext('2d');
	var Circle = new Image();
	Circle.src = "Imgres.png";
	ctx.drawImage(Circle, circleX, circleY, 40,40)
}


function drawVirus (x,y,s){
	ctx = document.getElementById("myCanvas").getContext('2d');
	var Virus = new Image();
	Virus.src = "Virus.png";
	ctx.drawImage(Virus,x,y,size,size)
}

function drawGhost (x,y,s){
	ctx = document.getElementById("myCanvas").getContext('2d');
	var ghost = new Image();
	ghost.src = "TECH!.png";
	ctx.drawImage(ghost,ghostX,ghostY,40,40)
}




function init(){
	canvas = document.getElementById("myCanvas");
	ctx = canvas.getContext("2d");
	circleX = Math.floor(Math.random()+(WIDTH-40));
	circleY = Math.floor(Math.random()+(WIDTH-40));
	window.onkeydown = keydownControl;

	return setInterval(draw,10);
}
function keydownControl(e){
	if(e.keyCode == 37){	
		mx = -4;
		my = 0;
	} else if (e.keyCode == 38){
		mx = 0;
		my = -4;
	} else if (e.keyCode == 39){
		mx = 4;
		my = 0;
	} else if (e.keyCode == 40) {
		mx = 0;
		my = 4;
	}
}
function clear(){
	ctx.clearRect (0,0,WIDTH, HEIGHT);
}

function draw(){
	clear();
	if(gameover != true){
		drawVirus(x,y,size);
		drawCircle(circleX,circleY)
		if(x+mx>WIDTH-size || x+mx <0){
			mx = -mx;
		} else if (y+my > HEIGHT - size || y+my <0){
			my = -my;
		}
		x += mx;
		y += my;

		collisionCheck();
		collisionHandle();
	}
}

function  collisionCheck(){
  if ((x>circleX-50) && (x<circleX+50) && (y>circleY-50) && (y<circleY+50)){
  	circleCollision = true;
  	}else{ 
  		circleCollision = false
  } 
} 
function collisionHandle(){
	if(circleCollision){

		circleX = Math.floor(Math.random() + (WIDTH-50));
		circleY = Math.floor(Math.random() + (HEIGHT-50));
		score += 1;
		console.log(score);
	}
} 

function followPacman(){
	
}

init();







