function myFunction() {
    var x = document.getElementById("javascriptActivated");

    if (x.style.display === "block" || x.style.display === '' ) {
        x.style.display = "none";
        console.log("The title has been hidden.")
    } else {
        x.style.display = "block";
        console.log("The title has been shown.")
    }
}
