let buttonElement = document.getElementById("button");
let radioButtons = document.querySelectorAll('input[name="favoritePlace"]');
let messageElement = document.getElementById("message");
console.log(radioButtons);
buttonElement.addEventListener("click", () => {
    let selectedPlace=null;
    for (const radioButton of radioButtons) {
        if(radioButton.checked) {
            selectedPlace = radioButton.value;
            break;
        }
    }
    messageElement.textContent = "your Favorite place is: "+ selectedPlace;
})