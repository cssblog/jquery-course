function addItem(){
	var text = $('input[name="text"]').val();
	// $('<li>',{text: text}).appendTo('.items');
    var html = $('.template').html();
    html = $(html).find('.item-text').text(text).parent().get(0).outerHTML;
    $('.items').prepend(html);
    $('input[name="text"]').val('');
}

$('#add').on('click', addItem);

$('input[name="text"]').on('keydown',function(event){
	if(event.keyCode === 13){
		addItem();
	}
});

$('.items').on('click','li .delete',function(e){
	e.preventDefault(); // a
	$(this).parent().remove();
});