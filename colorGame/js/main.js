counter = 0;

let colors = ["Red", "Blue", "Green", "Yellow"];
let playBtn = document.querySelector("#play");
let next = document.querySelector("#next");
const score = document.querySelector("#score");
const notice = document.querySelector("#notice");
const form = document.querySelector("#playerName");
const stutus = document.querySelector(".status1");

alert("Enter Your Name and Click 'New Colour' to start game. Use 'Next' to bring up new question")



let checkmark = document.querySelector("#checkmark");
let wrong = document.querySelector("#wrong");
let correct = document.querySelector("#correct");
let color1 = document.querySelector("#color1");
let color2 = document.querySelector("#color2");
let blue = document.querySelector("#Blue");
let red = document.querySelector("#Red");
let green = document.querySelector("#Green");
let yellow = document.querySelector("#Yellow");
let correctInt = 0;




let a = 0;
a++;


playBtn.addEventListener("click", () => {
    let x = setInterval(timer, 1000);
    document.querySelector(".newColor").style.display = "none";
    let para = $('.status1')
    para.text("Go!")
})


next.addEventListener("click", () => {
    reset();
    number1.innerHTML = a++;
    notice.innerHTML = "Beware of the '30sec' Countdown!";
    notice.classList.add("cnotice");
    const faster = $('.status1')
    faster.text('Faster, Faster, Faster!!!')
})



const reset=() => {
    let random1 = Math.floor(Math.random() * 4);
    color1.style.display = "block";
    color1.innerHTML = colors[random1];
    //document.querySelector(".set").style.display = "none";
    correctAns = colors[random1].toLowerCase();
    notice.classList.remove("cnotice");
}


const testbtn = (evt) => {
    let element = evt.currentTarget;
    let answer = element.getAttribute("id").toLowerCase();

    if (correctAns === answer) {
        counter++
        score.innerHTML = counter;
        color2.innerHTML = "Correct"
        color2.style.display = "block";
        checkmark.classList.add("fadeAway");

    } else {
        color2.innerHTML = "Incorrect";
        color2.style.display = "block";
        wrong.classList.add("fadeAway");
    }
    setTimeout(function () {
        checkmark.classList.remove("fadeAway");
        wrong.classList.remove("fadeAway")
    }, 500);
}

blue.addEventListener('click', testbtn)
red.addEventListener('click', testbtn)
green.addEventListener('click', testbtn)
yellow.addEventListener('click', testbtn)



let countDown = 30;
function timer() {
    document.querySelector("#time").innerHTML = countDown;
    if (countDown == 0) {
        clearInterval(timer);
        alert("Game Over. Score: " + counter);
    }
    countDown--;
}


form.addEventListener('submit', evt => {
    evt.preventDefault()
    console.log(`${form.elements.plName.value}`)

    document.querySelector(".form").style.display = "none";
    document.querySelector(".formseg").style.display = "none";

    let players;

    Players = [`${form.elements.plName.value}`];

    function displayLeaderboard() {
        let theExport = "";

        Players.sort((aPlayer, bPlayer) => aPlayer.score - bPlayer.score);

        Players.forEach((player) => theExport += '<tr><td>' + `${form.elements.plName.value}` + '</td><td>' + '</td></tr>');

        document.querySelector("#player").innerHTML = theExport;
    }

    displayLeaderboard();
})



document.querySelector('#reset').addEventListener('click',  () => {
    window.location.reload();
    return false;
});

const showHide1 = () => {
    let viewDiv = document.querySelector("#more1");
    if (viewDiv.style.display === "block") {
        viewDiv.style.display = 'none';
       btn1.textContent = "View"
    } else {
        viewDiv.style.display = "block";
      btn1.textContent = "Dismiss"
    }
  }
  let btn1 = document.querySelector('#btn1');
  btn1.addEventListener('click', showHide1);

  const options = {
    bottom: '64px', // default: '32px'
    right: 'unset', // default: '32px'
    left: '32px', // default: 'unset'
    time: '0.5s', // default: '0.3s'
    mixColor: '#fff', // default: '#fff'
    backgroundColor: '#fff',  // default: '#fff'
    buttonColorDark: '#100f2c',  // default: '#100f2c'
    buttonColorLight: '#fff', // default: '#fff'
    saveInCookies: false, // default: true,
    label: '🌓', // default: ''
    autoMatchOsTheme: true // default: true
  }
  
  const darkmode = new Darkmode(options);
  darkmode.showWidget();