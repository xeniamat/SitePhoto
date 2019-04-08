document.getElementById("slider-left").onclick = sliderLeft;
var left = 0;
function sliderLeft() {
	var mov = document.getElementById("slider-img");
	left = left - 640;
		if (left < -1920) {
			left = 0;
		}
	mov.style.left = left +"px";
}

