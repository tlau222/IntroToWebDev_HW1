
function playAudio(sound){
    var audio = new Audio(sound);
    audio.play()
}

document.getElementById("w").addEventListener("click", function() {
    playAudio("sounds/tom-1.mp3")
})

document.getElementById("a").addEventListener("click", function() {
    playAudio("sounds/tom-2.mp3")
})

document.getElementById("s").addEventListener("click", function() {
    playAudio("sounds/tom-3.mp3")
})

document.getElementById("d").addEventListener("click", function() {
    playAudio("sounds/tom-4.mp3")
})

document.getElementById("j").addEventListener("click", function() {
    playAudio("sounds/snare.mp3")
})

document.getElementById("k").addEventListener("click", function() {
    playAudio("sounds/crash.mp3")
})

document.getElementById("l").addEventListener("click", function() {
    playAudio("sounds/kick-bass.mp3")
})
