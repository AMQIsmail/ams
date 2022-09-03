jQuery(document).ready(function () {
    var offset = 200;
    var duration = 500;
    jQuery(window).scroll(function () {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.click-to-top').fadeIn(duration);
        } else {
            jQuery('.click-to-top').fadeOut(duration);
        }
    });

    jQuery('.click-to-top').click(function(event) {
        event.preventDefault();
        jQuery('html, body').animate({ scrollTop: 0 }, duration);
        return false;
    });
});
