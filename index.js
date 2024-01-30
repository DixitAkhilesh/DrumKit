var a1 = new Audio('./sounds/tom-1.mp3');
var a2 = new Audio('./sounds/tom-2.mp3');
var a3 = new Audio('./sounds/tom-3.mp3');
var a4 = new Audio('./sounds/tom-4.mp3');
var a5 = new Audio('./sounds/snare.mp3');
var a6 = new Audio('./sounds/crash.mp3');
var a7 = new Audio('./sounds/kick-bass.mp3');

var a = [a1,a2,a3,a4,a5,a6,a7];

var numberOfButtons = document.querySelectorAll(".drum").length;
console.log(numberOfButtons);

for (var i = 0; i < numberOfButtons; i++) {
    // Use a function to create a closure and pass the current value of i
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        playAudio(this.innerHTML);
        buttonAnimation(this.innerHTML);
    });
}

addEventListener('keydown', function(event){
        
    playAudio(event.key);
    buttonAnimation(event.key);

})

function playAudio(pressed){
    switch (pressed) {
        case 'w':
            a1.play();
            console.log(this.innerHTML);
            break;

        case 'a':
            a2.play();
            break;

        case 's':
            a3.play();
            break;
            
        case 'd':
            a4.play();
            break;
            
        case 'j':
            a5.play();
            break;
                
        case 'k':
            a6.play();
            break;
            
        case 'l':
            a7.play();
            break;
        
        default:
            break;
    }
}


function buttonAnimation(currentKey) {
    var currentButton = document.querySelector('.' + currentKey);
    console.log(currentButton.classList);
    currentButton.classList.add('pressed');
    console.log(currentButton.classList);
    setTimeout(function() {
        currentButton.classList.remove('pressed')
    }, 200)
}