const loadHTMLToClassName = (classSelector, filePath) => {
    $(`${classSelector}`).load(filePath, (filePath, status, xhr) => {
        if (status === "error") {
            console.error(`Khong the load file ${filePath}: `, xhr.status, xhr.statusText)
        }
    });
};

loadHTMLToClassName(".header", "/other-pages/header.html");
loadHTMLToClassName(".footer", "/other-pages/footer.html");