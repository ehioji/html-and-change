function transform () {
    geez = document.getElementById("heading");
    geez.style.fontSize = "40px";
    geez.innerHTML = "Behold!";
    geez.style.backgroundColor = "orange";
    geez.style.padding = "20px";
    randomNumber();
};

function randomNumber () {
    deez = document.getElementById("smol_heading");
    deez.style.fontSize = "40px";
    deez.innerHTML = Math.floor(Math.random() * 10);
    deez.style.backgroundColor = "orange";
    deez.style.padding = "20px";
}