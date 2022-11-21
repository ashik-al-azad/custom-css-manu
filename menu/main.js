$(document).ready(function () {

    $(".menu-trigger").click(function () {
        $(".off-canvar-menu, .off-canvar-overlay").addClass("active");
        return false
    });

    $(".menu-close, .off-canvar-overlay").click(function () {
        $(".off-canvar-menu, .off-canvar-overlay").removeClass("active");
        return false
    });

})