const showNotification = (message, duration=3000) => {
    $('#notification').text(message).fadeIn();

    setTimeout(() => {
        $('#notification').fadeOut();
    }, duration);
}