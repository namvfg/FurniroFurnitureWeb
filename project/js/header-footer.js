const loadHTMLToClassName = (classSelector, filePath) => {
    $(`${classSelector}`).load(filePath, (filePath, status, xhr) => {
        if (status === "error") {
            console.error(`Khong the load file ${filePath}: `, xhr.status, xhr.statusText)
        }
    });
};

loadHTMLToClassName(".header", "../other-pages/header.html");
loadHTMLToClassName(".footer", "../other-pages/footer.html");

const toggle = (classSelector, hiddenClass = "hidden") => {
    $(`${classSelector}`).toggleClass(hiddenClass)
    console.log("haha")
}

$(document).on("click", ".left-options", () => {
    toggle(".navigators");
})

$(document).on("click", ".right-options", () => {
    toggle(".tools");
})