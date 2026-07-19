const bookingDate =
localStorage.getItem(
    "bookingDate"
);

const bookingDateText =
document.getElementById(
    "bookingDate"
);

const bookingRank =
document.getElementById(
    "bookingRank"
);

if(bookingDate){

    bookingDateText.textContent =
    bookingDate;

    bookingRank.textContent =
    Math.floor(
        Math.random() * 5
    ) + 1;

}

const cancelBtn =
document.getElementById(
    "cancelBookingBtn"
);

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
