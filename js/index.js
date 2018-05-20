//initiate speech
    var synth = window.speechSynthesis;

//highlight the word as it's being spoken
//var currentText = speechSynthesisUtteranceInstance.text;

//speak text when press play- update with toggle
var text = document.getElementById("textToRead").innerHTML;
console.log(text);
    
    var speakText = new SpeechSynthesisUtterance(text);
    
    function playText(){
    synth.speak(speakText);
    };

    