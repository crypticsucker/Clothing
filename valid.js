

     $(document).ready(function() {
            $('.contact-form').submit(function(event) {
                event.preventDefault();

                var name = $('#name').val();
                var email = $('#email').val();
                var number = $('#number').val();
                var message = $('#message').val();

               
                $('.error-message').text('');

               
                var isValid = true;

                if (!name.trim()) {
                    $('#name-error').text('Please enter your name');
                    isValid = false;
                }

                if (!email.trim()) {
                    $('#email-error').text('Please enter your email');
                    isValid = false;
                } else if (!isValidEmail(email)) {
                    $('#email-error').text('Please enter a valid email');
                    isValid = false;
                }

                if (!number.trim()) {
                    $('#number-error').text('Please enter your contact number');
                    isValid = false;
                }

                if (!message.trim()) {
                    $('#message-error').text('Please enter your message');
                    isValid = false;
                }

                
                if (isValid) {
                    var mailtoLink = 'mailto:your-email@example.com' +
                        '?subject=' + encodeURIComponent('Contact Form Submission') +
                        '&body=' + encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\nContact Number: ' + number + '\nMessage: ' + message);
                    window.location.href = mailtoLink;
                }
            });

            
            function isValidEmail(email) {
                var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return emailRegex.test(email);
            }
        });

