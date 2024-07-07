function sendData() {
    let Url = document.getElementById('link');
    if (Url.value) {
        window.location.href = (`http://localhost:5173/download?link=${encodeURIComponent(Url.value)}`)
        Url.value = "";
    } else {
        console.log("Youtube Url Required")
    }

}