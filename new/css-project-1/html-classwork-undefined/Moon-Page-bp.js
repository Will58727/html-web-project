const folderpath = "///C:/Users/will/OneDrive/Documents/GitHub/html-web-project/new/css-project-1/html-classwork-undefined/images/";

const btn = document.getElementById("bloodMoon");

btn.addEventListener('click', function onClick(event) {
    event.target.style.backgroundColor = 'red';});

  

let image = document.getElementById("moonImage");
function fullMoon() {
    let image = document.getElementById("moonImage");
    image.src = folderpath + "Full-Moon.jpg"
    
}

function bloodMoon() {
    let image = document.getElementById("moonImage");
    image.src = folderpath + "Blood-Moon.jpg"
    
    
    
}

function eclipse() {
    let image = document.getElementById("moonImage");
    image.src = folderpath + "eclipse.jpg"
    
    
}

function btn1() {
document.getElementById("btn1");
bloodMoon = backgroundColor;
}