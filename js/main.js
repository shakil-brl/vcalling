function gridview() {
    $('#sliderview').hide().fadeOut('1000');
    $('#drawingboardview').hide().fadeOut('1000');
    $('#galleryview').show().fadeIn('1000');
}

function spkaerview() {
    $('#sliderview').hide().fadeOut('1000');
    $('#drawingboardview').show().fadeIn('1000');
    $('#galleryview').hide().fadeOut('1000');
}


var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 3000);
}



$(document).ready(function () {
    $("#fullscreen").click(function () {
        $("#clearfullview").toggleClass("clearfullview");
         $(this).find('i').toggleClass('fa-square-o fa-clone');
    });

});

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
}

$(document).ready(function () {
    $("#searchUserlist").hide();
    $("#massageactive").on('click', function () {
        $("#searchUserlist").hide();
        $("#groupchat").show();
    });


    $("#useractiv").on('click', function () {
        $("#groupchat").hide();
        $("#searchUserlist").show();
    });


    $('#owl-one .participant').click(function () {
        $('#sliderview').show().fadeIn('1000');
        $('#drawingboardview').hide().fadeOut('1000');
        $('#galleryview').hide().fadeOut('1000');
    });

    $('#inputGroupSelect01').on('change', function () {
        var optionsText = this.options[this.selectedIndex].text;
        $('#messageTypehere').html(optionsText);
    });

    $('.singal-profile').html($('.thumToSpeaker:first').html());
    $('.singal-profile-sidebar').html($('.thumToSpeaker:first').html());

    $('.sliderview div').on('click', function () {
        if (!$(this).data('clicked')) {
            //do your stuff here if the button is not clicked
            //$(this).data('clicked', true);
            $('.singal-profile').html($(this).html());
        } else {
            //do your stuff here if the button is clicked
            // $(this).data('clicked', false);
            $('.singal-profile').html($('.description:first').html());
        }
    });

    $('.thumToSpeaker2').on('click', function () {
        if (!$(this).data('clicked')) {
            //do your stuff here if the button is not clicked
            //$(this).data('clicked', true);
            $('.singal-profile-sidebar').html($(this).html());
        } else {
            //do your stuff here if the button is clicked
            // $(this).data('clicked', false);
            $('.singal-profile-sidebar').html($('.thumToSpeaker:first').html());
        }
    });


    //$('#sliderview').hide();
    //$('#drawingboardview').hide();

    $('[data-toggle="tooltip"]').tooltip();
    $(".description").click(function () {
        $(".description").removeClass("active");
        // $(".tab").addClass("active"); // instead of this do the below 
        $(this).addClass("active");
    });


});