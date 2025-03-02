// Your code here
function moveDodgerLeft() {
    const dodger = document.getElementById("dodger"); // Make sure you have an element with id="dodger"
    const left = parseInt(dodger.style.left.replace("px", ""), 10);
    if (left > 0) {
        dodger.style.left = `${left - 10}px`;
    }
}function moveDodgerRight() {
    const dodger = document.getElementById("dodger"); // Ensure an element with id="dodger" exists
    const left = parseInt(dodger.style.left.replace("px", ""), 10);
    if (left < 360) { // Adjust this value based on your container width
        dodger.style.left = `${left + 10}px`;
    }
}

