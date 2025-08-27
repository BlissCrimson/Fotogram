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


// DIALOG

// DIALOG HEADER

// DIALOG OPEN/CLOSE
let dialogRef = document.getElementById("imageDialog");
// to open dialog
function openDialog() {
    let overlayRef = document.getElementById('overlay');
    dialogRef.showModal();
    // add overlay behind dialog
    // dialog.innerHTML = <img src="${myImages[index]}">
    overlayRef.classList.remove('d_none');
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
    renderTitle();
    renderImage();
}

// MAIN IMG RENDERING
let imageRef = document.getElementById('main_images');

function renderImage() {
    imageRef.innerHTML = "";
    for (let index = 0; index < myImages.length; index == index++) {
        imageRef.innerHTML += `<img class="img_little" aria-haspopup="dialog" aria-controls="imageDialog" onclick="openDialog()" src="${myImages[index]}">`
    }
}


// DIALOG

// DIALOG RENDERING

function renderDialog() {
    renderTitle();
    showImage();
}

// DIALOG TITLE

let titleRef = document.getElementById('dialogTitle');

function renderTitle() {
    titleRef.innerHTML = "";
    for (let index = 0; index < imagesNames.length; index == index++) {
        titleRef.innerHTML += `${imagesNames[index]}`
        
    }

}


// DIALOG IMAGE

function showImage() {
    
    for (let index = 0; index < myImages.length; index++) {
        imageRef.innerHTML = `${myImages[index]}`
        return imageRef.innerHTML = `<img class="dialog_image" onclick="openDialog(${index})" src="${myImages[index]}">`
    }
    
    // if (document.createElement("template").content) {
    //     imageRef = document.getElementById('dialogImage').innerHTML;
    // } else {
    //     imageRef = document.getElementById('img1');
    // }

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
