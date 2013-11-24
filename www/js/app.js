/*jslint white:true*/

// This uses require.js to structure javascript:
// http://requirejs.org/docs/api.html#define

define(['zepto'], function(require) {
    'use strict';
    var width = $('body').width(),
        height = $('body').height() - 50;
        
    if (width > height * 0.75) {
        $('.wrapper')
            .width(height * 0.75)
            .height(height);
    } else {
        $('.wrapper')
            .width(width)
            .height(width / 0.75)
            .css('margin-top', ((height - (width / 0.75)) / 2) + 'px')
    }
    
    $('ol').removeClass('hidden');
    
    $('.card').click(function() {
        $('ol').hide().addClass('hidden');
        
        var bigCard = $(this).clone();
        
        bigCard
            // addClass/removeClass doesn't work on SVG elements
            .attr('class', 'card big-card hidden')
            .attr('role', 'alert')
            .click(function() {
                $(this).remove();
                $('ol').show().removeClass('hidden');
            })
            .appendTo('.wrapper');
            
        setTimeout(function() {
            bigCard.attr('class', 'card big-card');
        }, 50);
    });

});

