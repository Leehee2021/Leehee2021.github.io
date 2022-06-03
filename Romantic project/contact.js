
$('#contact-form').validate({
    rules: {
      name: {
        required: true,
        minlength: 4
      },
      email: {
        required: true,
        email: true
      },
      subject: {
        required: false
      },
      message: {
        required: true
      }
    },
    messages: {
      user_name: {
        required: 'Come on, you have a name don\'t you?',
        minlength: 'Your name must consist of at least 2 characters'
      },
      email: {
        required: 'Please put your email address'
      },
      message: {
        required: 'Put some messages here?',
        minlength: 'Your name must consist of at least 2 characters'
      }
    },
    submitHandler: function (form) {
      $(form).ajaxSubmit({
        type: 'POST',
        data: $(form).serialize(),
        url: 'sendmail.php',
        success: function () {
          $('#contact-form #success').fadeIn();
        },
        error: function () {
          $('#contact-form #error').fadeIn();
        }
      });
    }
  }

);
