const logoutBtn =
document.getElementById(
    "logoutBtn"
);

logoutBtn.addEventListener(
    "click",
    () => {

        localStorage.removeItem(
            "isLogin"
        );

        window.location.href =
        "index.html";

    }
);
