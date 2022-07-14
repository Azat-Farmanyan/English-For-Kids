function errorAudio() {
  const errorAudioLink = "../../assets/audio/error.mp3";
  const audio = new Audio(errorAudioLink);
  audio.play();
}
function successAudio() {
  const errorAudio = "../../assets/audio/success-tadam.mp3";
  const audio = new Audio(errorAudio);
  audio.play();
}
function gameOverAudio() {
  const errorAudio = "../../assets/audio/game-over.mp3";
  const audio = new Audio(errorAudio);
  audio.play();
}
function gameEndingAudio() {
  const errorAudio = "../../assets/audio/game-ending-sound-effect.mp3";
  const audio = new Audio(errorAudio);
  audio.play();
}
function play(currentCardAudioLink) {
  const audio = new Audio(currentCardAudioLink);
  audio.play();
}
