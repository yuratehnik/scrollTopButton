$(function() {
    function backToTop() {
            let ToTopButton = $("#back-top");
            let stopBeforeThisBlock = $('footer');
            ToTopButton.click(function (event) {
                event.preventDefault();
                $('body,html').animate({scrollTop: 0}, 1000);
            });

            $(window).bind('scroll', function () {
                var footertotop = (stopBeforeThisBlock.position().top);
                var scrolltop = $(document).scrollTop() + window.innerHeight;
                var difference = scrolltop-footertotop;
                if (scrolltop > footertotop) {
                    ToTopButton.css({'bottom' : difference});
                }else{
                    ToTopButton.css({'bottom' : 10});
                };
                if ($(window).scrollTop() > 500) {
                    ToTopButton.addClass('active');
                } else {
                    ToTopButton.removeClass('active');
                }
            });
        }
        $('body').length ? backToTop() : null; //check what you want here
})

