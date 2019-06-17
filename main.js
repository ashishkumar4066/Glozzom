$(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});

$('.slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
});