let inputDay, inputMonth, inputYear, gender, message, successMessage;

//Declared arrays
let akan_Female = [];
let akan_Male = [];

inputDay = Number(document.getElementById("day").value);
inputMonth = Number(document.getElementById("month").value);
inputYear = Number(document.getElementById("year").value);
gender = document.querySelector('input[name="gender"]:checked');
message = document.querySelector(".error");
successMessage = document.querySelector("div-alert");

let akan_Female = [
    {dayOfTheWeek: "Sunday", akanName: "Akosua"},
    {dayOfTheWeek: "Monday", akanName: "Adwoa"},
    {dayOfTheWeek: "Tuesday", akanName: "Abenaa"},
    {dayOfTheWeek: "Wednesday", akanName: "Akua"},
    {dayOfTheWeek: "Thursday", akanName: "Yaa"},
    {dayOfTheWeek: "Friday", akanName: "Afua"},
    {dayOfTheWeek: "Saturday", akanName: "Ama"},
];

let akan_Male = [
    {dayOfTheWeek: "Sunday", akanName: "Kwasi"},
    {dayOfTheWeek: "Monday", akanName: "Kwadwo"},
    {dayOfTheWeek: "Tuesday", akanName: "Kwabena"},
    {dayOfTheWeek: "Wednesday", akanName: "Kwaku"},
    {dayOfTheWeek: "Thursday", akanName: "Yaw"},
    {dayOfTheWeek: "Friday", akanName: "Kofi"},
    {dayOfTheWeek: "Saturday", akanName: "Kwame"},
];

//Validation of user input

if(inputDay<=0 || inputDay> 31) {
    message.textContent = "Day Error! Please try again";
    message.classList.remove("display");
} else if (inputMonth<=0 || inputMonth>12) {
    message.textContent = "Month Error! Please try again";
    message.classList.remove("display");
} else if (document.getElementById("year").value.length !=4 || inputYear<=0 || inputYear>9999) {
    message.textContent = "Year Error! Please try again";
    message.classList.remove("display");
} else if (inputYear>new Date().getFullYear()) {
    message.textContent = "Year not found!";
    message.classList.remove("display");
} else if (gender == null) {
    message.textContent = "Gender field required";
    message.classList.remove("display");
} else {
    message.classList.add("display");
}

//Day of the week born
var day_born = parseInt(document.getElementById("day").value);
var month_born = parseInt(document.getElementById("month").value);
var year_born = parseInt(document.getElementById("year").value);
var fullDateOfBirth = new Date(day_born + "/" + month_born + "/" + year_born);
var d = fullDateOfBirth.getDay();

