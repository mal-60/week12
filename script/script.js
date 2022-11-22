const clickMeButton = document.querySelector(".clickMe");

function handleClickMeButton ()
{
    alert("Clicked!");
}

clickMeButton.addEventListener("click", handleClickMeButton);

// clickMeButton.removeEventListener("click", handleClickMeButton);


// myElement.addEventListener('click', functionA);


// clickMeButton.addEventLister("click", handleClickMeButton, {one:true});

function changeBGColor()
{
    // document.body.style.backgroundColor = "pink";
    document.body.classList.add("pink");
}

clickMeButton.addEventListener("click", changeBGColor);

function changeText ()
{
    if (clickMeButton.textContent )
    clickMeButton.textContent = "Clicked";
}

clickMeButton.addEventListener("click", changeText);