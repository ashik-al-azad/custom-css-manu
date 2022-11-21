$(document).ready(function () {

    $(".menu-trigger").click(function () {
        $(".off-canvar-menu, .off-canvar-overlay").addClass("active");
        return false
    });

    $(".menu-close, .off-canvar-overlay").click(function () {
        $(".off-canvar-menu, .off-canvar-overlay").removeClass("active");
    });

    // $('.off-canvar-menu li').click(function(){
    //     $(this).addClass('active').siblings().removeClass('active')
    // })

    $('.off-canvar-menu li').click(function(){
        $('.off-canvar-menu li').addClass('active')
    })

    $('.off-canvar-menu li').click(function(){
        $(this).siblings().removeClass('active')
    })

})