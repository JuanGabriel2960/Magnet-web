$(document).ready(function () {
    console.log("Ready!!");

    // Animation Content #1
    $('#cont-1').hover(function () {
            $(this).addClass('pd-up');
            $('#cont-1 img').attr("src", "img/content1H.png");
        }, function () {
            $(this).removeClass('pd-up');
            $('#cont-1 img').attr("src", "img/content1.svg");
        }
    );
    // Animation Content #2
    $('#cont-2').hover(function () {
            $(this).addClass('pd-up');
            $('#cont-2 img').attr("src", "img/content2H.png");
        }, function () {
            $(this).removeClass('pd-up');
            $('#cont-2 img').attr("src", "img/content2.svg");
        }
    );
    // Animation Content #3
        $('#cont-3').hover(function () {
            $(this).addClass('pd-up');
            $('#cont-3 img').attr("src", "img/content3H.png");
        }, function () {
            $(this).removeClass('pd-up');
            $('#cont-3 img').attr("src", "img/content3.svg");
        }
    );
    // Animation Bottom
    $('.more-info').hover(function () {
            $('.show-line').fadeIn(1400);
        }, function () {
            $('.show-line').fadeOut(1100);
        }
    );
    // Animation Link
    $('.a-hv').hover(function () {
            $(this).addClass('down-blue');
        }, function () {
            $(this).removeClass('down-blue');
        }
    );
    // Animation Desktop
    if($(window).width() >= 1024)
    {
        // Remove the animation for mobile
        $('#cont-2').removeClass('-slide-right')
        $('#cont-3').removeClass('-slide-right')
        $('.content-about').removeClass('-slide-bottom')
        $('.reference-img').removeClass('-slide-bottom')
        
        // Add the animation for desktop
        $('#cont-3').addClass('-slide-left')
        $('.content-about').addClass('-slide-left')
        $('.reference-img').addClass('-slide-left')
    } else {
        console.log('Mobile version')
    }
    
    $('#black-mode').click(function () {
        $('.logo, #black-mode').toggleClass('invert');
        $('header').removeClass('gradient');
        $('header').toggleClass('bg-black');
        $('h1,h2,h3,h4,h5,h6,p,a').not('.still-white').toggleClass('white');
        $('.content-about').toggleClass('bg-black');
        $('.info').toggleClass('bg-black');
        $('.info').toggleClass('top-blue');
        $('.footer').toggleClass('bg-black');
        $('.footer').toggleClass('top-blue');
        
    });
    
    
}); 

