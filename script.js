document.querySelector('.enter').addEventListener('click', function() {
    let dayInput = document.querySelector('#input-day').value;
    let monthInput = document.querySelector('#input-month').value;
    let yearInput = document.querySelector('#input-year').value;

    let today = new Date();
    let dayCurrent = today.getDate();
    let monthCurrent =today.getMonth() + 1;
    let yearCurrent = today.getFullYear()

    let dayCheck = document.querySelector('.day-invalid');
    let monthCheck = document.querySelector('.month-invalid');
    let yearCheck = document.querySelector('.year-invalid');

    let dayWarning = document.querySelector(".day-warning");
    let monthWarning = document.querySelector(".month-warning");
    let yearWarning = document.querySelector(".year-warning");

    dayCheck.checked = false;
    monthCheck.checked = false;
    yearCheck.checked = false;

    dayWarning.innerText = "";
    monthWarning.innerText = "";
    yearWarning.innerText = "";


    if(dayInput == "" || monthInput == "" || yearInput == "") {
        if(dayInput == "") {
            dayCheck.checked = true;
            dayWarning.innerText = "This field is required"
        }

        if(monthInput == "") {
            monthCheck.checked = true;
            monthWarning.innerText = "This field is required"
        }

        if(yearInput == "") {
            yearCheck.checked = true;
            yearWarning.innerText = "This field is required"
        }
    }
    else if(dayInput > 31 || monthInput > 12 || yearInput > yearCurrent) {
        if(dayInput > 31) {
            dayCheck.checked = true;
            dayWarning.innerText = "Must be a valid day"
        }

        if(monthInput > 12) {
            monthCheck.checked = true;
            monthWarning.innerText = "Must be a valid month"
        }

        if(yearInput > yearCurrent) {
            yearCheck.checked = true;
            yearWarning.innerText = "Must be in the past"
        }
    }
    else if((monthInput % 2 != 0 && dayInput > 30) || (monthInput == 2 && dayInput > 28)) {
        dayCheck.checked = true;
        dayWarning.innerText = "Must be a valid day"
    }
    else {
        dayCheck.checked = false;
        monthCheck.checked = false;
        yearCheck.checked = false;

        yearFinal = yearCurrent - yearInput;

        if(monthCurrent >= monthInput) {
            monthFinal = monthCurrent - monthInput;
        }
        else {
            yearFinal--;
            monthFinal = 12 + (monthCurrent - monthInput)
        }

        if(dayCurrent >= dayInput) {
            dayFinal = dayCurrent - dayInput;
        }
        else {
            monthFinal--;
            dayFinal = 31 + (dayCurrent - dayInput);

            if(monthFinal < 0) {
                monthFinal = 11;
                yearFinal--;
            }
        }

        printNo(0, dayFinal, "day");
        printNo(0, monthFinal, "month");
        printNo(0, yearFinal, "year");
    }    
})

function printNo(start, end, index) {
    target = document.querySelector(`.result-${index}-input`);
    
    if(start <= end){
        console.log(target.innerText);
        console.log(start)
        target.innerText = start;

        console.log(target);
        setTimeout(function() {
            start++;
            printNo(start, end, index);
        }, 10)
    }
}