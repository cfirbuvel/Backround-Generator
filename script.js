var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2  = document.querySelector(".color2");
var textColor = document.querySelector(".text-color");
var body = document.getElementById("gradient")
var h1 = document.getElementsByTagName("h1");

console.log(textColor.value)

function colorPicker(){
	body.style.background = "linear-gradient(to right, "
	+ color1.value 
	+ ", "
	+ color2.value
	+ ")"

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", colorPicker);

color2.addEventListener("input", colorPicker);

textColor.addEventListener("input", function(){
	h1[0].style.color = textColor.value;
});

