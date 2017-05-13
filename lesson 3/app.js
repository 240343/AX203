console.log("test");

var c = document.getElementById("myCanvas");
var ctx = c.getContext('2d');

ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = "2px";

//starting coordinate
ctx.moveTo(75,0);

//other points
ctx.lineTo(150,100);
ctx.lineTo(75,200);
ctx.lineTo(0,100);
ctx.closePath();
ctx.stroke();

//fill in
ctx.fillStyle = "bergundy"
ctx.fill();



console.log("test");

var c2 = document.getElementById("myCanvas2");
var ctx2 = c2.getContext('2d');

ctx2.beginPath();
ctx2.strokeStyle = "blue";
ctx2.lineWidth = "2px";

//starting coordinate
ctx2.moveTo(0,0);

//other points
ctx2.lineTo(300,300);
ctx2.lineTo(300,0);
ctx2.lineTo(0,300);
ctx2.closePath();
ctx2.stroke();

//fill in
ctx2.fillStyle = "blue";
ctx2.fill();

var c3 = document.getElementById("myCanvas3");
var ctx3 = c3.getContext('2d');

ctx3.beginPath();
ctx3.arc(100, 100, 50, 0, 6.28);
ctx3.closePath();
ctx3.stroke();
ctx3.fill();

var c4 = document.getElementById("myCanvas4")
var ctx4 = c4.getContext('2d');

ctx4.beginPath();
ctx4.strokeStyle = "blue";
ctx4.lineWidth = "2px";

//starting coordinate
ctx4.moveTo(300,0);

//other points
ctx4.lineTo(0,0);
ctx4.lineTo(0,150);
ctx4.lineTo(300,150);
ctx4.closePath();
ctx4.stroke();

//fill in
ctx4.fillStyle = "cyan"
ctx4.fill();

ctx4.beginPath();
ctx4.arc(150, 150, 10, 0, 6.28);
ctx4.closePath();
//ctx4.stroke();
ctx4.fill();

ctx4.fillStyle = "white"
ctx4.fill();

ctx4.beginPath();
ctx4.arc(160, 150, 10, 0, 6.28);
ctx4.closePath();
//ctx4.stroke();
ctx4.fill();

ctx4.fillStyle = "white"
ctx4.fill();

ctx4.beginPath();
ctx4.arc(146, 155, 10, 0, 6.28);
ctx4.closePath();
//ctx4.stroke();
ctx4.fill();

ctx4.fillStyle = "white"
ctx4.fill();

ctx4.beginPath();
ctx4.arc(146, 147, 2, 0, 6.28);
ctx4.closePath();
//ctx4.stroke();
ctx4.fill();

ctx4.fillStyle = "black"
ctx4.fill();

var Soviet = new Image();
Soviet.src = "img.png";

Soviet.onload =  function(){
	 ctx5.drawImage(Soviet,150,300,70,100)
}

var c5 = document.getElementById("myCanvas5");
var ctx5 = c5.getContext('2d');





