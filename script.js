class Instrument {
    constructor(n, audio, doThis){
        this.n = n;
        this.audio = audio;
        this.doThis = doThis;
    };

    sound(n) {
        for (let i=0; i<n.length;i++){
            const start = (key) => {
                if (key.keyCode == this.n[i]) {
                    new Audio(this.audio[i]).play();
                    this.doThis(i)
                };
            };
            window.addEventListener("keydown", start, false);
        };
    };

}

const drumsSounds = {
    snare:"https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/snare.wav",
    kick: "https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/kick.wav",
    highTom: "https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/tom-high.wav",
    midTom: "https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/tom-mid.wav",
    lowTom: "https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/tom-low.wav",
    crash: "https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/crash.wav",
    ride: "https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/ride.wav",
    hihatOpen: "https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/hihat-open.wav",
    hihatClose:"https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/hihat-close.wav"
}

const drumsKey = ["74","66","72","71","70","69","82","73","75"]
const getDrumsSound = [drumsSounds.snare, drumsSounds.kick, drumsSounds.highTom, drumsSounds.midTom, drumsSounds.lowTom, drumsSounds.crash, drumsSounds.ride, drumsSounds.hihatOpen, drumsSounds.hihatClose]

const transition = (x) => {
    const keyDivs = ["btn1", "btn2", "btn3", "btn4", "btn5", "btn6", "btn7", "btn8", "btn9"];

    const getkeyDivs = document.getElementById(keyDivs[x]);

    getkeyDivs.style.transform= "scale(1.12)";

    setTimeout(()=>{
        getkeyDivs.style.transform= "scale(1)";
    },42)
}

const drums = new Instrument (drumsKey, getDrumsSound, transition)

drums.sound(drumsKey)

