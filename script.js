const myImages = [
    "aussichtlaboe.jpg",
    "crimsonclouds.jpg",
    "harz.jpg",
    "limmerbeinacht.jpg",
    "sirbenjaminleeguiness.jpg"];

const imagesNames = [
    "Aussicht von La Boe",
    "Wolken bei Sonnenuntergang",
    "Aussicht im Harz",
    "Hannover von der alten Conti bei Nacht",
    "Sir Benjamin Lee Guiness"
]


// DIALOG

let dialogRef = document.getElementById("imageDialog");

function openDialog() {
    dialogRef.showModal();
}

function closeDialog() {
    dialogRef.close();
}


// OVERLAY

function toggleOverlay() {
    let overlayRef = document.getElementById('')

    overlayRef.classList.remove('d_none')
}