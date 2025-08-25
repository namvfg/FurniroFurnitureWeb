document.querySelector("form").addEventListener("submit", function (e) {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let errors = [];

    if (name.length < 2) {
        errors.push("Tên phải có ít nhất 2 ký tự.");
    }

    if (!emailPattern.test(email)) {
        errors.push("Email không hợp lệ.");
    }

    if (message.length < 10) {
        errors.push("Nội dung tin nhắn phải có ít nhất 10 ký tự.");
    }

    if (errors.length > 0) {
        e.preventDefault(); 
        alert(errors.join("\n"));
    }
});