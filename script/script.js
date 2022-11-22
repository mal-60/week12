const clickMeButton = document.querySelector(".clickMe");

function handleClickMeButton ()
{
    alert("Clicked!");
}

clickMeButton.addEventListener("click", handleClickMeButton);


// clickMeButton.removeEventListener("click", handleClickMeButton);


// myElement.addEventListener('click', functionA);


// clickMeButton.addEventLister("click", handleClickMeButton, {one:true});
