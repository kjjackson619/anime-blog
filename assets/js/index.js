//global variables

var currentYear = document.getElementById("footer");





//current publishing year for footer
function publishYear() {
    currentYear.innerHTML = '©' + new Date().getFullYear();
    return currentYear;
}

publishYear();