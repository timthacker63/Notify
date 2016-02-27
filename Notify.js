/**
 * Created by TimMacBookPro on 2/26/16.
 */
(function($) {
    $.Notify = function (callerSettings) {

        var settings = $.extend({
            title: '',
            message: '',
            notifyType: 'warning',
            position: 'top-left',
            closeIcon: 'close_icon.png',
            fadeOut: 0,
            fadeIn: 1000

        }, callerSettings||{});

        var mainDiv = $('<div id="notifyDiv" class="notify">');

        mainDiv.addClass(settings.position);
        mainDiv.addClass(settings.notifyType);

        var headerDiv = $('<div class="notifyHeader">').css({
            position: 'relative'
        }).appendTo(mainDiv);

        headerDiv.addClass(settings.notifyType);


        var bodyDiv = $('<div class="notifyBody">').css({
            position: 'relative'
        }).text(settings.message).appendTo(mainDiv);
        bodyDiv.addClass(settings.notifyType);


        var closeButton = $('<span>' + settings.title + '<img src=' + settings.closeIcon + ' class="CloseMe"/></span>').appendTo(headerDiv);

        closeButton.click(function () {
            mainDiv.fadeOut("slow", function () {
                mainDiv.remove()
            });
        });

        mainDiv.hover(
            function(){
                mainDiv.stop(true, true).fadeOut();
                mainDiv.show();
        },
            function(){
                //mainDiv.fadeIn();
                mainDiv.stop(true, true).fadeOut();
            }
        );

        mainDiv.hide().appendTo($('body')).fadeIn(settings.fadeIn);

        // Check if Fade Out
        if(settings.fadeAfter > 0)
        {
            mainDiv.fadeOut(settings.fadeAfter);
        }
    }
})(jQuery);