var app = {
    download(version) {
        var req = new XMLHttpRequest();
        var url = "/Download/" + version;
        req.open("GET", url);
        req.send();

        req.onreadystatechange = function () {
            if (req.readyState == XMLHttpRequest.DONE) {
                if (req.status == 200) {
                    var data = JSON.parse(req.responseText);
                    console.log(data);
                    if (data.statusCode == 200) {
                        var file = document.createElement('a');
                        file.download = "MaloJsV" + version + ".zip";
                        file.href = data.url;
                        file.click();
                        file.remove();
                    } else {
                        alert(data.message);
                    }

                } else {
                    alert('Request failed');
                }
            }
        }
    }
}