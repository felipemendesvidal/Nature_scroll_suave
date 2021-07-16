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
	$(window).scroll(function(){
		var  scrollTop = $(window).scrollTop();
		
		//verificação
		if(offsetTop - menuHeight < scrollTop && offsetTop + alturaSessao - menuHeight > scrollTop){
			$itemMenu.addClass('active');
		} else {
			//remover
			$itemMenu.removeClass('active');
		}
	});



});