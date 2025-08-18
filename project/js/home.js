$(document).ready(function () {
    const $slides = $('.slide');
    const $nextBtn = $('.next-arrow');
    const $prevBtn = $('.prev-arrow');
    const $paginationContainer = $('.slider-pagination');
    let currentIndex = 0;

    // Tạo dấu chấm phân trang
    $slides.each(function (index) {
        const $dot = $('<span class="dot"></span>');
        if (index === 0) $dot.addClass('active');
        $dot.on('click', function () {
            goToSlide(index);
        });
        $paginationContainer.append($dot);
    });

    const $dots = $('.dot');

    function updateSlideClasses() {
        $slides.each(function (index) {
            $(this).removeClass('active prev next');
            if (index === currentIndex) {
                $(this).addClass('active');
            } else if (index === (currentIndex - 1 + $slides.length) % $slides.length) {
                $(this).addClass('prev');
            } else if (index === (currentIndex + 1) % $slides.length) {
                $(this).addClass('next');
            }
        });

        $dots.each(function (index) {
            $(this).toggleClass('active', index === currentIndex);
        });
    }

    function goToSlide(index) {
        currentIndex = index;
        updateSlideClasses();
    }

    function showNextSlide() {
        currentIndex = (currentIndex + 1) % $slides.length;
        updateSlideClasses();
    }

    function showPrevSlide() {
        currentIndex = (currentIndex - 1 + $slides.length) % $slides.length;
        updateSlideClasses();
    }

    $nextBtn.on('click', showNextSlide);
    $prevBtn.on('click', showPrevSlide);

    updateSlideClasses();
});
