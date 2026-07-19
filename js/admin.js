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
    bookingDate &&
    bookingDateText
){

    bookingDateText.textContent =
    bookingDate;

}

const statusText =
document.getElementById(
    "adminStatus"
);

const currentStatus =
localStorage.getItem(
    "bookingStatus"
);

if(
    currentStatus &&
    statusText
){

    statusText.textContent =
    currentStatus;

}

document
.getElementById(
    "confirmBtn"
)
.addEventListener(
    "click",
    ()=>{

        statusText.textContent =
        "已確認";

        localStorage.setItem(
            "bookingStatus",
            "已確認"
        );

        alert(
            "已確認預約"
        );

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

        localStorage.setItem(
            "bookingStatus",
            "候補中"
        );

        alert(
            "已轉入候補"
        );

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

        localStorage.setItem(
            "bookingStatus",
            "已取消"
        );

        alert(
            "已取消預約"
        );

    }
);
