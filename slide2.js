var images = [
"http://www.w3school.com.cn/i/ballade_dream.jpg",
"http://www.w3school.com.cn/i/china_pavilion.jpg",
"http://img04.tooopen.com/images/20130712/tooopen_17270713.jpg"];
var infos =["上海鲜花港的郁金香，花名：Ballade Dream。",
"2010年上海世博会，中国馆。",
"蓝天 白云， 风景如画。。。"];
var i=0;
var div1 = document.getElementById("first");
var div2 = document.getElementById("second");
function swapStage() {
// Select the two images and swap their classes, triggering the animation of the behindmost image
		console.log("fired");
		var img1 = document.getElementById("first").firstChild;
		var img2 = document.getElementById("second").firstChild;
		var info1 = document.getElementById("first").childNodes[1];
		var info2 = document.getElementById("second").childNodes[1];
		div1.style.webkitTransform= "scale(0.96) translateX(3.6%)";
		img2.setAttribute("src",images[(i+1)%images.length]);	
		img1.setAttribute("src",images[i%images.length]);
		info2.innerText = infos[(i+1)%images.length];	
		info1.innerText = infos[i%images.length];
		
		//img1.removeAttribute("style");
			++i;
	}
function swapStage2() {
// Select the two images and swap their classes, triggering the animation of the behindmost image
		console.log("fired tttttttt");
		//var div1 = document.getElementById("first");
		div1.style.webkitTransform = "none";
	}

window.onload = function(){
	i=1;
	div1 = document.getElementById("first");
	div2 = document.getElementById("second");
		div1.style.webkitTransform = "none";
		div2.setAttribute("class","stage-1");
		div1.addEventListener("webkitTransitionEnd", swapStage2,false);
		div2.addEventListener("webkitAnimationIteration", swapStage,false);
		
		
		


};
