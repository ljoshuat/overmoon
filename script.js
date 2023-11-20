// swiper JS - Properties Slider //
var mySwiper = new Swiper(".properties-swiper", {
    slidesPerView: 3,
    //effect: "fade",
    //crossFade: false,
    //autoPlay: true,
    loop: true,
  
    pagination: {
      el: ".properties-slider",
      dynamicBullets: false,
      clickable: true
    },
  
    slidesPerGroup: 3,
    grabCursor: true,
    a11y: true,
    spaceBetween: 35,
    allowTouchMove: true,
    navigation: {
      nextEl: "#right-arrow-properties",
      prevEl: "#left-arrow-properties"
    },
  
    breakpoints: {
      0: {
        /* when window >=0px - webflow mobile landscape/portriat */
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1
      },
      480: {
        /* when window >=0px - webflow mobile landscape/portriat */
        spaceBetween: 20,
        slidesPerView: 2,
        slidesPerGroup: 2
      },
      767: {
        /* when window >= 767px - webflow tablet */
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 20
      },
      992: {
        /* when window >= 988px - webflow desktop */
        slidesPerView: 3,
        slidesPerGroup: 1,
        spaceBetween: 35
      }
    }
  });
  
  // swiper JS - Properties Slider //
  var mySwiper = new Swiper(".testimonial-column", {
    // slidesPerView: 2,
    //effect: "fade",
    //crossFade: false,
    //autoPlay: true,
    loop: false,
    centeredSlides: false,
    centeredSlidesBounds: false,
  
    pagination: {
      el: ".swiper-pagination-fraction",
      type: "fraction"
    },
  
    //slidesPerGroup: 2,
    grabCursor: true,
    // a11y: true,
    // spaceBetween: 35,
    allowTouchMove: true,
    navigation: {
      nextEl: "#right-arrow-properties",
      prevEl: "#left-arrow-properties"
    },
  
    breakpoints: {
      0: {
        /* when window >=0px - webflow mobile landscape/portriat */
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1
      },
      480: {
        /* when window >=0px - webflow mobile landscape/portriat */
        spaceBetween: 20,
        slidesPerView: 2,
        slidesPerGroup: 2
      },
      767: {
        /* when window >= 767px - webflow tablet */
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 20
      },
      992: {
        /* when window >= 988px - webflow desktop */
        slidesPerView: 2,
        slidesPerGroup: 1,
        spaceBetween: 18
      }
    }
  });
  