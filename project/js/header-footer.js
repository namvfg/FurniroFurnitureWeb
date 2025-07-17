const loadHTMLToClassName = (classSelector, filePath) => {
    fetch(filePath)
        .then(res => {
            if (!res.ok) throw new Error(`Khong tim that file : ${res.status}`);
            return res.text();
        }).then(html => {
            document.querySelectorAll(classSelector).forEach(element => {
                element.innerHTML = html;
            });
        }).catch(err => {
            console.error('Load html fail: ', err);
        })
}

loadHTMLToClassName(".header", "/other-pages/header.html");
loadHTMLToClassName(".footer", "/other-pages/footer.html");