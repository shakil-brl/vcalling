$(document).ready(function () {
    //Sidebar Show Hide
    function sidebarHideShow(width) {
        if (width <= 991) {
            $("#meeting-body .sidebar").addClass('right-300');
        }
    }
    sidebarHideShow($(window).width());
    $(window).resize(function () {
        sidebarHideShow($(window).width());
    });
    $('.sidebar-show').click(function () {
        $("#meeting-body .sidebar").removeClass('right-300 d-none');
    });
    $('#meeting-body .sidebar-close-btn').click(function () {
        $("#meeting-body .sidebar").addClass('right-300 d-none');
    });


    //End Sidebar Show Hide

    Scrollbar.init(document.querySelector('#all-members'));
    Scrollbar.init(document.querySelector('#chat'));
    let ii = 1;
    $("#meeting-body .meeting-members .grid-view .member").click(function () {
        $("#meeting-body .meeting-members .grid-view .member").addClass('d-none');
        $(this).removeClass('d-none');
        $(this).addClass('fb-100 h72vh');
        $('#meeting-body .meeting-members .grid-view .close').removeClass('d-none');
        $(this).removeClass('d-none');
        $(this).children().children('video').css('max-height', '70vh');
    });

    $('#meeting-body .meeting-members .grid-view .close').click(function () {
        $('#meeting-body .meeting-members .grid-view .close').addClass('d-none');
        $("#meeting-body .meeting-members .grid-view .member").removeClass('d-none');
        $("#meeting-body .meeting-members .grid-view .member").removeClass('fb-100 h72vh');
    });
});


