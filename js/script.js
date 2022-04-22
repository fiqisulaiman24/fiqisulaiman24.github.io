$(document).ready(function() {
    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
    });
});

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $(".fs-backtotop").fadeIn();
        } else {
            $(".fs-backtotop").fadeOut();
        }
    });
    $(".fs-backtotop").click(function (event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, 600);
    });
});

$(document).ready(function(){
    $(".fs-project-column").slice(0,4).show();
    $("#seeMore").click(function(e){
        e.preventDefault();
        $(".fs-project-column:hidden").slice(0,4).fadeIn("slow");
        
        if($(".fs-project-column:hidden").length == 0){
            $("#seeMore").fadeOut("slow");
        }
    });
})

AOS.init({
    once: true,
})