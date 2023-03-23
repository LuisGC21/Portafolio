let navigation = document.querySelector('.navigation');
let close = document.querySelector('.close');
let años = document.getElementById('años');
let texto = document.getElementById('texto');
navigation.onclick = function(){
    navigation.classList.add('active');
}
close.onclick = function(){
    limpiar()
    navigation.classList.remove('active');
}
años.addEventListener("click", ()=>{
    texto.innerHTML = "21 Años"
})
function limpiar(){
    texto.innerHTML = '';
}
        
document.addEventListener("DOMContentLoaded", function () {
	let slider = this.getElementById("brightness");
	slider.addEventListener("input", adjustSlider);
	adjustSlider(slider);
});
function adjustSlider(e) {
	let p = document.getElementsByTagName("p");
	let span = document.getElementsByClassName("skill");
	let cajaDer = document.getElementsByClassName("item der");
	let cajaIzq = document.getElementsByClassName("item izq");
	let body = document.body,
		switchLightMin = 40,
		switchLightMax = 100,
		tar = e.target || e,
		pct = +tar.value / +tar.max,
		L1 = pct * (switchLightMax - switchLightMin) + switchLightMin,
		L2 = L1 - 10,
		L3 = L1 - 37,
		L = [L1, L2, L3],
		thumbHueMin = 0,
		thumbHueMax = 120,
		thumbHue = pct * (thumbHueMax - thumbHueMin) + thumbHueMin,
		thumbSat = 90.4,
		thumbLight = 44.9,
		thumbHSL = `${thumbHue},${thumbSat}%,${thumbLight}%`;

	// update the slider shade
	L.forEach((light, i) => {
		if (light < 0) light = 0;   
		body.style.setProperty(`--l${i + 1}`, `hsl(350, 80%,${light}%)`);
		document.getElementById('inicio').style = `
			background-image: linear-gradient(
				var(--rotate),
				hsl(193, 100%, ${light}%),
				hsl(225, 75%, ${light}%) 43%,
				hsl(264, 100%, ${light}%)
			);
		`;
		light < 40?document.getElementById('h1').style.setProperty("color","white"):document.getElementById('h1').style.setProperty("color","black");
		for(i = 0; i < cajaDer.length; i++) cajaDer.item(i).style.setProperty("background-color", `hsl(207, 11%, ${light}%)`);
		for(i = 0; i < cajaIzq.length; i++) cajaIzq.item(i).style.setProperty("background-color", `hsl(207, 11%, ${light}%)`);
		for(i = 0; i < p.length; i++) light > 40?p.item(i).style.setProperty("color", "black"):p.item(i).style.setProperty("color", "white");
		for(i = 0; i < span.length; i++) light > 40?span.item(i).style.setProperty("color", "black") :span.item(i).style.setProperty("color", "white");
	});
	// update the thumb icon hue
	body.style.setProperty(`--p`, `hsl(${thumbHSL})`);
	body.style.setProperty(`--pT`, `hsla(${thumbHSL},0)`);
}
// CARD
var 
$card = $('.card'),
// $cardTitle = $('.card-title'),
// $cardSubtitle = $('.card-subtitle'),
$cardShine = $('.card-shine'),
// $cardShadow = $('.card-shadow'),
currentMousePos = { x: 0, y: 0 },
mouseFromCenter = { x: 0, y: 0 };

$(document).mousemove(function(event) {
	var
	wHeight= $(window).height(),
	wWidth= $(window).width();

	currentMousePos.x = event.pageX;
	currentMousePos.y = event.pageY;
	mouseFromCenter.x = currentMousePos.x - (wWidth / 2);
	mouseFromCenter.y = currentMousePos.y - (wHeight / 2);
	
	var 
	around1 = -1 * (currentMousePos.y * 100 / wHeight * 0.2 - 10) + 'deg',
	around2 = 1 * (currentMousePos.x * 100 / wWidth * 0.2 - 10) + 'deg',
	trans1 = (currentMousePos.x * 100 / wHeight * 0.3 ) + 'px',
	trans2 = (currentMousePos.y * 100 / wHeight * 0.3 ) + 'px',
	dy = event.pageY - wHeight / 2, //@h/2 = center of poster
	dx = event.pageX - wWidth / 2, //@w/2 = center of poster
	theta = Math.atan2(dy, dx), // angle between cursor and center of poster in RAD
	angle = theta * 180 / Math.PI - 90,  
	mousePositionX = ( currentMousePos.x / wWidth) * 100,
	mousePositionY = 50+( currentMousePos.y / wHeight)*10;

	// gradient angle and opacity for card shine effect
	$cardShine.css('background', 'linear-gradient(' + angle + 'deg, rgba(255,255,255,' + (currentMousePos.y / wHeight) * .7 + ') 0%,rgba(255,255,255, 0) 80%)');
	// card pos and angle
	$card.css({
	"-webkit-transform": "translate3d(" + trans1 + ", " + trans2 +", 0) scale(1) rotatex(" + around1 + ") rotatey(" + around2 + ")",'background-position': mousePositionX + '%' + ' ' + (currentMousePos.y / wHeight) * 50  + '%'
	});
	// card shadow pos and angle
	$cardShadow.css({"transform": "scale(.9,.9) translateX(" + ((mouseFromCenter.x * -0.02) + 12) + "px) translateY(" + ((mouseFromCenter.y * -0.02) + 12 ) + "px) scale(1.0) rotateY(" + (mouseFromCenter.x / 25) * 0.5 + "deg) rotateX(" + ((mouseFromCenter.y / -25) ) + "deg)" });

	$cardTitle.css({"transform": "translateX(" + ((mouseFromCenter.x / 25) * 0.7) + "px) translateY(" + ((mouseFromCenter.y / 25) * 1.65) + "px)"
	});

	$cardSubtitle.css({"transform": "translateX(" + ((mouseFromCenter.x / 25) * 0.5) + "px) translateY(" + ((mouseFromCenter.y / 25) * 1.15) + "px) translateZ(60px)"
	});
});

var text = $('.text').text(),
    textArr = text.split('');

$('.text').html('');

$.each(textArr, function(i, v){
  if(v == ' '){$('.text').append('<span class="space"></span>');}
  $('.text').append('<span>'+v+'</span>');
})

