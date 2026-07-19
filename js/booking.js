const dateButtons =
document.querySelectorAll(
    ".date-btn"
);

let selectedDate = null;

dateButtons.forEach(btn => {

    btn.addEventListener(
        "click",
        () => {

            dateButtons.forEach(
                b => b.classList.remove(
                    "selected"
                )
            );

            btn.classList.add(
                "selected"
            );

            selectedDate =
            btn.textContent.trim();

        }
    );

});

const bookBtn =
document.getElementById(
    "bookBtn"
);

if(bookBtn){

    bookBtn.addEventListener(
        "click",
        ()=>{

            if(!selectedDate){

                alert(
                    "請先選擇日期"
                );

                return;

            }

            localStorage.setItem(
                "bookingDate",
                selectedDate
            );

            window.location.href =
            "my-bookings.html";

        }
    );

}
