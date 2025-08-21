$(document).ready(function () {

    // --- OBJECT QUẢN LÝ CÁC BỘ ẢNH ---
    const productImages = {
        'beige': {
            main: '../images/sofa-mau1-1.png',
            thumbnails: [
                '../images/sofa-mau1-1.png',
                '../images/sofa-mau1-2.png',
                '../images/sofa-mau1-3.png',
                '../images/sofa-mau1-3.png'
            ]
        },
        'gray': {
            main: '../images/sofa-mau2-1.png',
            thumbnails: [
                '../images/sofa-mau2-1.png',
                '../images/sofa-mau2-2.png',
                '../images/sofa-mau2-3.png',
                '../images/sofa-mau2-4.png'
            ]
        }
    };

    function updateGallery(color) {
        const images = productImages[color];
        if (!images) return;

        $('#main-product-image').attr('src', images.main);

        const thumbnailsContainer = $('.thumbnails');
        thumbnailsContainer.empty();

        images.thumbnails.forEach(function (src) {
            const thumbItem = `
                <div class="thumb-item">
                    <img src="${src}" alt="Product thumbnail">
                </div>`;
            thumbnailsContainer.append(thumbItem);
        });

        thumbnailsContainer.find('.thumb-item').first().addClass('active');
    }


    $('.color-swatch').on('click', function () {
        $('.color-swatch').removeClass('active');
        $(this).addClass('active');
        const selectedColor = $(this).data('color');
        updateGallery(selectedColor);
    });

    $('.thumbnails').on('click', '.thumb-item', function () {
        if ($(this).hasClass('active')) return;

        var newImageSrc = $(this).find('img').attr('src');
        $('#main-product-image').attr('src', newImageSrc);

        $('.thumb-item').removeClass('active');
        $(this).addClass('active');
    });

    $('.size-btn').on('click', function () {
        $('.size-btn').removeClass('active');
        $(this).addClass('active');
    });

    $('#increase-qty').on('click', function () {
        var quantityElement = $('#quantity');
        var currentQuantity = parseInt(quantityElement.text());
        quantityElement.text(currentQuantity + 1);
    });

    $('#decrease-qty').on('click', function () {
        var quantityElement = $('#quantity');
        var currentQuantity = parseInt(quantityElement.text());
        if (currentQuantity > 1) {
            quantityElement.text(currentQuantity - 1);
        }
    });

    const initialColor = $('.color-swatch.active').data('color');
    updateGallery(initialColor);

    const newProducts = [
        { id: 5, name: 'New Chair', description: 'Comfortable office chair', price: 'Rp 1.200.000', oldPrice: null, image: '../images/Potty.png', badge: { type: 'new', text: 'New' } },
        { id: 6, name: 'Modern Lamp', description: 'Bright desk lamp', price: 'Rp 3.000.000', oldPrice: 'Rp 4.000.000', image: '../images/Leviosa.png', badge: { type: 'sale', text: '-25%' } },
        { id: 7, name: 'Wooden Table', description: 'Solid oak dining table', price: 'Rp 8.500.000', oldPrice: null, image: '../images/Lolito.png', badge: null },
        { id: 8, name: 'Soft Carpet', description: 'Fluffy living room carpet', price: 'Rp 450.000', oldPrice: null, image: '../images/Respira.png', badge: { type: 'new', text: 'New' } },
    ];

    let isExpanded = false;

    function createProductCard(product) {
        const badgeHTML = product.badge
            ? `<div class="badge ${product.badge.type}">${product.badge.text}</div>`
            : '';

        const oldPriceHTML = product.oldPrice ? `<span class="old-price">${product.oldPrice}</span>` : '';

        return `
            <div class="product-card added-product"> 
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