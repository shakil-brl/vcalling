$(document).ready(function () {
    var height = $("#unlock").outerHeight() - $("#top-color").outerHeight() - $("#bottom").outerHeight();
    $("#content").outerHeight(height);
    var window_width = $(window).width();
    function sideBar() {
        if (window_width <= 767) {
            $("#bottom .side-menu").click(function () {
                $("#content .sidebar").addClass("show");
                $("#content .sidebar").removeClass("d-none");
            });
            $("#content .sidebar-close-btn").click(function () {
                $("#content .sidebar").removeClass("show");
                $("#bottom .nav-tabs .nav-item  .nav-link").removeClass('active');
                navActiveCheck();
            });
        }
        else {
            $("#bottom .side-menu").click(function () {
                $("#content .sidebar").removeClass("d-none");
                $("#content .meeting-member").removeClass('w-100');
            });
            $("#content .sidebar-close-btn").click(function () {
                $("#content .sidebar").addClass("d-none");
                $("#content .meeting-member").addClass('w-100');
                $("#bottom .nav-tabs .nav-item  .nav-link").removeClass('active');
                navActiveCheck();

            });

        }
    }
    sideBar();
    $(window).on('resize', function () {
        window_width = $(window).width();
        var height = $("#unlock").outerHeight() - $("#top-color").outerHeight() - $("#bottom").outerHeight();
        $("#content").outerHeight(height);
        sideBar();
    });


    Scrollbar.init(document.querySelector('#group-chat'));
    Scrollbar.init(document.querySelector('#participant-schroll'));
    Scrollbar.init(document.querySelector('textarea.form-control'));


    $("#content .all-members .row .col").click(function () {
        $("#content .all-members .row .col").css('display', 'none');
        $(this).addClass('w-100');
        $(this).css({
            'display': 'block'
        });
        $("#content .all-members .single-close-btn").css('display', 'inline-block');
        var height = $("#content .all-members").outerHeight();
        $("#content .all-members .row .col .single-member").css({
            'height': height
        });
    });

    $("#content .all-members .single-close-btn").click(function () {
        $("#content .all-members .row .col").css('display', 'block');
        $("#content .all-members .row .col").removeClass('w-100');
        $("#content .all-members .row .col .single-member").css({
            'height': '180px'
        });
        $("#content .all-members .single-close-btn").css('display', 'none');
    });

    $("button.bottom-icon").click(function () {
        var url = $(this).children().attr('name');
        var src = $(this).children().attr('src');
        outline = 'img/' + url + '1.svg';
        fill = 'img/' + url + '2.svg';
        if (outline == src) {
            var src = $(this).children().attr('src', fill);
        }
        else {
            var src = $(this).children().attr('src', outline);
        }
    });
    function navActiveCheck() {
        $("#bottom .nav-tabs .nav-item").each(function (index, obj) {
            if ($(this).children().hasClass('active')) {
                var url = $(this).children().children().children().attr('src');
                if (url.search("1")) {
                    url = url.replace('1', '2');
                    $(this).children().children().children().attr('src', url);
                }
            }
            else {
                var url = $(this).children().children().children().attr('src');
                if (url.search("2")) {
                    url = url.replace('2', '1');
                    $(this).children().children().children().attr('src', url);
                }
            }
        });
    }
    $("#bottom .nav-tabs .nav-item .nav-link").click(function () {
        navActiveCheck();
    });

});
