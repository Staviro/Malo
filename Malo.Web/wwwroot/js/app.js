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
                    if (data.statusCode == 200) {
                        try {
                            var file = document.createElement('a');
                            file.download = "MaloJsV" + version + ".zip";
                            file.href = data.url;
                            file.click();
                            file.remove();
                        } catch (e) {
                            alert('Something went wrong.');
                        }

                    } else {
                        alert(data.message);
                    }

                } else {
                    alert('Request failed');
                }
            }
        }
    },
    onDocumentationPage() {
        if (window.location.href.includes("/documentation")) {
            document.querySelector('.sidemenu-item-header.frames').click();
        }
    }
}