console.log('picture in picture');

const videoElement = document.getElementById('video');
const button = document.getElementById('button');


// Prompt user to select video source and pass it to video element

async function selectMediaStream(){
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadeddata = ()=>{
            videoElement.onplay();
        }
    } catch(error) {
        console.log('error here ', error)

    }
}

button.addEventListener('click', async ()=>{
    // Disable button
    button.disabled = true;
    // start PIP
    await videoElement.requestPictureInPicture();
    videoElement.hidden =true;
    button.disabled = false;
});

//  On page load;
selectMediaStream();