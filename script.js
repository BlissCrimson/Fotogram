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

// const indexDialog = [
//     "openDialog(0)",
//     "openDialog(1)",
//     "openDialog(2)",
//     "openDialog(3)",
//     "openDialog(4)",
//     "openDialog(5)",
//     "openDialog(6)",
//     "openDialog(7)"
// ]

// DIALOG

// DIALOG OPEN/CLOSE
let dialogRef = document.getElementById("imageDialog");
// to open dialog
function openDialog(indexDialog) {
    let overlayRef = document.getElementById('overlay');
    dialogRef.showModal();
    // add overlay behind dialog
    // dialog.innerHTML = `<img src="${myImages[idImages]}">`
    // overlayRef.classList.remove('d_none');
    // if (indexDialog < 0) {
    //     indexDialog = myImages.length - 1;

    // }

    // if (indexDialog > myImages.length - 1) {
    //     indexDialog = 0;

    // }
    showImage(indexDialog);
}

// to close dialog
function closeDialog() {
    let overlayRef = document.getElementById('overlay');
    dialogRef.close();
    // remove overlay by close dialog
    overlayRef.classList.add('d_none');
}

// MAIN RENDERING

function initRendering() {
    renderImage();
    // showImage();
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

// EventListener
// DIALOG
// let img = document.createElement("img");
// // img.src = myImages[idImages];
// // img.alt = imagesNames[idImages];
// img.addEventListener("click", () => openDialog());
// DIALOG FOOTER
document.getElementById("arrowLeft").addEventListener("click", back);
document.getElementById("arrowRight").addEventListener("click", foward);

function back(indexDialog) {
    if (indexDialog < 0) {
        indexDialog = myImages.length - 1;
        indexDialog - 1;
    }


    console.log("du drückst zurück");

}

function foward(indexDialog) {
    if (indexDialog > myImages.length - 1) {
        indexDialog = 0;

    }

    console.log("du drückst weiter");
}
