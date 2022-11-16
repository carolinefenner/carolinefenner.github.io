document .addEventListener("DOMContentLoaded",function() {
var fsNavCloseBtn = document.querySelector(".fsnav_close");

fsNavCloseBtn.addEventListener("click", function () {
        this.parentElement.className = "fsnav";
    });
});