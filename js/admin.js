if(
    !localStorage.getItem(
        "isAdmin"
    )
){

    location.href =
    "admin-login.html";

}

const bookingDate =
localStorage.getItem(
    "bookingDate"
);

const bookingDateText =
document.getElementById(
    "adminBookingDate"
);

if(
    bookingDate
){

    bookingDateText.textContent =
    bookingDate;

}

const statusText =
document.getElementById(
    "adminStatus"
);

document
.getElementById(
    "confirmBtn"
)
.addEventListener(
    "click",
    ()=>{

        statusText.textContent =
        "已確認";

    }
);

document
.getElementById(
    "waitingBtn"
)
.addEventListener(
    "click",
    ()=>{

        statusText.textContent =
        "候補中";

    }
);

document
.getElementById(
    "cancelBtn"
)
.addEventListener(
    "click",
    ()=>{

        statusText.textContent =
        "已取消";

    }
);
