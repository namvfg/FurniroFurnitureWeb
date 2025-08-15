const loadHTMLToClassName = (classSelector, filePath) => {
    $(classSelector).load(filePath, function (response, status, xhr) {
        if (status === "error") {
            console.error(`Không thể load file ${filePath}:`, xhr.status, xhr.statusText);
        }
    });
};

const getBasePath = () => {
    // Lấy URL của trang hiện tại
    const currentPath = window.location.pathname;

    if (currentPath.includes("/other-pages/")) {
        return "..";
    }

    return ".";
};

const basePath = getBasePath();
loadHTMLToClassName(".header", `${basePath}/other-pages/header.html`);
loadHTMLToClassName(".footer", `${basePath}/other-pages/footer.html`);

const toggle = (classSelector, hiddenClass = "hidden") => {
    $(classSelector).toggleClass(hiddenClass);
};

$(document).on("click", ".left-options", () => {
    toggle(".navigators");
});

$(document).on("click", ".right-options", () => {
    toggle(".tools");
});
