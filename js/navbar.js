const mobileMenu =
document.getElementById(
    "mobileMenu"
);

const isLogin =
localStorage.getItem(
    "isLogin"
);

if(mobileMenu){

    if(isLogin){

        mobileMenu.innerHTML = `
            <a href="index.html">
                首頁
            </a>

            <a href="profile.html">
                會員中心
            </a>

            <a href="#" id="logoutLink">
                登出
            </a>
        `;

    }else{

        mobileMenu.innerHTML = `
            <a href="index.html">
                首頁
            </a>

            <a href="login.html">
                登入
            </a>

            <a href="register.html">
                註冊會員
            </a>
        `;

    }

}

document.addEventListener(
    "click",
    (e)=>{

        if(
            e.target.id ===
            "logoutLink"
        ){

            localStorage.removeItem(
                "isLogin"
            );

            location.href =
            "index.html";

        }

    }
);
