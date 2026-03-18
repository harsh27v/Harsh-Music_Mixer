console.log("JavaScript File is linked");

const targetZones = document.querySelectorAll(".target-zone");
const dragItems = document.querySelectorAll(".drag-item");
const theAudioEl = document.querySelector('audio');
const playButton = document.querySelector('#play-all');
const pauseButton = document.querySelector('#pause-all');
const stopButton = document.querySelector('#stop-all');
const resetButton = document.querySelector('#reset-all');

let currentDraggedElement = null;

function dragStart() {
  currentDraggedElement = this;
}

function dragOver(e) {
  e.preventDefault();
}

function drop(e) {
  e.preventDefault();

  currentDraggedElement.classList.add('hidden');

  const characterimg = document.createElement('img');
  characterimg.src = `images/${currentDraggedElement.dataset.instrument}.jpg`

  // Add the image to the target zone
  this.appendChild(characterimg);

  //create audio element
  //set src attribute dynamically
  //load audio
  //append audio
  //loop audio
  //play audio
  currentDraggedElement = null;
}

// load the new audio source
function loadAudio(querySelectorAll) {
   console.log("Load Audio Called")
   theAudioEl.src = `audio/${this.dataset.trackref}.mp3`;
   theAudioEl.load();   
   //call another function
   playAudio();
}

function playAudio() {
   theAudioEl.play();
}

function pauseAudio() {
    theAudioEl.pause();
}

function restartAudio() {
    theAudioEl.restart();
}

//add function for playAll
//select all audio elements using querySelector
//run for each loop to play audio


//add function for stopAll
//select all audio elements using querySelector
//run for each loop to stop audio

//function resetMixer() {
  //  dragItems.forEach(dragItem => {
    //    dragItem.appendChild(dragItem);
  //  });
//}

dragItems.forEach(dragItem => {
  dragItem.addEventListener('dragstart', dragStart);
});

targetZones.forEach(zone => {
  zone.addEventListener('dragover', dragOver);
  zone.addEventListener('drop', drop);
});

playButton.addEventListener("click", playAudio);
pauseButton.addEventListener("click", pauseAudio);
stopButton.addEventListener("click", restartAudio);

//Add event listener for play button
//Add event listener for stop button

//resetButton.addEventListener('click', resetMixer);