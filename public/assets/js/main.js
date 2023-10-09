$(".scale_slick").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,

});


const elem = $('body >header');
const scrolled = () => {
    const threshold = $(document).scrollTop() > 50;
    elem.toggleClass('scrolled', threshold);
};
$(window).on({ scroll: scrolled });
// mobile navbar js 
const elem2 = $('.mobilenavbar-mian');
const scrolled2 = () => {
    const threshold2 = $(document).scrollTop() > 50;
    elem2.toggleClass('scrolled', threshold2);
};
$(window).on({ scroll: scrolled2 });

$(window).on('load', function () {

    $('#loader').remove()

    //   $('.text-animate').addClass('typewriter')
})


function myFunctionmenu() {
    $(this).toggleClass('open');
    $(".custom-nav-sec").toggleClass("slide-nav");
}
$(window).scroll(function () {
    if ($('.toggle-bars').hasClass('open')) {

        $('.toggle-bars').click();
    }
});

function play1() {
    document.getElementById('vidwrap1').innerHTML = <iframe width="100%" height="100%" src="https://www.youtube.com/embed/x8UAUAuKNcU" frameborder="0"></iframe>;
}

// counter function box 1 hero section
let counts = setInterval(updated);
let upto = 0;
function updated() {
    var count = document.getElementById("counter");
    count.innerHTML = ++upto;
    if (upto === 3500) {

        clearInterval(counts);
    }
}

let counts2 = setInterval(updated2);
let upto2 = 0;
function updated2() {

    var count = document.getElementById("counter2");

    count.innerHTML = ++upto2;

    if (upto2 === 25) {

        clearInterval(counts2);
    }
}


let counts3 = setInterval(updated3);

let upto3 = 0;

function updated3() {

    var count = document.getElementById("counter3");

    count.innerHTML = ++upto3;

    if (upto3 === 450) {

        clearInterval(counts3);
    }
}

let counts4 = setInterval(updated4);
let upto4 = 0;
function updated4() {
    var count = document.getElementById("counter4");

    count.innerHTML =  ++upto4;

    if (upto4 === 140) {
        clearInterval(counts4);
    }
}

function myFunction(imgs) {

    // Get the expanded image

    var expandImg = document.getElementById("expandedImg");

    // Get the image text

    var imgText = document.getElementById("imgtext");

    // Use the same src in the expanded image as the image being clicked on from the grid

    expandImg.src = imgs.src;

    // Use the value of the alt attribute of the clickable image as text inside the expanded image

    imgText.innerHTML = imgs.alt;

    // Show the container element (hidden with CSS)

    expandImg.parentElement.style.display = "block";
}


var swiper = new Swiper('.swiper', {
    spaceBetween: 0,
    centeredSlides: true,
    loop: true,
    speed: 500,

    autoplay: {
        delay: 8500,
        disableOnInteraction: false,

    },
    pagination: {

        el: '.swiper-pagination',
        clickable: true,

    },

    navigation: {

        nextEl: '.swiper-button-next',

        prevEl: '.swiper-button-prev',

    },
});
