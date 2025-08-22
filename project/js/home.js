$(document).ready(function () {

    const $slides = $('.slide');
    const $nextBtn = $('.next-arrow');
    const $prevBtn = $('.prev-arrow');
    const $paginationContainer = $('.slider-pagination');
    let currentIndex = 0;

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

    const newProducts = [
        { id: 9, name: 'New Chair', description: 'Comfortable office chair', price: 'Rp 1.200.000', oldPrice: null, image: './images/Potty.png', badge: { type: 'new', text: 'New' } },
        { id: 10, name: 'Modern Lamp', description: 'Bright desk lamp', price: 'Rp 3.000.000', oldPrice: 'Rp 4.000.000', image: './images/Leviosa.png', badge: { type: 'sale', text: '-25%' } },
        { id: 11, name: 'Wooden Table', description: 'Solid oak dining table', price: 'Rp 8.500.000', oldPrice: null, image: './images/Lolito.png', badge: null },
        { id: 12, name: 'Soft Carpet', description: 'Fluffy living room carpet', price: 'Rp 450.000', oldPrice: null, image: './images/Respira.png', badge: { type: 'new', text: 'New' } },
        { id: 13, name: 'Bookshelf', description: 'Large capacity bookshelf', price: 'Rp 2.100.000', oldPrice: null, image: './images/Grifo.png', badge: null },
        { id: 14, name: 'Kitchen Set', description: 'Complete knife set', price: 'Rp 900.000', oldPrice: 'Rp 1.500.000', image: './images/Pingky.png', badge: { type: 'sale', text: '-40%' } },
        { id: 15, name: 'Sofa Bed', description: 'Convertible sofa bed', price: 'Rp 6.500.000', oldPrice: null, image: './images/Potty.png', badge: null },
        { id: 16, name: 'Vase', description: 'Elegant flower vase', price: 'Rp 750.000', oldPrice: null, image: './images/Muggo.png', badge: { type: 'new', text: 'New' } }
    ];

    let isExpanded = false;

    function createProductCard(product) {
        const badgeHTML = product.badge
            ? `<div class="badge ${product.badge.type}">${product.badge.text}</div>`
            : '';

        const oldPriceHTML = product.oldPrice ? `<span class="old-price">${product.oldPrice}</span>` : '';

        const productComparison = "./FurniroFurnitureWeb/other-pages/product-comparison.html";

        return `
            <div class="product-card added-product"> 
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                    ${badgeHTML}
                    <div class="product-overlay">
                        <button>Add to cart</button>
                        <div class="overlay-actions"><span>⇆ Share</span><span><a href="${productComparison}">⇄ Compare</a></span><span>♡ Like</span></div>
                    </div>
                </div>
                <div class="product-info">
                    <div class="product-title">${product.name}</div>
                    <div class="product-description">${product.description}</div>
                    <div class="product-price">${product.price} ${oldPriceHTML}</div>
                </div>
            </div>
        `;
    }

    $('#show-more-btn').on('click', function () {
        if (!isExpanded) {
            newProducts.forEach(product => {
                const productHTML = createProductCard(product);
                $('#product-grid').append(productHTML);
            });
            $(this).text('Show Less');
            isExpanded = true;
        } else {
            $('.added-product').remove();
            $(this).text('Show More');
            isExpanded = false;
        }
    });
});