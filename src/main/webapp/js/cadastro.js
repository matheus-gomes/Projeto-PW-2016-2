jQuery(document).ready(function(){
    jQuery('#name').focus();
});

jQuery(document).on('click', '#add-phone', function(e){
    var button = jQuery(this);
    var lastPhoneNumber = parseInt( jQuery('.phone').last().attr('id').replace('phone-', '') );
    var nextNumber = lastPhoneNumber + 1;
    console.debug(lastPhoneNumber);
    jQuery('.phones-wrap').append('' +
        '<div class="field-wrap float-left min-width-50">' +
        '   <label for="phone-'+ nextNumber +'">Telefone '+ nextNumber +'</label>' +
        '   <input type="text" id="phone-'+ nextNumber +'" placeholder="Telefone">' +
        '   <input type="checkbox" id="phone-'+ nextNumber +'-whatsapp" class="phone"><label for="phone-'+ nextNumber +'-whatsapp"><i class="ico-whatsapp"></i></label>' +
        '</div>' +
        '');
    if(nextNumber == 4) button.remove();
});
