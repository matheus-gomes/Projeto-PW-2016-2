jQuery(document).on('click', '#open-login', function(e){
    var button = jQuery(this);
    button.attr('disabled', 'disabled');
    jQuery('.login-wrap').slideDown();
    jQuery('#login-name').focus();
});

jQuery(document).on('click', '#close-login', function(e){
    var button = jQuery(this);
    jQuery('#open-login').removeAttr('disabled');
    jQuery('.login-wrap').slideUp();
});

jQuery(document).on('click', '#confirm-login', function(e){
    var button = jQuery(this);
    window.open('worker.html');
});

jQuery(document).on('click', '#register, #advertisement-register', function(e){
    var button = jQuery(this);
    window.location = 'cadastro.html';
});

jQuery(document).on('click', '#search-button', function(e){
    var button = jQuery(this);
    window.location = 'busca.html';
});