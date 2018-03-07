<<<<<<< HEAD
function changeChevronIcon() {
    $('#main-content .always-show').addClass('show').css("height", "auto");
    $('#main-content .always-show').prev().find('.fa-chevron-down').removeClass('fa-chevron-down').addClass('fa-chevron-up');

    $('.collapse').on('shown.bs.collapse', function() {
        $(this).prev().find('.fa-chevron-down').removeClass('fa-chevron-down').addClass('fa-chevron-up');
    }).on('hidden.bs.collapse', function() {
        $(this).prev().find('.fa-chevron-up').removeClass('fa-chevron-up').addClass('fa-chevron-down');
    });
}

function adjustCollapseView() {
        var viewportWidth = $(window).width();
        if (viewportWidth >= 992) {
            $('.card-header').attr("data-toggle", "");
            $('#main-content .collapse').addClass('show').css("height", "auto");
            $('.collapse').prev().find('.fa-chevron-up').removeClass('fa-chevron-up').addClass('fa-chevron-down');
        } else {
            $('.card-header').attr("data-toggle", "collapse");
            $('#main-content .collapse').removeClass("show").css("height", 0);
        }

        changeChevronIcon();
=======
function adjustCollapseView() {
    var viewportWidth = $(window).width();
    if (viewportWidth >= 992) {
        $('.card-header').attr("data-toggle", "");
        $('#main-content .collapse').addClass('show').css("height", "auto");
    } else {
        $('.card-header').attr("data-toggle", "collapse");
        $('#main-content .collapse').removeClass("show").css("height", 0);
    }
>>>>>>> 7be46f6c6cbf7f93c49e40de10299429f070a410
}

$(function() {
    adjustCollapseView();
<<<<<<< HEAD
    $(window).on("resize", function() {
        if ($(window).width() >= 992) {
            adjustCollapseView();
        }
    });
=======
>>>>>>> 7be46f6c6cbf7f93c49e40de10299429f070a410
});