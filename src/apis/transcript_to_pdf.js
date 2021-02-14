function downloadString(text) {
    var blob = new Blob([text], { type: fileType });
    var a = document.createElement('a');
    a.download = "audiotranscript.txt";
    a.href = URL.createObjectURL(blob);
    a.dataset.downloadurl = ["text", a.download, a.href].join(':');
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(function() { URL.revokeObjectURL(a.href); }, 1500);
};

