let config = {
    cUrl: 'https://api.countrystatecity.in/v1/countries/',
    cKey: 'VFIxQkFXN292TDJndkpKOVZXSjhBRENKMjhuRXFOWUZWYTNQcUkyUQ=='
}

let countrySelect = $('#country'),
    stateSelect = $('#province'),
    citySelect = $('#city')


const loadCountries = () => {
    let apiEndPoint = config.cUrl;

    fetch(apiEndPoint, {
        headers: { "X-CSCAPI-KEY": config.cKey }
    }).then(res => {
        return res.json()
    }).then(data => {
        data.forEach(country => {
            countrySelect.append($('<option>', {
                value: country.iso2,
                text: country.name
            }))
        })
    }).catch(error => console.log('Error loading countries: ', error))
}

const loadStates = () => {
    const selectedCountryCode = countrySelect.val();
    stateSelect.html("<option selected>--Province--</option>");

    fetch(`${config.cUrl}${selectedCountryCode}/states/`, {
        headers: { "X-CSCAPI-KEY": config.cKey }
    }).then(res => {
        return res.json();
    }).then(data => {
        data.forEach(state => {
            stateSelect.append($('<option>', {
                value: state.iso2,
                text: state.name
            }))
        })
    }).catch(error => console.log('Error loading states: ', error))
}

const loadCities = () => {
    const selectedCountryCode = countrySelect.val();
    const selectedStateCode = stateSelect.val();
    citySelect.html("<option selected>--Town / City--</option>");

    console.log(selectedCountryCode)
    console.log(selectedStateCode)

    fetch(`${config.cUrl}${selectedCountryCode}/states/${selectedStateCode}/cities/`, {
        headers: { "X-CSCAPI-KEY": config.cKey }
    }).then(res => {
        return res.json();
    }).then(data => {
        data.forEach(city => {
            citySelect.append($('<option>', {
                value: city.iso2,
                text: city.name
            }))
        })
    }).catch(error => console.log('Error loading cities: ', error))
}

$(function () {
    loadCountries()
})

countrySelect.on('change', () => {
    loadStates()
})

stateSelect.on('change', () => {
    loadCities()
})

document.querySelector("form").addEventListener("submit", function (e) {
    const country = document.getElementById("country");
    const province = document.getElementById("province");
    const city = document.getElementById("city");
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const paymentMethods = document.querySelectorAll('input[name="payment-method"]');

    let errors = [];

    if (country.value === "--Country--") {
        errors.push("Hãy vui lòng chọn quốc gia.");
    }

    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        errors.push("Email không hợp lệ.");
    }

    if (!phone.match(/^[0-9]{10,15}$/)) {
        errors.push("Số điện thoại không hợp lệ. Vui lòng nhập từ 10 đến 15 chữ số.");
    }

    if (![...paymentMethods].some(pm => pm.checked)) {
        errors.push("Hãy chọn phương thức thanh toán.");
    }

    if (errors.length > 0) {
        e.preventDefault();
        alert(errors.join("\n"));
    }
});