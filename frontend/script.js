function sendData() {
    let Url = document.getElementById('link');
    if (Url.value) {
        window.location.href = (`https://tubesaver-lmop.onrender.com/download?link=${encodeURIComponent(Url.value)}`)
        Url.value = "";
    } else {
        console.log("Youtube Url Required")
    }

}