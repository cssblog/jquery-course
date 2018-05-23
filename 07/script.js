$('button').on('click',function(){

	$('#box').animate({
		width: '200px',
		height: '200px',
		'margin-right': '+=20px',
		'margin-top': '+=20px',
	},1000,function(){
		// callback 
	});

});