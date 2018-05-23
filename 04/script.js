$('a').on('click', function(event) {
    event.preventDefault();

    // $('#rules').slideToggle(1000);
    var display = $('#rules').css('display');
    if (display === 'none') {
        // hidden 
        $('#rules').slideDown(300);
    } else {
        $('#rules').hide();
    }
});