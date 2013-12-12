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

    var backside = $('.card-backside')
    var bigCard;
    
    $('ol .card').click(function() {
        $('ol').hide().addClass('hidden');
        
        bigCard = $(this).clone();
        backside.attr('class', 'card card-backside big-card hidden');

        setTimeout(function() {
            backside.attr('class', 'card card-backside big-card');
        }, 50);

    });

    backside.click(function() {

        backside.attr('class', 'card card-backside big-card hidden');
        
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
            backside.attr('class', 'card card-backside big-card hidden disabled');
            bigCard.attr('class', 'card big-card');
        }, 50);

    });

});

