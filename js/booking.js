const calendarDays =
document.getElementById(
    "calendarDays"
);

let selectedDate = null;

for(
    let day = 1;
    day <= 31;
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
            `2026/08/${day}`;
        }
    );

    calendarDays.appendChild(
        btn
    );

}
