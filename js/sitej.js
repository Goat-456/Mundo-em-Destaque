
var banners = [
    "img/estatua-da-liberdade.jpg",
    "img/machu-picchu.jpg",
    "img/torre-eiffel.jpg",
    "img/muralhas-da-china.jpg",
    "img/coliseu.jpg",
    "img/cristo-redentor.jpg",
    "img/yellowstone.jpg",
    "img/taj-mahal.jpg",
    "img/museu-do-louvre.jpg",
    "img/piramides-de-gize.jpg"
];
var bannerAtual = 0;


function trocaBanner() {
    bannerAtual = (bannerAtual + 1) % banners.length; 
    document.querySelector('.container img').src = banners[bannerAtual];
}


setInterval(trocaBanner, 5000);


$(document).ready(function () {
   
    $('.novidades').addClass('painel-compacto');
    $('.mais-vendidos').addClass('painel-compacto');

    
    $('.novidades button').click(function () {
        $('.novidades').removeClass('painel-compacto');
    });

    $('.mais-vendidos button').click(function () {
        $('.mais-vendidos').removeClass('painel-compacto');
    });
});
