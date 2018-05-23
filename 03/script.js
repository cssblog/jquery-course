$('input[name="username"]').on('change', function() {
    var username = $(this).val();
    username = username.toLowerCase();
    $(this).val(username);
});

$('input[name="password"]').on('keydown', function(event) {
    if (event.keyCode === 13) {
		$('.submit').trigger('click');
    }
});

$('button').on('click', function() {

	console.log('SUBMIT');

    var username = $('input[name="username"]').val();
    var password = $('input[name="password"]').val();

    $('.has-error').removeClass('has-error');

    if (username === '') {
        $('input[name="username"]').addClass('has-error');
    }
    if (password === '') {
        $('input[name="password"]').addClass('has-error');
    }
});