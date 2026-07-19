const bookingDate =
localStorage.getItem(
    "bookingDate"
);

const bookingStatus =
localStorage.getItem(
    "bookingStatus"
);

const bookingDateText =
document.getElementById(
    "bookingDate"
);

const bookingStatusText =
document.getElementById(
    "bookingStatus"
);

if(
    bookingDate &&
    bookingDateText
){

    bookingDateText.textContent =
    bookingDate;

}

if(
    bookingStatus &&
    bookingStatusText
){

    bookingStatusText.textContent =
    bookingStatus;

}

const cancelBtn =
document.getElementById(
    "cancelBookingBtn"
);

if(cancelBtn){

    cancelBtn.addEventListener(
        "click",
        ()=>{

            localStorage.removeItem(
                "bookingDate"
            );

            localStorage.removeItem(
                "bookingStatus"
            );

            alert(
                "預約已取消"
            );

            location.reload();

        }
    );

}
