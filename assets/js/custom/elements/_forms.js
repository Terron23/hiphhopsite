//
// Forms Validation
//

/* 

$(document).ready(function(){

  // Add valid class
  function addValidClass($input) {
    $input.parent().find('> i').remove();
    $input.parent().removeClass('invalid').addClass('valid').append('<i class="fa fa-check-circle"></i>');
  }

  function addInvalidClass($input) {
    $input.parent().find('> i').remove();
    $input.parent().removeClass('valid').addClass('invalid').append('<i class="fa fa-times-circle"></i>');
  }

  var ck_zip = /^[0-9]{5}$/;
  var ck_name = /^[A-Za-z ]{2,128}$/;
  var ck_email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  var ck_phone = /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)?\d{4}$/;
  var ck_address = /^([0-9]{1,6})([\w\s]{3,128})$/;
  var ck_address_apt = /^.{1,128}$/;

  $('.input-wrap input').on('blur change keyup', function(){
    // El & Value
    var $el = $(this),
    type = $el.attr('type');
    val = $el.val();

    if(type == 'email'){
      if(!ck_email.test(val)){
        addInvalidClass($el);
      } else {
        addValidClass($el);
      }
    }

    if ($('.input-wrap').length > $('.input-wrap.valid').length || $('.input-wrap.invalid').length > 0) {
      $('.submit-button').addClass('disabled');
    } else {
      $('.submit-button').removeClass('disabled');
    }

  });

});

*/
