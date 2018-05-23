$('ul li:first-child').addClass('active');
$('.tab-contents > div:first-child').show();

$('ul a').on('click',function(e){
	e.preventDefault();

	// $('ul li.active').removeClass('active');
	// $(this).parent().addClass('active');
	$(this).parent().addClass('active').siblings().removeClass('active');
	var tabId = $(this).attr('href');
	$(tabId).fadeIn(600).siblings().css('display','');
});