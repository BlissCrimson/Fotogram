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

// DIALOG

// DIALOG OPEN/CLOSE
let dialogRef = document.getElementById("imageDialog");
// to open dialog
function openDialog() {
    let overlayRef = document.getElementById('overlay');
    dialogRef.showModal();
    // add overlay behind dialog
    // dialog.innerHTML = <img src="${myImages[index]}">
    overlayRef.classList.remove('d_none');
    showImage();
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
    showImage();
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



// DIALOG
// DIALOG RENDERING


// // DIALOG TITLE
// let titleRef = document.getElementById('dialogTitle');
// function renderTitle() {
//     titleRef.innerHTML = "";
//     for (let index = 0; index < imagesNames.length; index == index++) {
//         titleRef.innerHTML += `${imagesNames[index]}`
// console.log(titleRef);
//     }
// }

// DIALOG IMAGE

let imageDialogRef = document.getElementById('dialogImage');

function showImage(indexImages) {
    return `<img    class="dialog_image"
                    id="dialogImage"
                    aria-haspopup="dialog" 
                    aria-controls="imageDialog" 
                    src="${myImages[indexImages]}">
            `
}

// DIALOG FOOTER

document.getElementById("arrowLeft").addEventListener("click", back);
document.getElementById("arrowRight").addEventListener("click", foward);

function back() {
    console.log("du drückst zurück");
}

function foward() {
    console.log("du drückst weiter");
}
