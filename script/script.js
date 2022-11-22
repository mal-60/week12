const clickMeButton = document.querySelector(".clickMe");

function handleClickMeButton(event)
{
    console.log(event.target)
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
    if (clickMeButton.textContent == "Hello I am clicked");
    clickMeButton.textContent = "Clicked";
     (clickMeButton.textContent == "Bye I am clicked");
    clickMeButton.textContent = "Bye Clicked";
}

clickMeButton.addEventListener("click", changeText);

function createAddButton()
{
    const purpleButton = document.createElement("button");
    purpleButton.textContent = "Purple";
    purpleButton.addEventListener("mousemove", changeBGGreen);
    document.body.appendChild(purpleButton);
}

clickMeButton.addEventListener("click", createAddButton);

function createAddPara ()
{
    const para = document.createElement("p");
    para.textContent = "My para";
    para.addEventListener("mousemove", changeBGGreen);
    document.body.appendChild(para);
}

clickMeButton.addEventListener("click", createAddPara);

function changeBGGreen (event)
{
    console.log(event.target);
    event.target.classList.add("green");
}

const buttonContainer = document.querySelector(".buttonContainer");
buttonContainer.addEventListener("mousemove, changeBGGreen");

buttonContainer.addEventListener("click", changeParaToColor);

function changeParaToColor ()
