let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("html");
        habilidades[1].classList.add("js");
        habilidades[2].classList.add("css");
        habilidades[3].classList.add("java");
        habilidades[4].classList.add("sql");
        habilidades[5].classList.add("c");
        habilidades[6].classList.add("php");
        // habilidades[7].classList.add("creatividad");
        // habilidades[8].classList.add("dedicacion");
        // habilidades[9].classList.add("proyect");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 



$(document).on('mousemove', function(e){
    $('.light').css({
       left:  e.pageX - 300,
       top:   e.pageY - 300
    });
});

var el = $('.js-tilt-container');

el.on('mousemove', function(e){
	const {left, top} = $(this).offset();
	const cursPosX = e.pageX - left;
	const cursPosY = e.pageY - top;
	const cursFromCenterX = $(this).width() / 2 - cursPosX;
	const cursFromCenterY = $(this).height() / 2 - cursPosY;
	

	$(this).css('transform','perspective(500px) rotateX('+ (cursFromCenterY / 40) +'deg) rotateY('+ -(cursFromCenterX / 40) +'deg) translateZ(10px)');
  
  const invertedX = Math.sign(cursFromCenterX) > 0 ? -Math.abs( cursFromCenterX ) : Math.abs( cursFromCenterX );
  
  //Parallax transform on image
  $(this).find('.js-perspective-neg').css('transform','translateY('+ ( cursFromCenterY / 10) +'px) translateX('+ -(invertedX  / 10) +'px) scale(1.15)');

	$(this).removeClass('leave');
});

el.on('mouseleave', function(){
	$(this).addClass('leave');
});