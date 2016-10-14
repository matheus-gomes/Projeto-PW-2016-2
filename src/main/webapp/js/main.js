jQuery(document).on('keypress', '[data-press-enter]', function(e){
    var element = jQuery(this);
    if(e.keyCode == 13){
        var targetSelector = element.attr('data-press-enter');
        var targetElement = jQuery(targetSelector);
        if(targetElement.length > 0){
            if( targetElement.is('button') || targetElement.is('a') ){
                targetElement[0].click();
            } else{
                targetElement.focus();
            }
        }
    }
});

jQuery(document).ready(function(){
    jQuery('[data-page]').hide();
    jQuery('[data-view]').each(function(index){
        var view = jQuery(this);
        var viewIndex = view.attr('data-view-index');
        if(viewIndex && jQuery('[data-page=' + viewIndex + ']').length){
            jQuery('[data-page=' + viewIndex + ']').fadeIn();
        } else if(view.find('[data-page]').length){
            jQuery( view.find('[data-page]')[0] ).fadeIn();
        }
    });

    jQuery('[data-page][data-load-file]').each(function(index){
        var pageWrap = jQuery(this);
        var fileUrl = pageWrap.attr('data-load-file');
        pageWrap.load(fileUrl);
    });
});

jQuery(document).on('click', '[data-navigate-page]', function(e){
    var button = jQuery(this);

    var view = button.attr('data-navigate-view');
    if(!view && button.parents('[data-view]').length){
        view = jQuery( button.parents('[data-view]')[0] );
    } else if( jQuery(view).length ){
        view = jQuery(view);
    } else{
        console.error('View ' + view + ' not found');
        return
    }

    var page = button.attr('data-navigate-page');
    page = view.find('[data-page=' + page + ']');
    if( !page.is(':visible') ){
        view.find('[data-page]').fadeOut(500, function(){
            setTimeout(function(){
                page.fadeIn();
                jQuery( page.find('input, textarea, select')[0] ).focus();
            }, 500);
        });
    }

});

jQuery(document).on('input', 'select', function(e){
    var select = jQuery(this);
    select.find('option[data-show]').each(function(index){
        var option = jQuery(this);
        var target = option.attr('data-show');
        if( option.is(':selected') ){
            jQuery(target).show();
        }
    });

    select.find('option[data-hide]').each(function(index){
        var option = jQuery(this);
        var target = option.attr('data-hide');
        if( option.is(':selected') ){
            jQuery(target).hide();
        }
    });

    select.find('option[data-enable]').each(function(index){
        var option = jQuery(this);
        var target = option.attr('data-enable');
        if( option.is(':selected') ){
            jQuery(target).removeAttr('disabled');
        }
    });

    select.find('option[data-disable]').each(function(index){
        var option = jQuery(this);
        var target = option.attr('data-disable');
        if( option.is(':selected') ){
            jQuery(target).attr('disabled', 'disabled');
        }
    });
});


jQuery(document).on('click', '#logo', function(){window.location.href = '/Projeto-PW/index.html'})