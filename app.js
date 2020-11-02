function onload() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "1.jpeg");
    xhr.responseType = "arraybuffer";
 
    xhr.onload = function(error) {
        var blob = new Blob([xhr.response]);
         console.log(blob);
        var blobUrl = URL.createObjectURL(blob);
        console.log("",+"Huhuhu"+blobUrl);
        document.getElementById("image").src = blobUrl;
    }
    xhr.send();
}