const START_RECORDING_KEY ='1'

document.addEventListener("keypress", shouldStartRecord)
document.addEventListener("keypress", playSoundOnKeyPress)

function shouldStartRecord(event) {
    if(event.key === START_RECORDING_KEY) {

    }
}

function playSoundOnKeyPress(event) {

    if (event.key === START_RECORDING_KEY) {
        return
    }
    
    console.log(event);
    const key = event.key
    const audioId = 'clap'
    playSound(audioId)
    
}

function playSound(sound) {
    const audioTag = document.querySelector('#'+ sound)
    audioTag.currentTime = 0
    audioTag.play()
}

//Date.now()