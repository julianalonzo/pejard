function changeChevronIcon() {
    $('#main-content .always-show').addClass('show').css("height", "auto");
    $('#main-content .always-show').siblings().find('.fa-chevron-right').addClass('show-icon');

    $('.collapse').on('show.bs.collapse', function() {
        $(this).siblings().find('.fa-chevron-right').addClass('show-icon');
    }).on('hidden.bs.collapse', function() {
        $(this).siblings().find('.fa-chevron-right').removeClass('show-icon');
    });
}

function adjustCollapseView() {
        var viewportWidth = $(window).width();
        if (viewportWidth >= 992) {
            $('.card-header').attr("data-toggle", "");
            $('#main-content .collapse').addClass('show').css("height", "auto");
            $('.collapse').siblings().find('.fa-chevron-right').removeClass('show-icon');
        } else {
            $('.card-header').attr("data-toggle", "collapse");
            $('#main-content .collapse').removeClass("show").css("height", 0);
        }

        changeChevronIcon();
}

$(function() {
    adjustCollapseView();
    var initialWidth = $(window).width();
    var orientation = window.orientation;

    $(window).on("resize", function() {
        if (initialWidth != $(window).width() && orientation == undefined) {
            adjustCollapseView();
        }
    });
});