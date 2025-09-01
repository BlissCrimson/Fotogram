const myImages = [
    "./img/aussichtlaboe.jpg",
    "./img/crimsonclouds.jpg",
    "./img/harz.jpg",
    "./img/husumerhafen.jpg",
    "./img/limmerbeinacht.jpg",
    "./img/polarlichterinnorddeutschland.jpg",
    "./img/sirbenjaminleeguiness.jpg",
    "./img/sternenhimmelübernordfriesland.jpg",
]

const imagesNames = [
    "Aussicht von La Boe",
    "Wolken bei Sonnenuntergang",
    "Aussicht im Harz",
    "Husumer Hafen bei Nacht",
    "Hannover von der alten Conti bei Nacht",
    "Polarlichter über Norddeutschland",
    "Sir Benjamin Lee Guiness",
    "Sternenhimmel über Nordfriesland"
]

const idImages = [
    "image1",
    "image2",
    "image3",
    "image4",
    "image5",
    "image6",
    "image7",
    "image8"
]

const imageNumber = [
    "1/8",
    "2/8",
    "3/8",
    "4/8",
    "5/8",
    "6/8",
    "7/8",
    "8/8"
]
// DIALOG
// DIALOG OPEN/CLOSE
let dialogRef = document.getElementById("imageDialog");
// to open dialog
function openDialog(indexDialog) {
    dialogRef.showModal();
    if (indexDialog < 0) {
        indexDialog = myImages.length - 1;
    }
    if (indexDialog > myImages.length - 1) {
        indexDialog = 0;
    }
    document.getElementById('footerDialog').innerHTML = `
            <button onclick="openDialog(${indexDialog - 1})" aria-label="Voriges Bild" id="arrowLeft">
                <i class="arrow arrow_left"></i>
            </button>
            <div id="imageNumber class="image_number>
                ${imageNumber[indexDialog]}
            </div>
            <button onclick="openDialog(${indexDialog + 1})" aria-label="nächstesd Bild" id="arrowRight">
                <i class="arrow arrow_right"></i>
            </button>
            `;
    showImage(indexDialog);
    return dialogRef.showModal(indexDialog);
}
// to close dialog
function closeDialog() {
    dialogRef.close();
}
// MAIN RENDERING
function initRendering() {
    renderImage();
    // renderPage();
}
// MAIN IMG RENDERING
let imageRef = document.getElementById('main_images');

function renderImage() {
    imageRef.innerHTML = "";
    for (let indexImages = 0; indexImages < myImages.length; indexImages == indexImages++) {
        imageRef.innerHTML += getImageMain(indexImages);
    }
}

function getImageMain(indexImages) {
    return `<img    class="img_little"
                    id="${idImages[indexImages]}" 
                    aria-haspopup="dialog" 
                    aria-controls="imageDialog" 
                    onclick="openDialog(${indexImages})" 
                    src="${myImages[indexImages]}">
            `
}

// DIALOG IMAGE
let imgageDialogRef = document.getElementById('dialogImage');
function showImage(indexDialog) {
    imgageDialogRef.innerHTML = "";
    imgageDialogRef.innerHTML += dialogImage(indexDialog);
}
function dialogImage(indexDialog) {
    return `<img    class="dialog_image"
                    aria-haspopup="dialog" 
                    aria-controls="imageDialog" 
                    src="${myImages[indexDialog]}"
                    alt="${imagesNames[indexDialog]}">
                `
}