let inputDay, inputMonth, inputYear, gender, message, successMessage;

//Declared Arrays
let akanFemale = [];
let akanMale = [];

// submit button
const btnSubmit = document.querySelector(".submit");

// adding event listener to the submit button
btnSubmit.addEventListener("click", function () {


    inputDay = Number(document.getElementById("day").value);
    inputMonth = Number(document.getElementById("month").value);
    inputYear = Number(document.getElementById("year").value);
    gender = document.querySelector('input[name="gender"]:checked');
    message = document.querySelector(".error");
    successMessage = document.querySelector(".div-alert");

    // akanNames

    // female
    let akanFemale = [
        { dayOfTheWeek: "Sunday", akanName: "Akosua" },
        { dayOfTheWeek: "Monday", akanName: "Adwoa" },
        { dayOfTheWeek: "Tuesday", akanName: "Abenaa" },
        { dayOfTheWeek: "Wednesday", akanName: "Akua" },
        { dayOfTheWeek: "Thursday", akanName: "Yaa" },
        { dayOfTheWeek: "Friday", akanName: "Afua" },
        { dayOfTheWeek: "Saturday", akanName: "Ama" },
    ];

    // male
    let akanMale = [
        {dayOfTheWeek: "Sunday", akanName: "Kwasi"},
        {dayOfTheWeek: "Monday", akanName: "Kwadwo"},
        {dayOfTheWeek: "Tuesday", akanName: "Kwabena"},
        {dayOfTheWeek: "Wednesday", akanName: "Kwaku"},
        {dayOfTheWeek: "Thursday", akanName: "Yaw"},
        {dayOfTheWeek: "Friday", akanName: "Kofi"},
        {dayOfTheWeek: "Saturday", akanName: "Kwame"},
    ];

    // validate date of birth user input
    if (inputDay <= 0 || inputDay > 31) {
        message.textContent = "Date Error! Please try again";
        message.classList.remove("display");
    } else if (inputMonth <= 0 || inputMonth > 12) {
        message.textContent = "Month Error! Please try again";
        message.classList.remove("display");
    } else if (document.getElementById("year").value.length != 4 || inputYear <= 0 || inputYear > 9999) {
        message.textContent = "Year Error! Please try again";
        message.classList.remove("display");
    }     // check if user year is before current year
    else if (inputYear > new Date().getFullYear()) {
        message.textContent = "Year not found";
        message.classList.remove("display");
    } else if (gender == null) {
        message.textContent = "Gender field required";
        message.classList.remove("display");
    } else {
        message.classList.add("display");

        // getting the day of the week born
        var dayBorn = parseInt(document.getElementById("day").value);
        var monthBorn = parseInt(document.getElementById("month").value);
        var yearBorn = parseInt(document.getElementById("year").value);
        var fullDate0fbirth = new Date(dayBorn + "/" + monthBorn + "/" + yearBorn);
        var d = fullDate0fbirth.getDay();

        // displaying Akan name according to user inputs
        if (gender.value == "male") {
            akanMale.find((item, index, arr) => {
                if (index == d) {
                    console.log(item.akanName, item.dayOfTheWeek);
                    successMessage.textContent = `Your Akan name is ${item.akanName} born on ${item.dayOfTheWeek}`;
                    successMessage.classList.remove("hidden");
                }
            });
        } else if (gender.value == "female") {
            akanFemale.find((item, index, arr) => {
                if (index == d) {
                    console.log(item.akanName, item.dayOfTheWeek);
                    successMessage.textContent = `Your Akan name is ${item.akanName} born on ${item.dayOfTheWeek}`;
                    successMessage.classList.remove("hidden");
                }
            });
        } else {
            let divAlertError = document.querySelector("div-alert-error").textContent = 'Error displaying your name';
            divAlertError.classList.remove("hidden");
        }

    }

});

