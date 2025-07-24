const updatePrice = (quantity) => {
    let price = parseFloat($('.list-prods__row-prod__price').text().replace("Rs.", "").replace(",", "").trim())
    let subTotal = price * quantity;
    let subTotalStr = subTotal.toLocaleString('en-US', {
        maximumFractionDigits: 2,
        minimumFractionDigits: 2
    }).toString();
    subTotalStr = `Rs. ${subTotalStr}`
    $('.list-prods__row-prod__total').text(subTotalStr);
    $('.amount__number__subtotal__number').text(subTotalStr);
    $('.amount__number__total__number').text(subTotalStr);
}


$(document).ready(() => {
    $('.list-prods__row-prod__input input').on('blur', (e) => {
        let value = $(e.target).val();
        if (value < 0) {
            value = 0;
            $(e.target).val(value);
            showNotification("Không được nhập số âm")
        }
        console.log('Giá trị vừa nhập:', value);
        updatePrice(value)
    })

    $('.list-prods__row-prod__input input').each((index, element) => {
        let value = $(element).val();
        console.log('Giá trị vừa nhập:', value);
        updatePrice(value);
    })

    $('.list-prods__row-prod__delete div').on('click', (e) => {
        $('.list-prods__row-prod').remove();
        $('.amount__number__subtotal__number').text("Rs. 0.00");
        $('.amount__number__total__number').text("Rs. 0.00");
    })
})