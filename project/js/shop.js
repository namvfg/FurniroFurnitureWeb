$(function () {
    const productsData = [
        { name: 'Syltherine', description: 'Stylish cafe chair', price: 2500000, oldPrice: 3500000, image: '../images/syltherine.png', badgeType: 'sale', badgeText: '-30%' },
        { name: 'Leviosa', description: 'Stylish cafe chair', price: 2500000, oldPrice: null, image: '../images/leviosa.png', badgeType: null, badgeText: null },
        { name: 'Lolito', description: 'Luxury big sofa', price: 7000000, oldPrice: 14000000, image: '../images/lolito.png', badgeType: 'sale', badgeText: '-50%' },
        { name: 'Respira', description: 'Outdoor bar table', price: 500000, oldPrice: null, image: '../images/respira.png', badgeType: 'new', badgeText: 'New' },
        { name: 'Grifo', description: 'Night lamp', price: 1500000, oldPrice: null, image: '../images/grifo.png', badgeType: null, badgeText: null },
        { name: 'Muggo', description: 'Small mug', price: 150000, oldPrice: null, image: '../images/muggo.png', badgeType: 'new', badgeText: 'New' },
        { name: 'Pingky', description: 'Cute bed set', price: 7000000, oldPrice: 14000000, image: '../images/pingky.png', badgeType: 'sale', badgeText: '-50%' },
        { name: 'Potty', description: 'Minimalist flower pot', price: 500000, oldPrice: null, image: '../images/potty.png', badgeType: 'new', badgeText: 'New' },
        { name: 'Respira', description: 'Description', price: 500000, oldPrice: null, image: '../images/respira.png', badgeType: null, badgeText: null },
        { name: 'Syltherine', description: 'Stylish cafe chair', price: 2500000, oldPrice: 3500000, image: '../images/syltherine.png', badgeType: 'sale', badgeText: '-30%' },
        { name: 'Leviosa', description: 'Stylish cafe chair', price: 2500000, oldPrice: null, image: '../images/leviosa.png', badgeType: null, badgeText: null },
        { name: 'Lolito', description: 'Luxury big sofa', price: 7000000, oldPrice: 14000000, image: '../images/lolito.png', badgeType: 'sale', badgeText: '-50%' },
        { name: 'Respira', description: 'Outdoor bar table', price: 500000, oldPrice: null, image: '../images/respira.png', badgeType: 'new', badgeText: 'New' },
        { name: 'Pingky', description: 'Cute bed set', price: 7000000, oldPrice: 14000000, image: '../images/pingky.png', badgeType: 'sale', badgeText: '-50%' },
        { name: 'Potty', description: 'Minimalist flower pot', price: 500000, oldPrice: null, image: '../images/potty.png', badgeType: 'new', badgeText: 'New' },
        { name: 'Grifo', description: 'Night lamp', price: 1500000, oldPrice: null, image: '../images/grifo.png', badgeType: null, badgeText: null },
        { name: 'Grifo', description: 'Night lamp', price: 2000000, oldPrice: null, image: '../images/grifo.png', badgeType: 'new', badgeText: 'New' },
        { name: 'Grifo', description: 'Night lamp', price: 2000000, oldPrice: null, image: '../images/grifo.png', badgeType: 'new', badgeText: 'New' },
        { name: 'Grifo', description: 'Night lamp', price: 2000000, oldPrice: null, image: '../images/grifo.png', badgeType: 'new', badgeText: 'New' },
        { name: 'Grifo', description: 'Night lamp', price: 2000000, oldPrice: null, image: '../images/grifo.png', badgeType: 'new', badgeText: 'New' },
        { name: 'Grifo', description: 'Night lamp', price: 2000000, oldPrice: null, image: '../images/grifo.png', badgeType: 'new', badgeText: 'New' },
        { name: 'Grifo', description: 'Night lamp', price: 2000000, oldPrice: null, image: '../images/grifo.png', badgeType: 'new', badgeText: 'New' },
        { name: 'Grifo', description: 'Night lamp', price: 2000000, oldPrice: null, image: '../images/grifo.png', badgeType: 'new', badgeText: 'New' },
        { name: 'Grifo', description: 'Night lamp', price: 2000000, oldPrice: null, image: '../images/grifo.png', badgeType: 'new', badgeText: 'New' },
        { name: 'Grifo', description: 'Night lamp', price: 2000000, oldPrice: null, image: '../images/grifo.png', badgeType: 'new', badgeText: 'New' },
        { name: 'Grifo', description: 'Night lamp', price: 2000000, oldPrice: null, image: '../images/grifo.png', badgeType: 'new', badgeText: 'New' },
        { name: 'Grifo', description: 'Night lamp', price: 2000000, oldPrice: null, image: '../images/grifo.png', badgeType: 'new', badgeText: 'New' },
        { name: 'Pingky', description: 'Cute bed set', price: 7000000, oldPrice: 14000000, image: '../images/pingky.png', badgeType: 'sale', badgeText: '-50%' },
        { name: 'Lolito', description: 'Luxury big sofa', price: 7000000, oldPrice: 14000000, image: '../images/lolito.png', badgeType: 'sale', badgeText: '-50%' },
        { name: 'Leviosa', description: 'Stylish cafe chair', price: 2500000, oldPrice: null, image: '../images/leviosa.png', badgeType: null, badgeText: null },
    ];


    // HÀM TẠO COMPONENT SẢN PHẨM
    function createProductCardHTML(product) {
        const formattedPrice = `Rp ${product.price.toLocaleString('id-ID')}`;
        const oldPriceHTML = product.oldPrice ? `<span class="old-price">Rp ${product.oldPrice.toLocaleString('id-ID')}</span>` : '';
        const badgeHTML = product.badgeType ? `<div class="badge ${product.badgeType}">${product.badgeText}</div>` : '';
        return `
            <div class="product-card">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                    ${badgeHTML}
                    <div class="product-overlay">
                        <button>Add to cart</button>
                        <div class="overlay-actions"><span>⇆ Share</span><span>⇄ Compare</span><span>♡ Like</span></div>
                    </div>
                </div>
                <div class="product-info">
                    <div class="product-title">${product.name}</div>
                    <div class="product-description">${product.description}</div>
                    <div class="product-price">${formattedPrice} ${oldPriceHTML}</div>
                </div>
            </div>
        `;
    }


    // Render các sản phẩm từ data
    $.each(productsData, function (index, product) {
        $('.product-grid').append(createProductCardHTML(product));
    });

    // Thiết lập các biến phân trang
    const itemsPerPage = 16;
    const $allProducts = $('.product-grid .product-card');
    const totalPages = Math.ceil($allProducts.length / itemsPerPage);
    let currentPage = 1;
    let isAnimating = false;

    // Gán số trang cho từng sản phẩm
    $allProducts.each(function (index) {
        const pageNum = Math.ceil((index + 1) / itemsPerPage);
        $(this).attr('data-page', pageNum);
    });

    // Tạo các nút phân trang
    for (let i = 1; i <= totalPages; i++) {
        const $button = $('<button></button>').addClass('page-btn').attr('data-page', i).text(i);
        $('.pagination').append($button);
    }
    if (totalPages > 1) {
        $('.pagination').append('<button class="next-btn">Next</button>');
    }

    // Hàm hiển thị trang với hiệu ứng mượt mà
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

    // Xử lý sự kiện click
    $('.pagination').on('click', '.page-btn', function () {
        showPage(parseInt($(this).data('page')));
    });

    $('.pagination').on('click', '.next-btn', function () {
        let nextPage = currentPage + 1 > totalPages ? 1 : currentPage + 1;
        showPage(nextPage);
    });

    // Khởi tạo
    $allProducts.hide(); // Ẩn tất cả trước
    $allProducts.filter('[data-page="1"]').show();
    $('.page-btn[data-page="1"]').addClass('active');
});