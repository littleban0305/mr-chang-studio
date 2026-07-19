const bookingDate =
localStorage.getItem(
    "bookingDate"
);

const bookingDateText =
document.getElementById(
    "bookingDate"
);

if(
    bookingDate &&
    bookingDateText
){

    bookingDateText.textContent =
    bookingDate;

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

            alert(
                "預約已取消"
            );

            location.reload();

        }
    );

}
