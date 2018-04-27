$('.collapse').each(function() {
    $(this).removeClass('show');
});

$('.collapse').on('show.bs.collapse', function() {
    $(this).siblings().find('.fa-chevron-right').addClass('show-icon');
    $(this).addClass('always-show');
}).on('hidden.bs.collapse', function() {
    $(this).siblings().find('.fa-chevron-right').removeClass('show-icon');
    $(this).removeClass('always-show');
});

function adjustCollapseView() {
    var viewportWidth = $(window).width();
    if (viewportWidth >= 992) {
        $('.card-header').attr("data-toggle", "");
        $('#main-content .collapse').addClass('show').css("height", "auto");
    } else {
        $('.card-header').attr("data-toggle", "collapse");
        $('#main-content .collapse').removeClass("show").css("height", 0);
        // $('.collapse').siblings().find('.fa-chevron-right').removeClass('show-icon');
    }

    $('#main-content .always-show').addClass('show').css("height", "auto");
    // $('#main-content .always-show').siblings().find('.fa-chevron-right').addClass('show-icon');
}

adjustCollapseView();
var initialWidth = $(window).width();

$(window).on("resize", function() {
    if (initialWidth != $(window).width() && typeof window.orientation == "undefined") {
        adjustCollapseView();
    }

    if ($(window).width() >= 768) {
        $('button.navbar-toggler').css('display', 'none');
    } else {
        $('button.navbar-toggler').css('display', 'block');
    }
});

$(window).trigger('resize');
