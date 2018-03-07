function adjustCollapseView() {
    var viewportWidth = $(window).width();
    if (viewportWidth >= 992) {
        $('.card-header').attr("data-toggle", "");
        $('#main-content .collapse').addClass('show').css("height", "auto");
    } else {
        $('.card-header').attr("data-toggle", "collapse");
        $('#main-content .collapse').removeClass("show").css("height", 0);
    }
}

$(function() {
    adjustCollapseView();
});