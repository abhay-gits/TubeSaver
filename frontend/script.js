function sendData() {
    let Url = document.getElementById('link').value;
    if (Url) {
        window.location.href = (`http://localhost:5173/download?link=${encodeURIComponent(Url)}`)
    } else {
        console.log("Youtube Url Required")
    }
}