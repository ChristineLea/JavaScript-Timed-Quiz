// STEP ONE add div elements & set up toggle display

const test = document.getElementById("app");

function myFunction(x) {
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

// myFunction(test);