// STEP ONE add div elements & set up toggle display

const app = document.getElementById("app");

function myFunction(x) {
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

myFunction(app);