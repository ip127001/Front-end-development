function menuOpen() {
	var x= document.getElementById("myNavbar");
	if(x.className === " navbar ") {
		x.className += " responsive ";
	} else {
		x.className = " navbar ";
	}
}
window.onscroll = function() {myFunction()};

function myFunction() {
     if(document.body.scrollTop > 1000) {
         document.getElementById("btn1").style.display = "block";
     } else {
     	 document.getElementById("btn1").style.display = "none"; 
     }
}
function topnav() {
     document.body.scrollTop = 0;
}