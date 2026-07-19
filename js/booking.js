const calendarDays =
document.getElementById(
    "calendarDays"
);

let selectedDate = null;

const year = 2026;
const month = 8;

const firstDay =
new Date(
    year,
    month - 1,
    1
).getDay();

const totalDays =
new Date(
    year,
    month,
    0
).getDate();

for(
    let i = 0;
    i < firstDay;
    i++
){

    const empty =
    document.createElement(
        "div"
    );

    calendarDays.appendChild(
        empty
    );

}

for(
    let day = 1;
    day <= totalDays;
    day++
){

    const btn =
    document.createElement(
        "button"
    );

    btn.className =
    "calendar-day";

    btn.textContent =
    day;

    btn.addEventListener(
        "click",
        ()=>{

            document
            .querySelectorAll(
                ".calendar-day"
            )
            .forEach(
                d => d.classList.remove(
                    "selected"
                )
            );

            btn.classList.add(
                "selected"
            );

            selectedDate =
            `${year}/${month}/${day}`;

        }
    );

    calendarDays.appendChild(
        btn
    );

}

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
