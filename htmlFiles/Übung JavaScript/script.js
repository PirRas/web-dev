// Globale variablen

// Motto
let mottoButton = document.getElementById("displayMottoButton");
let mottoIsShown = false;
let mottoText = "YOLO";
// Lieblingsfilm
let movies = ["Iron Man", "The Hunger Games", "Interstellar", "The Dark Knight", "Fast&Furious"];
let currentMovieIndex = 0;
let movieHTMLButton = document.getElementById("movieButton");
// Hobbies
let meineHobbies = ["Basketball", "Volleyball", "Kochen", "Musik hören", "Freunde treffen"];
let listCounter = 0;
let hobbyButton = document.getElementById("hobbyButton");

// Funktionen (die Erstellung von Funktionen)
function displayMotto() {
    if (mottoIsShown) {
        return;
    } else {
        let newElement = document.createElement("p");
        newElement.id = "meinMotto";
        newElement.innerHTML = mottoText;
        let existingParentElement = document.getElementById("aboutMe");
        existingParentElement.appendChild(newElement);
        mottoIsShown = true;
        mottoButton.remove();
    }
}

function displayMovies() {
    let movieTextElement = document.getElementById("movieTitle");
    if (movies.length > currentMovieIndex) {
        movieTextElement.innerHTML = movies[currentMovieIndex];
        currentMovieIndex += 1;
    }
    if (currentMovieIndex == 5) {
        movieHTMLButton.remove();
    }
}

function addHobby() {
    let hobbyListElement = document.getElementById("hobbyList");
    if (meineHobbies.length > listCounter) {
        let newHobbyElement = document.createElement("li");
        newHobbyElement.innerHTML = meineHobbies[listCounter];
        hobbyListElement.appendChild(newHobbyElement);
        listCounter += 1;
    }
    if (listCounter == 5) {
        hobbyButton.remove();
    }
}

//Event Listeners
mottoButton.addEventListener("click", displayMotto);

movieHTMLButton.addEventListener("click", displayMovies);

hobbyButton.addEventListener("click", addHobby);