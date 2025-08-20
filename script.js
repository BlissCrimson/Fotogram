const myImages = [
    "aussichtlaboe.jpg",
    "crimsonclouds.jpg",
    "harz.jpg",
    "limmerbeinacht.jpg",
    "sirbenjaminleeguiness.jpg"
]

const imagesNames = [
    "Aussicht von La Boe",
    "Wolken bei Sonnenuntergang",
    "Aussicht im Harz",
    "Hannover von der alten Conti bei Nacht",
    "Sir Benjamin Lee Guiness"
]

const myObjectImage = {
    img1: "Aussicht von La Boe",
    img2: "Wolken bei Sonnenuntergang",
    img3: "Aussicht im Harz",
    img4: "Hannover von der alten Conti bei Nacht",
    img5: "Sir Benjamin Lee Guiness"
}

// DIALOG

let dialogRef = document.getElementById("imageDialog");

function openDialog() {
    dialogRef.showModal();
}

function closeDialog() {
    dialogRef.close();
}

// DIALOG RENDERING



// DIALOG IMAGE



// DIALOG FOOTER

document.getElementById("arrowLeft").addEventListener("click", back);
document.getElementById("arrowRight").addEventListener("click", foward);

function back() {

    console.log("du drückst zurück");

}

function foward() {
    console.log("du drückst weiter");

}


// OVERLAY

function toggleOverlay() {
    let overlayRef = document.getElementById('')

    overlayRef.classList.remove('d_none')
}