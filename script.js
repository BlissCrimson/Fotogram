const myMainImages = [
    "./img/aussichtlaboe.jpg",
    "./img/crimsonclouds.jpg",
    "./img/harz.jpg",
    "./img/husumerhafen.jpg",
    "./img/limmerbeinacht.jpg",
    "./img/polarlichterinnorddeutschland.jpg",
    "./img/sirbenjaminleeguiness.jpg",
    "./img/sternenhimmelübernordfriesland.jpg",
]

const myDialogImages = [
    "./img/imgdialog/aussichtlaboe.jpg",
    "./img/imgdialog/crimsonclouds.jpg",
    "./img/imgdialog/harz.jpg",
    "./img/imgdialog/husumerhafen.jpg",
    "./img/imgdialog/limmerbeinacht.jpg",
    "./img/imgdialog/polarlichterinnorddeutschland.jpg",
    "./img/imgdialog/sirbenjaminleeguiness.jpg",
    "./img/imgdialog/sternenhimmelübernordfriesland.jpg",
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
                    aria-haspopup="dialog" 
                    aria-controls="imageDialog" 
                    onclick="openDialog(${indexImages})" 
                    src="${myMainImages[indexImages]}">
            `
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
                    aria-haspopup="dialog" 
                    aria-controls="imageDialog" 
                    src="${myDialogImages[indexDialog]}"
                    alt="${imagesNames[indexDialog]}">
                `
}