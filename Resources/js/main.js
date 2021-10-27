$(document).ready(function(){

    /*Waypoint jQuery plugin (for sticky menu)
    ===========================================*/
    $(".js--services-section").waypoint(function(direction){

        if(direction == "down"){

                $("nav").addClass("sticky");
        }

        else {

                $("nav").removeClass("sticky");
        }
    });



    /*Mixitup jQuery Plugin (Portfolio Section)
    ============================================*/
    var mixer = mixitup('.container');

    /*Smooth scroll for IE/Edge/Safari
     ============================================*/

     $("a").on('click', function(event){

        if(this.hash !==""){

            event.preventDefault();

            var hash = this.hash;
            $('html, body').animate({

                scrollTop: $(hash).offset().top
            
            }, 800, function(){
                window.location.hash = hash;
            });
        }

     });
});


/* 
===================
Mobile Menu
===================*/

function openNav(){

    document.getElementById("myNav").style.width="100%"
}

function closeNav(){

    document.getElementById("myNav").style.width="0%"
}