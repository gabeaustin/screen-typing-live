let myText = "Hi! I'm Typo, and I'll be your screen typist for today!";
let textArray = myText.split("");
let loopTimer;

function frameLooper() {
  if (textArray.length > 0) {
    document.getElementById("type_text").innerHTML += textArray.shift();
  } else {
    clearTimeout(loopTimer);
    return false;
  }

  loopTimer = setTimeout("frameLooper()", 80);
}

frameLooper();
