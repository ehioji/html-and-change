function transform () {
    geez = document.getElementById("heading");
    geez.style.fontSize = "40px";
    geez.innerHTML = "Behold!";
    geez.style.backgroundColor = "orange";
    geez.style.padding = "20px";
    randomNumber();
    userInputStuff();
    compareNumbers();
};

function randomNumber () {
    deez = document.getElementById("smol_heading");
    randomNumbah = Math.floor(Math.random() * 10);
    deez.innerHTML = randomNumbah;
    deez.style.fontSize = "40px";
    deez.style.backgroundColor = "orange";
    deez.style.padding = "20px";
    deez.style.textAlign = "center";

    return randomNumbah;
}

function userInputStuff () {
    let x = document.getElementById("userInput").value;

    let y = document.getElementById("userNumber");

    y.innerHTML = x;
    y.style.color = "green";
    y.style.backgroundColor = "blue";
    y.style.padding = "30px";
    y.style.textAlign = "center";

    return x;
};

function compareNumbers () {

    let numb1 = randomNumber();
    let numb2 = userInputStuff();

    if (numb1 != numb2) {
        document.getElementById("compare").innerHTML = `OH MY GAWD! ${numb1} is not the same as ${numb2}!`;
    } else {
        document.getElementById("compare").innerHTML = `AYY THEY'RE THE SAME!!! ${numb1} is the same as ${numb2}`;
    }
}