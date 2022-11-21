// data - background
$("[data-background]").each(function () {
    $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
})

$("[data-bg-color]").each(function () {
    $(this).css("background", $(this).attr("data-bg-color"))
})