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