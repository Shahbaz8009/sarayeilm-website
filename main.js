$(document).ready(function() {
    // Toggle navbar on click
    $('.fa-bars').click(function() {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

 // On scroll or load, update the header class
 $(window).on('scroll load', function() {
    $('.fa-bars').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');
    
    if ($(window).scrollTop() > 30) {
        $('header').addClass('header-active'); // Add active class
    } else {
        $('header').removeClass('header-active'); // Remove active class
    }

    $('section').each(function(){
        var id=$(this).attr('id');
        var height=$(this).height();
        var offset =$(this).offset().top - 200;
        var top = $(window).scrollTop();
        if(top >= offset && top < offset+height){
            $('navbar ul li a').removeClass('active');
            $('.navbar').find('[href="#' + id +'"]').addClass('active');
        }
    });
});
});

$(document).ready(function() {
    // Handle form submission
    $('#contactForm').on('submit', function(e) {
        e.preventDefault(); // Prevent the default form submission
        
        // Serialize form data
        var formData = $(this).serialize();
        
        // AJAX request to submit the form
        $.ajax({
            url: $(this).attr('action'), // The action URL
            method: $(this).attr('method'), // The method (POST)
            data: formData, // The serialized form data
            success: function(response) {
                // Handle a successful response
                alert('Message sent successfully!');
                $('#contactForm')[0].reset(); // Reset the form
            },
            error: function(error) {
                // Handle an error response
                alert('Error sending message. Please try again later.');
            }
        });
    });
});
