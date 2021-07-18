//Initialising variables needed
let input_Day,input_Month, input_Year, gender, message, success_Message;

//Array to take in female akan names
let akan_Female=[];

//Array to take in male akan names
let akan_Male=[];

inputDay = Number(document.getElementById("day").value);
inputMonth = Number(document.getElementById("month").value);
inputYear = Number(document.getElementById("year").value);
gender = document.querySelector('input[name= "gender"]:checked');
message = document.querySelector(".error");
successMessage = document.querySelector(".div-alert");

//Female Akan Names
let akan_Female = [
    {dayOfTheWeek: "Sunday", akanName: "Akosua"},
    {dayOfTheWeek: "Monday", akanName: "Adwoa"},
    {dayOfTheWeek: "Tuesday", akanName: "Abenaa"},
    {dayOfTheWeek: "Wednesday", akanName: "Akua"},
    {dayOfTheWeek: "Thursday", akanName: "Yaa"},
    {dayOfTheWeek: "Friday", akanName: "Afua"},
    {dayOfTheWeek: "Saturday", akanName: "Ama"},
];

//Male Akan Names
let akan_Male = [
    {dayOfTheWeek: "Sunday", akanName: "Kwasi"},
    {dayOfTheWeek: "Monday", akanName: "Kwadwo"},
    {dayOfTheWeek: "Tuesday", akanName: "Kwabena"},
    {dayOfTheWeek: "Wednesday", akanName: "Kwaku"},
    {dayOfTheWeek: "Thursday", akanName: "Yaw"},
    {dayOfTheWeek: "Friday", akanName: "Kofi"},
    {dayOfTheWeek: "Saturday", akanName: "Kwame"},
];