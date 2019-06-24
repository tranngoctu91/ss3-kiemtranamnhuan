let year = prompt("enter a year");
let result = document.getElementById("result");
if (year % 400 == 0) {
    result.innerHTML = ("year "+year+" is a leap year")
} else {
    result.innerHTML = ("year "+year+" is not a leap year ")
}