const folderpath = "///C:/Users/will/OneDrive/Documents/GitHub/html-web-project/new/css-project-1/html-classwork-undefined/images/";

const img = document.getElementById("Moon-Img");

const paragraphs = document.getElementsByTagName("p")

let resetButton = document.getElementById("resetButton")

resetButton.addEventListener('click', function onClick(event) {
    window.location.reload();
});

  

function changeButton1() {
    document.body.style.backgroundColor = "red";
    document.body.style.fontFamily = "Monospace";
    img.src = folderpath + "Blood-Moon.jpg";
    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].style.fontSize = "35px";
    }
}

function changeButton2() {
    document.body.style.backgroundColor = "blue";
    document.body.style.fontFamily = "Brush Script MT";
    img.src = folderpath + "Full-Moon.jpg";
    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].style.color = "grey";
    }

}

function changeButton3() {
    document.body.style.backgroundColor = "green";
    document.body.style.fontFamily = "Copperplate, fantasy";
    img.src = folderpath + "Eclipse.jpg";
    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].style.textAlign = "right";
    }

}
