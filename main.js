// Event Listeners for playing sounds based on the keyCode \\
// I added multiple so I could fire more than one at a time

window.addEventListener('keydown', function(e) {

  const audio = document.querySelector(`audio[data-key='${e.keyCode}']`)

  if (!audio) {
    return
  }

  audio.play()

})

window.addEventListener('keydown', function(f) {

  const audio1 = document.querySelector(`audio[data-key='${f.keyCode}']`)

  if (!audio1) {
    return
  }

  audio1.play()

})

window.addEventListener('keydown', function(g) {

  const audio2 = document.querySelector(`audio[data-key='${g.keyCode}']`)

  if (!audio2) {
    return
  }

  audio2.play()

})

window.addEventListener('keydown', function(h) {

  const audio3 = document.querySelector(`audio[data-key='${h.keyCode}']`)
  console.log(audio3);
  if (!audio3) {
    return
  }

  audio3.play()

})
console.log($);

window.addEventListener('keydown',function(e){

    var keyWhichWasPressed = document.querySelector(`audio[data-key='${e.keyCode}']`)
    console.log(keyWhichWasPressed);
    keyWhichWasPressed.parentNode.addClass('.pressed')

});
