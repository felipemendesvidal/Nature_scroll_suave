//debounce do lodash
debounce = function(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

// script tab - vide tab github
$('[data-group]').each(function(){
	var $allTarget = $(this).find('[data-target]'),
			$allClick = $(this).find('[data-click]'),
			activeClass = 'active';
	
	$allTarget.first().addClass(activeClass);
	$allClick.first().addClass(activeClass);
	
	$allClick.click(function(e){
		e.preventDefault();
		
		var id = $(this).data('click'),
				$target = $('[data-target="' + id + '"]');
		
		$allClick.removeClass(activeClass);
		$allTarget.removeClass(activeClass);
		
		$target.addClass(activeClass);
		$(this).addClass(activeClass);
	});
});

// scroll
//pegar a ação do usuario, clicando no menu em especifico os a que tem #
$('.menu-nav a[href^="#"]').click(function(e){
	//sempre que tiver o a com o #, previna o padrão
	e.preventDefault();
	//pegar o href do que a clicou e variavel que guarda a distancia dos blocos e o topo, vai ter um calculo que diz a distancia exata dos elementos e do topo
	//pega o tamanho do menu para modificar no offwset
	var id = $(this).attr('href'),
		menuheight = $('.menu').innerHeight(),
		targetOffset = $(id).offset().top
	;

	//anima o sroll top
	$('html, body').animate({
		scrollTop: targetOffset - menuheight
	}, 500);

});

//btn scroll up
$('.logo').click(function(e){
	e.preventDefault();
	$('html, body').animate({scrollTop: 0 }, 500);
});

// Ficar selecionado quando chegar na parte da seção especifica
//identificar as seções 
$('section').each(function(){
	//variaveis que pega altura total
	var alturaSessao = $(this).height();
	//distancia entre a sesao e o top
	var offsetTop = $(this).offset().top;
	//altura menu
	var menuHeight = $('.menu').innerHeight();
	//identificar id do a com o da seção
	var id = $(this).attr('id');
	//item menu que quer selecionar
	var $itemMenu = $('a[href="#'+ id +'"]');

	//verificando encima do scroll, toda vez que ele scrolar verifica
	$(window).scroll(debounce(function(){
		var  scrollTop = $(window).scrollTop();
		
		//verificação
		if(offsetTop - menuHeight < scrollTop && offsetTop + alturaSessao - menuHeight > scrollTop){
			$itemMenu.addClass('active');
		} else {
			//remover
			$itemMenu.removeClass('active');
		}
	}, 200));
});

// colocando clas active para fazer troca do x para barras
$('.menu-mobile-btn').click(function(){
	$(this).toggleClass('active');
	$('.mobile-menu').toggleClass('active')
	$
});

(function(){
	// slide
	function slider(sliderName,velocidade){
		var sliderClass = '.' + sliderName, 
			activeClass = 'active';
			rotate = setInterval(rodaSlide, velocidade);
		// adicionando class active a div do slide
		$( sliderClass + '> :first').addClass(activeClass);

		// para no hover
		$(sliderClass).hover(function(){
			clearInterval(rotate);
		}, function(){
			rotate = setInterval(rodaSlide, velocidade);
		});

		// função que faz rodar os slide
		function rodaSlide(){

			var activeSlide = $(sliderClass +' > .'+ activeClass), nextSlide = activeSlide.next();
			//verifica se o proximo elemento não existe
			if(nextSlide.length == 0){
				nextSlide = $(sliderClass +' > :first');
			}
			activeSlide.removeClass(activeClass);
			nextSlide.addClass(activeClass)

		}//fim função

		// roda o slide
	}
	slider('introducao',2000);

})();


(function(){
	//animação ao scrolar
	var $seleciona_target = $('[data-anime="scroll"]'),
	animacao_class = 'animate',
	offset = $(window).height()* 3/4;

	// animação do scroll
	function animeScroll(){
	// pega a distancia entre o scroll e o topo
	var documentTop = $(window).scrollTop();

	// seleciona ca um dos itens com target, ele vai aplicar essa função a cada elemento que ele achar com o valor da variavel
	$seleciona_target.each(function(){
		// DISTANCIA ENTRE O ELEMENTO E O TOPO
		var itemTop = $(this).offset().top

		// verifica se a distancia do top em relacao ao item top é maior ou menor
		if(documentTop > itemTop - offset){
			$(this).addClass(animacao_class);
		}else{
			$(this).removeClass(animacao_class);
		}


	});
	}//fim anime scrol
	animeScroll();
	$(document).scroll(debounce(function(){
	animeScroll();
	}, 200));
}) ();