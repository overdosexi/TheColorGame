var easygame=6;
var colors= generate(easygame);
var squares = document.querySelectorAll(".square");
var pickedcolor = colorpicker();
console.log(pickedcolor);
var colordisp = document.getElementById("colordisplay");
colordisp.textContent = pickedcolor;
var messagedisp=document.getElementById("message");
var h1=document.querySelector("h1");
var resetbutton=document.querySelector("#butt");
var easybtn=document.getElementById("easybtn");
var hardbtn=document.getElementById("hardbtn");

for (var i = 0; i < easygame ; i++) {

	squares[i].style.backgroundColor = colors[i];
	squares[i].addEventListener("click",function()
		{
			var clickedcolor = this.style.backgroundColor;
			 console.log(clickedcolor);
			if(clickedcolor === pickedcolor)
			{
				messagedisp.textContent="correct";
				changecolor(pickedcolor)
				resetbutton.textContent="Play Again?";
				h1.style.backgroundColor=pickedcolor;
				
			}
			else
			{
				this.style.backgroundColor="#232323";
				messagedisp.textContent="try again";
			}

		});
}
function changecolor(color)
{
	for (var i = easygame - 1; i >= 0; i--) {

	squares[i].style.backgroundColor = color;
}
}
function colorpicker()
{
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}
function generate(num)
{
	var arr=[];
	for(var i=0;i<num;i++)
	{
arr[i]=randomcolor();
	}
	return arr;
}
function randomcolor(){
	var red,green,blue;
	 red = Math.floor(Math.random()*256);
	 green=Math.floor(Math.random()*256);
	 blue=Math.floor(Math.random()*256);
	 return "rgb("+red+", "+green+", "+blue+")";
}
resetbutton.addEventListener("click",function(){
colors=generate(easygame);
 pickedcolor = colorpicker();
 h1.style.backgroundColor="steelblue";
 colordisplay.textContent=pickedcolor;
 for (var i = 0 ; i <squares.length; i++) {
 	squares[i].style.backgroundColor=colors[i];

 }
messagedisp.textContent="";
this.textContent="New Color";

});
easybtn.addEventListener("click",function(){
	easygame=3;
	easybtn.classList.add("selected");
	hardbtn.classList.remove("selected");
	colors=generate(easygame);
	pickedcolor=colorpicker();
	 colordisplay.textContent=pickedcolor;
	 for (var i = 0 ; i <squares.length; i++) {
 	squares[i].style.backgroundColor=colors[i];
 	if(i>2)
 	{
squares[i].style.display="none";
 	}
 }
});
hardbtn.addEventListener("click",function(){
easygame=6;
easybtn.classList.remove("selected");
	hardbtn.classList.add("selected");
	colors=generate(easygame);
	pickedcolor=colorpicker();
	 colordisplay.textContent=pickedcolor;
	 for (var i = 0 ; i <easygame; i++) {
 	squares[i].style.backgroundColor=colors[i];
 	squares[i].style.display="block";
 	}
})