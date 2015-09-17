var images = ["green","red","yellow"];
var i=0;
function swapStage2() {
// Select the two images and swap their classes, triggering the animation of the behindmost image
		//console.log("fired");
		var img1 = document.getElementById("first");
		var img2 = document.getElementById("second");

			img2.setAttribute("style","background-color:"+images[(i+1)%images.length]+";");	
			img1.setAttribute("style","background-color:"+images[i%images.length]+";");
			img1.setAttribute("class","stage-2");
			++i;
			//img1.setAttribute("class","stage-2");
	}
function swapStage3(){
	//console.log("XXXXXX");
	var img1 = document.getElementById("first");
	img1.style.webkitTransform = "none";
}
window.onload = function(){
	i = 1;
	var img1 = document.getElementById("first");
	var img2 = document.getElementById("second");
	console.log("init");
		img1.style.webkitTransform = "none";
		//img1.setAttribute("class","stage-2");
		img2.setAttribute("class","stage-1");
		img2.addEventListener("webkitAnimationIteration", swapStage2,false);
		img1.addEventListener("webkitTransitionEnd",swapStage3,false);
	
		
		


};
