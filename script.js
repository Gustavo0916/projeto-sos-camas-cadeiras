const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  /*************************************************** */

  let contador = 1;

setInterval( function(){
    document.getElementById('slide' + contador).checked = true;
    contador ++;

    if( contador > 3) {
        contador = 1;
    }

}, 3000);