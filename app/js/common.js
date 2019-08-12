$(function() {
// Custom JS
/*
	$(".hamburger").click(function(){		
		$(this).each(function(){
			$(this).hasClass("is-active") ? $(this).removeClass("is-active") : $(this).addClass("is-active");		
		});
	});
*/
	$("#my-menu").mmenu(
		{
			extensions: [
				'widescreen',
				'theme-black',
				'effect-menu-slide',
				'pagedim-black'
			],
			navbar: {
				title: '<img src="img/logo-1.svg" alt="Салон красоты">'
			},
			offCanvas: {
				position: 'right'
			}
		}
	);
	
	var api = $('#my-menu').data('mmenu');
	api.bind('opened',function(){
		$(".hamburger").addClass("is-active");
	}).bind('closed',function(){
		$(".hamburger").removeClass("is-active");
	});
});
