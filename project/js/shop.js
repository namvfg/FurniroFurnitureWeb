$(function () {
    const productsData = [
       { id: 1, name: 'New Chair', description: 'Comfortable office chair', price: 'Rp 1.200.000', oldPrice: null, image: '../images/Potty.png', badge: { type: 'new', text: 'New' } },
        { id: 2, name: 'Modern Lamp', description: 'Bright desk lamp', price: 'Rp 3.000.000', oldPrice: 'Rp 4.000.000', image: '../images/Leviosa.png', badge: { type: 'sale', text: '-25%' } },
        { id: 3, name: 'Wooden Table', description: 'Solid oak dining table', price: 'Rp 8.500.000', oldPrice: null, image: '../images/Lolito.png', badge: null },
        { id: 4, name: 'Soft Carpet', description: 'Fluffy living room carpet', price: 'Rp 450.000', oldPrice: null, image: '../images/Respira.png', badge: { type: 'new', text: 'New' } },
        { id: 5, name: 'Bookshelf', description: 'Large capacity bookshelf', price: 'Rp 2.100.000', oldPrice: null, image: '../images/Grifo.png', badge: null },
        { id: 6, name: 'Kitchen Set', description: 'Complete knife set', price: 'Rp 900.000', oldPrice: 'Rp 1.500.000', image: '../images/Pingky.png', badge: { type: 'sale', text: '-40%' } },
        { id: 7, name: 'Sofa Bed', description: 'Convertible sofa bed', price: 'Rp 6.500.000', oldPrice: null, image: '../images/Potty.png', badge: null },
        { id: 8, name: 'Vase', description: 'Elegant flower vase', price: 'Rp 750.000', oldPrice: null, image: '../images/Muggo.png', badge: { type: 'new', text: 'New' } },
        { id: 9, name: 'New Chair', description: 'Comfortable office chair', price: 'Rp 1.200.000', oldPrice: null, image: '../images/Potty.png', badge: { type: 'new', text: 'New' } },
        { id: 10, name: 'Modern Lamp', description: 'Bright desk lamp', price: 'Rp 3.000.000', oldPrice: 'Rp 4.000.000', image: '../images/Leviosa.png', badge: { type: 'sale', text: '-25%' } },
        { id: 11, name: 'Wooden Table', description: 'Solid oak dining table', price: 'Rp 8.500.000', oldPrice: null, image: '../images/Lolito.png', badge: null },
        { id: 12, name: 'Soft Carpet', description: 'Fluffy living room carpet', price: 'Rp 450.000', oldPrice: null, image: '../images/Respira.png', badge: { type: 'new', text: 'New' } },
        { id: 13, name: 'Bookshelf', description: 'Large capacity bookshelf', price: 'Rp 2.100.000', oldPrice: null, image: '../images/Grifo.png', badge: null },
        { id: 14, name: 'Kitchen Set', description: 'Complete knife set', price: 'Rp 900.000', oldPrice: 'Rp 1.500.000', image: '../images/Pingky.png', badge: { type: 'sale', text: '-40%' } },
        { id: 15, name: 'Sofa Bed', description: 'Convertible sofa bed', price: 'Rp 6.500.000', oldPrice: null, image: '../images/Potty.png', badge: null },
        { id: 16, name: 'Vase', description: 'Elegant flower vase', price: 'Rp 750.000', oldPrice: null, image: '../images/Muggo.png', badge: { type: 'new', text: 'New' } },{ id: 9, name: 'New Chair', description: 'Comfortable office chair', price: 'Rp 1.200.000', oldPrice: null, image: '../images/Potty.png', badge: { type: 'new', text: 'New' } },
        { id: 17, name: 'Modern Lamp', description: 'Bright desk lamp', price: 'Rp 3.000.000', oldPrice: 'Rp 4.000.000', image: '../images/Leviosa.png', badge: { type: 'sale', text: '-25%' } },
        { id: 18, name: 'Wooden Table', description: 'Solid oak dining table', price: 'Rp 8.500.000', oldPrice: null, image: '../images/Lolito.png', badge: null },
        { id: 19, name: 'Soft Carpet', description: 'Fluffy living room carpet', price: 'Rp 450.000', oldPrice: null, image: '../images/Respira.png', badge: { type: 'new', text: 'New' } },
        { id: 20, name: 'Bookshelf', description: 'Large capacity bookshelf', price: 'Rp 2.100.000', oldPrice: null, image: '../images/Grifo.png', badge: null },
        { id: 21, name: 'Kitchen Set', description: 'Complete knife set', price: 'Rp 900.000', oldPrice: 'Rp 1.500.000', image: '../images/Pingky.png', badge: { type: 'sale', text: '-40%' } },
        { id: 22, name: 'Sofa Bed', description: 'Convertible sofa bed', price: 'Rp 6.500.000', oldPrice: null, image: '../images/Potty.png', badge: null },
        { id: 23, name: 'Vase', description: 'Elegant flower vase', price: 'Rp 750.000', oldPrice: null, image: '../images/Muggo.png', badge: { type: 'new', text: 'New' } }
    ];

    function createProductCardHTML(product) {
        const badgeHTML = product.badge
            ? `<div class="badge ${product.badge.type}">${product.badge.text}</div>`
            : '';

        const oldPriceHTML = product.oldPrice ? `<span class="old-price">${product.oldPrice}</span>` : '';

        const productComparison = "other-pages/product-comparison.html";

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

    $.each(productsData, function (index, product) {
        $('.product-grid').append(createProductCardHTML(product));
    });

    const itemsPerPage = 16;
    const $allProducts = $('.product-grid .product-card');
    const totalPages = Math.ceil($allProducts.length / itemsPerPage);
    let currentPage = 1;
    let isAnimating = false;

    $allProducts.each(function (index) {
        const pageNum = Math.ceil((index + 1) / itemsPerPage);
        $(this).attr('data-page', pageNum);
    });

    for (let i = 1; i <= totalPages; i++) {
        const $button = $('<button></button>').addClass('page-btn').attr('data-page', i).text(i);
        $('.pagination').append($button);
    }
    if (totalPages > 1) {
        $('.pagination').append('<button class="next-btn">Next</button>');
    }

    function showPage(pageNum) {
        if (isAnimating || pageNum === currentPage) return;
        isAnimating = true;

        const $grid = $('.product-grid');
        const $cardsToHide = $allProducts.filter(':visible');
        const $cardsToShow = $allProducts.filter('[data-page="' + pageNum + '"]');

        $grid.css('height', $grid.height());

        if ($cardsToHide.length > 0) {
            $cardsToHide.css({
                'transform': 'scale(0.95)',
                'opacity': '0'
            });
        }

        setTimeout(function () {
            $cardsToHide.css('display', 'none');

            $cardsToShow.css({
                'display': 'block',
                'transform': 'scale(0.95)',
                'opacity': '0'
            });

            $cardsToShow.width();

            $cardsToShow.css({
                'transform': 'scale(1)',
                'opacity': '1'
            });

            setTimeout(function () {
                $grid.css('height', 'auto');
                isAnimating = false;
            }, 400);

        }, 200);

        currentPage = pageNum;
        $('.page-btn').removeClass('active');
        $('.page-btn[data-page="' + pageNum + '"]').addClass('active');
    }

    $('.pagination').on('click', '.page-btn', function () {
        showPage(parseInt($(this).data('page')));
    });

    $('.pagination').on('click', '.next-btn', function () {
        let nextPage = currentPage + 1 > totalPages ? 1 : currentPage + 1;
        showPage(nextPage);
    });

    $allProducts.hide(); 
    $allProducts.filter('[data-page="1"]').show();
    $('.page-btn[data-page="1"]').addClass('active');
});