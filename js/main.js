document.getElementById("left").addEventListener("mouseenter", hoverLeft);
document.getElementById("left").addEventListener("mouseleave", leaveLeft);

document.getElementById("right").addEventListener("mouseenter", hoverRight);
document.getElementById("right").addEventListener("mouseleave", leaveRight);


function hoverRight(){
	document.getElementById("right").classList.add("bigRight");
	document.getElementById("left").classList.add("smallLeft");
}

function leaveRight(){
	document.getElementById("right").classList.remove("bigRight");
	document.getElementById("left").classList.remove("smallLeft");
}

function hoverLeft(){
	document.getElementById("left").classList.add("bigLeft");
	document.getElementById("right").classList.add("smallRight");
}

function leaveLeft(){
	document.getElementById("left").classList.remove("bigLeft");
	document.getElementById("right").classList.remove("smallRight");
}