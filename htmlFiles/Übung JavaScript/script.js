let mottoButton = document.getElementById("displayMottoButton");
function displayMotto() {
    let newElement = document.createElement("p");
    newElement.id="meinMotto";
    newElement.innerHTML="YOLO";
    let existingParentElement = document.getElementById("aboutMe");
    existingParentElement.appendChild(newElement);
}
mottoButton.addEventListener("click", displayMotto);