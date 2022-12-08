// sets folder path for images associated with the page 
const folderpath = "///C:/Users/will/OneDrive/Documents/GitHub/html-web-project/new/css-project-1/html-classwork-undefined/images/";
// sets img variable to be equal to "Moon-Img"
const img = document.getElementById("Moon-Img");
// sets paragraphs variable to be equal to "p" tag
const paragraphs = document.getElementsByTagName("p")
// sets resetButton variable to be equal to "resetButton"
let resetButton = document.getElementById("resetButton")
// sets event that executes the page reload on the click of the button
resetButton.addEventListener('click', function onClick(event) {
    window.location.reload();
});

  
// sets a function for button 1 that will contain the *new* *page* design (*reload not a new page important distinction*)
function changeButton1() {
    // when the button tied to this function is clicked the background changes red 
    document.body.style.backgroundColor = "red";
    // when the button tied to this function is clicked the font changes
    document.body.style.fontFamily = "Monospace";
    // when the button tied to this function is clicked the image is changed to Blood-Moon.jpg changes 
    img.src = folderpath + "Blood-Moon.jpg";
    // for loop loops through p tags saved as the variable paragraphs and changes the font size
    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].style.fontSize = "35px";
    }
}

// sets a function for button 2 that will contain the *new* *page* design (*reload not a new page important distinction*)
function changeButton2() {
    // when the button tied to this function is clicked the background changes blue 
    document.body.style.backgroundColor = "blue";
    // when the button tied to this function is clicked the font changes  
    document.body.style.fontFamily = "Brush Script MT";
    // when the button tied to this function is clicked image changes 
    img.src = folderpath + "Full-Moon.jpg";
    // for loop loops through p tags saved as the variable paragraphs and changes the font color to grey
    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].style.color = "grey";
    }

}

// sets a function for button 3 that will contain the *new* *page* design (*reload not a new page important distinction*)
function changeButton3() {
    // when the button tied to this function is clicked the background changes green 
    document.body.style.backgroundColor = "green";
    // when the button tied to this function is clicked the font family changes 
    document.body.style.fontFamily = "Copperplate, fantasy";
    // when the button tied to this function is clicked the image changes
    img.src = folderpath + "Eclipse.jpg";
    // for loop loops through p tags saved as the variable paragraphs and changes the text to align to the right
    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].style.textAlign = "right";
    }

}
