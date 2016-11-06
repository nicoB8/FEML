/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* global ch */

var zoom2 = new ch.Zoom(ch('#firstImage')[0]);
// Preload image
zoom2.loadImage();

var carousel = new ch.Carousel(ch('.carouselNico')[0], {
    pagination: true,
    limitPerPage: 3,
    autoMargin: false,
    autoHeight: false,
    arrows: true
});

carousel.on('next', function () {

});

