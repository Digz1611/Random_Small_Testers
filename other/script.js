







function changeB() {
    var element = document.getElementById("bd");
    if (element.style.backgroundImage.includes("misty_forest.jpg")) {
        element.style.backgroundImage = "linear-gradient(to bottom right, rgb(107, 32, 255), rgb(32, 255, 117))";
    } else {
        element.style.backgroundImage = "url(other/misty_forest.jpg)";
    }
}