console.warn("Code Clause Internship project no. 2")
console.log("Face Detection")


const video = document.getElementById('video');

const startVideo = () =>{
    navigator.getUserMedia(
        {video : {}},
        stream => video.srcObject = stream, 
        err => console.error(err)
    )
}

startVideo()