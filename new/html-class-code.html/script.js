
let englishElements = document.getElementsByClassName("english");
let spanishElements = document.getElementsByClassName("spanish");
let frenchElements = document.getElementsByClassName("french");
​
english();
​
function english() {
    console.log("english function ran")
​
    for (let i = 0; i < englishElements.length; i++){
​
        englishElements[i].style.display = "block";
    }
​
    for (let i = 0; i < frenchElements.length; i++) {
​
        frenchElements[i].style.display = "none";
    }
​
    for (let i = 0; i < spanishElements.length; i++) {
​
        spanishElements[i].style.display = "none";
    }
}
​
function spanish() {
    console.log("spanish function ran")
​
    for (let i = 0; i < spanishElements.length; i++){
        spanishElements[i].style.display = "block";
    }
​
    for (let i = 0; i < frenchElements.length; i++) {
        frenchElements[i].style.display = "none";
    }
​
    for (let i = 0; i < spanishElements.length; i++) {
        englishElements[i].style.display = "none";
    }
}
​
function french() {
    console.log("french function ran")
​
    for (let i = 0; i < frenchElements.length; i++){
        frenchElements[i].style.display = "block";
    }
​
    for (let i = 0; i < englishElements.length; i++) {
        englishElements[i].style.display = "none";
    }
​
    for (let i = 0; i < spanishElements.length; i++) {
        spanishElements[i].style.display = "none";
    }
​
}
​
paragraphs = document.getElementsByTagName("p")
for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.backgroundColor = "rgb(100, 100, 100, .8)"
}

let studentsArray = ["john","will", "jake", "cody", "jared"];
studentsDiv = document.getElementById("students");
for (let i = 0 ; i < studentsArray.length; i++) {
    let htmlstring = `<p>${studentsArray[i]}</p>;`
    studentsDiv.innerHTML = studentsDiv.innerHTML + htmlstring;
}