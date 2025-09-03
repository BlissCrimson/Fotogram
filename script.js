let myMainImages = [
    "./img/aussichtlaboe.jpg",
    "./img/crimsonclouds.jpg",
    "./img/harz.jpg",
    "./img/husumerhafen.jpg",
    "./img/limmerbeinacht.jpg",
    "./img/polarlichterinnorddeutschland.jpg",
    "./img/sirbenjaminleeguiness.jpg",
    "./img/sternenhimmelübernordfriesland.jpg",
]

let myDialogImages = [
    "./img/imgdialog/aussichtlaboe.jpg",
    "./img/imgdialog/crimsonclouds.jpg",
    "./img/imgdialog/harz.jpg",
    "./img/imgdialog/husumerhafen.jpg",
    "./img/imgdialog/limmerbeinacht.jpg",
    "./img/imgdialog/polarlichterinnorddeutschland.jpg",
    "./img/imgdialog/sirbenjaminleeguiness.jpg",
    "./img/imgdialog/sternenhimmelübernordfriesland.jpg",
]

let imagesNames = [
    "Aussicht von La Boe",
    "Wolken bei Sonnenuntergang",
    "Aussicht im Harz",
    "Husumer Hafen bei Nacht",
    "Hannover von der alten Conti bei Nacht",
    "Polarlichter über Norddeutschland",
    "Sir Benjamin Lee Guiness",
    "Sternenhimmel über Nordfriesland"
]

let idImages = [
    "image1",
    "image2",
    "image3",
    "image4",
    "image5",
    "image6",
    "image7",
    "image8"
]

let imageNumber = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8"
]
// DIALOG
// DIALOG OPEN/CLOSE
let dialogRef = document.getElementById("imageDialog");
// to open dialog
function openDialog(indexDialog) {
    dialogRef.showModal();
    if (indexDialog < 0) {
        indexDialog = myDialogImages.length - 1;
    }
    if (indexDialog > myDialogImages.length - 1) {
        indexDialog = 0;
    }
    document.getElementById('footerDialog').innerHTML = `
            <button onclick="openDialog(${indexDialog - 1})" aria-label="Voriges Bild" id="arrowLeft">
                <i class="arrow arrow_left"></i>
            </button>
            <div id="imageNumber class="image_number>
                ${imageNumber[indexDialog]}/${imageNumber.length}
            </div>
            <button onclick="openDialog(${indexDialog + 1})" aria-label="nächstesd Bild" id="arrowRight">
                <i class="arrow arrow_right"></i>
            </button>
            `;
    showImage(indexDialog);
    showTitle(indexDialog);
    dialogTitle(indexDialog);
    return dialogRef.showModal(indexDialog);
}
// to close dialog
function closeDialog() {
    dialogRef.close();
}
// BODY RENDERING
function initRendering() {
    renderMainImage();
    renderDialogImage();
}
// MAIN IMG RENDERING
let imageRef = document.getElementById('main_images');
function renderMainImage() {
    imageRef.innerHTML = "";
    for (let indexImages = 0; indexImages < myMainImages.length; indexImages == indexImages++) {
        imageRef.innerHTML += getImageMain(indexImages);
    }
}

function getImageMain(indexImages) {
    return `<img    class="img_little"
                    id="${idImages[indexImages]}" 
                    aria-haspopup="dialog" aria-controls="openDialog" aria-label="Dialog Öffnen" 
                    onclick="openDialog(${indexImages})" 
                    src="${myMainImages[indexImages]}"
                    alt="${imagesNames[indexImages]}">
            `
}
// DIALOG TITLE
let titleDialogRef = document.getElementById('dialogTitle');

function showTitle(indexDialog) {
    titleDialogRef.innerHTML = "";
    titleDialogRef.innerHTML += dialogTitle(indexDialog)
}
function dialogTitle(indexDialog) {
    return `${imagesNames[indexDialog]}`
}
// DIALOG IMAGE
let imgageDialogRef = document.getElementById('dialogImage');

function renderDialogImage() {
    imgageDialogRef.innerHTML = "";
    for (let indexImages = 0; indexImages < myDialogImages.length; indexImages == indexImages++) {
        imgageDialogRef.innerHTML += getImageMain(indexImages);
    }

}

function showImage(indexDialog) {
    imgageDialogRef.innerHTML = "";
    imgageDialogRef.innerHTML += dialogImage(indexDialog);
}
function dialogImage(indexDialog) {
    return `<img    class="dialog_image"
                    aria-desribedby="${imagesNames[indexDialog]}"
                    src="${myDialogImages[indexDialog]}"
                    alt="${imagesNames[indexDialog]}">
                `
}