function transform () {
    geez = document.getElementById("heading");
    geez.style.fontSize = "40px";
    geez.innerHTML = "Behold!";
    geez.style.backgroundColor = "orange";
    geez.style.padding = "20px";
    randomNumber();
    userInputStuff();
};

function randomNumber () {
    deez = document.getElementById("smol_heading");
    deez.innerHTML = Math.floor(Math.random() * 10);
    deez.style.fontSize = "40px";
    deez.style.backgroundColor = "orange";
    deez.style.padding = "20px";
    deez.style.textAlign = "center"
}

function userInputStuff () {
    let x = document.getElementById("userInput").value;

    let y = document.getElementById("userNumber");

    y.innerHTML = x;
    y.style.color = "green";
    y.style.backgroundColor = "blue";
    y.style.padding = "30px";
    y.style.textAlign = "center";
};