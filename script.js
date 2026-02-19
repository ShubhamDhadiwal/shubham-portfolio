const CODE = "M365Access";

function validate() {
    const input = document.getElementById("code").value;
    return input === CODE;
}

function openFiles() {
    if (validate()) {
        window.open("YOUR_DOWNLOAD_LINK", "_blank");
    } else {
        alert("Invalid code");
    }
}

function uploadFiles() {
    if (validate()) {
        window.open("YOUR_UPLOAD_LINK", "_blank");
    } else {
        alert("Invalid code");
    }
}
