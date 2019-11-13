document.getElementById("lefteye").style.backgroundColor = "yellow";
document.getElementById("head").style.backgroundColor = "#FF00FF";
document.getElementById("mouth").style.backgroundColor = "#800000";
document.getElementById("leftarm").style.backgroundColor = "#FFA500";
document.getElementById("rightarm").style.backgroundColor = "#FFA500";
document.getElementById("body").style.backgroundColor = "green";
// Put a 2-pixel-wide, solid blace border around his body.
document.getElementById("body").style.border = "2px black solid";
// Round the corners of his mouth.
document.getElementById("mouth").style.borderRadius = "4px";
// put yellow dots around his right eye.
document.getElementById("righteye").style.border = "4px yellow dotted";
// Change his left arm's color.
document.getElementById("leftarm").style.backgroundColor = "#FF00FF";
// Chane the text color.
document.getElementById("body").style.color = "FF0000";
// Give Douglas hair.
document.getElementById("head").style.borderTop = "5px black solid";
document.getElementById("head").style.transform = "rotate(15deg)";
//document.getElementById("head").style.transform = "rotate(15deg)";
var rightEye = document.getElementById("righteye");
rightEye.addEventListener("click", moveUpDown);

function moveUpDown(e) {
    var robotPart = e.target;
    var top = 0;

    var id = setInterval(frame, 10) // draw every 10ms

    function frame() {
        robotPart.style.top = top + '%';
        top++;
        if (top === 20) {
            clearInterval(id);
        }
    }
}


var nose = document.getElementById("nose");
nose.addEventListener("click", moveUpDown);

function moveUpDown(e) {
    var robotPart = e.target;
    var top = 0;

    var id = setInterval(frame, 10) // draw every 10ms

    function frame() {
        robotPart.style.top = top + '%';
        top++;
        if (top === 20) {
            clearInterval(id);
        }
    }
}

var mouth = document.getElementById("mouth");
mouth.addEventListener("click", right);

function moveUPDown(e) {
    var robotPart = e.target;
    var top = 0;

    var id = setInterval(frame, 10) // draw every 10ms

    function frame() {
        robotPart.style.top = top + '%';
        top++;
        if (top === 20) {
            clearInterval(id);
        }
    }

}