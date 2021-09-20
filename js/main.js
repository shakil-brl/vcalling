(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();






$(".toggle-password").click(function() {

  $(this).toggleClass("fa-eye fa-eye-slash");
  var input = $($(this).attr("toggle"));
  if (input.attr("type") == "password") {
    input.attr("type", "text");
  } else {
    input.attr("type", "password");
  }
});



$(function() {

  function passwordCheck(password) {
    if (password.length >= 8)
      strength += 1;

    if (password.match(/(?=.*[0-9])/))
      strength += 1;

    if (password.match(/(?=.*[!,%,&,@,#,$,^,*,?,_,~,<,>,])/))
      strength += 1;

    if (password.match(/(?=.*[a-z])/))
      strength += 1;

    if (password.match(/(?=.*[A-Z])/))
      strength += 1;

    displayBar(strength);
  }

  function displayBar(strength) {
    switch (strength) {
      case 1:
        $("#password-strength span").css({
          "width": "20%",
          "background": "#de1616"
        });
        break;

      case 2:
        $("#password-strength span").css({
          "width": "40%",
          "background": "#de1616"
        });
        break;

      case 3:
        $("#password-strength span").css({
          "width": "60%",
          "background": "#de1616"
        });
        break;

      case 4:
        $("#password-strength span").css({
          "width": "80%",
          "background": "#FFA200"
        });
        break;

      case 5:
        $("#password-strength span").css({
          "width": "100%",
          "background": "#06bf06"
        });
        break;

      default:
        $("#password-strength span").css({
          "width": "0",
          "background": "#de1616"
        });
    }
  }

  $("[data-strength]").after("<div id=\"password-strength\" class=\"strength\"><span></span></div>")

  $("[data-strength]").focus(function() {
    $("#password-strength").css({
      "height": "7px"
    });
  }).blur(function() {
    $("#password-strength").css({
      "height": "0px"
    });
  });

  $("[data-strength]").keyup(function() {
    strength = 0;
    var password = $(this).val();
    passwordCheck(password);
  });

});






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


$(".reveal").on('click',function() {
    var $pwd = $(".pwd");
    if ($pwd.attr('type') === 'password') {
        $pwd.attr('type', 'text');
    } else {
        $pwd.attr('type', 'password');
    }
});


function sidemanushow() {
      $("#sidebar").toggleClass("d-none","d-block"); 
}



 function show(id) { 
        if(document.getElementById(id).style.display=='none') { 
            document.getElementById(id).style.display='block'; 
        } 
        return false;
    } 
    function hide(id) { 
        if(document.getElementById(id).style.display=='block') { 
            document.getElementById(id).style.display='none'; 
        } 
        return false;
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
  $('.side-flip').hide();
    // $("#searchUserlist").hide();
    // $("#massageactive").on('click', function () {
    //     $("#searchUserlist").hide();
    //     $("#groupchat").show();
    // });


    // $("#useractiv").on('click', function () {
    //     $("#groupchat").hide();
    //     $("#searchUserlist").show();
    // });

    $(".side-flip-ctl").click(function()
    {

      if ( $('#device-width').hasClass('col-lg-12') ){
        $("#device-width").removeClass('col-lg-12').addClass('col-sm-9');
      }
      

             $('.side-flip').hide();
             $('#'+$(this).attr('name')).fadeIn();   
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