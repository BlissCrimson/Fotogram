let myImages = [
    "aussichtlaboe.jpg",
    "crimsonclouds.jpg",
    "harz.jpg",
    "limmerbeinacht.jpg",
    "sirbenjaminleeguiness.jpg"
]

let imagesNames = [
    "Aussicht von La Boe",
    "Wolken bei Sonnenuntergang",
    "Aussicht im Harz",
    "Hannover von der alten Conti bei Nacht",
    "Sir Benjamin Lee Guiness"
]

// let myObjectImage = {
//     img1: "Aussicht von La Boe",
//     img2: "Wolken bei Sonnenuntergang",
//     img3: "Aussicht im Harz",
//     img4: "Hannover von der alten Conti bei Nacht",
//     img5: "Sir Benjamin Lee Guiness"
// }

// DIALOG

let dialogRef = document.getElementById("imageDialog");
// to open dialog
function openDialog() {
    let overlayRef = document.getElementById('overlay');
    dialogRef.showModal();
    // add overlay behind dialog
    overlayRef.classList.remove('d_none');
}
// to close dialog
function closeDialog() {
    let overlayRef = document.getElementById('overlay');
    dialogRef.close();
    // remove overlay by close dialog
    overlayRef.classList.add('d_none');
}

// DIALOG RENDERING


// let titleRef = document.getElementById("dialogTitle");

function renderDialog(myImages, imagesNames) {
    let dialogImageRef = document.getElementById('dialogTitle');
    for (let index = 0; index < myImages.length; index++) {
        dialogImageRef.innerHTML += getNoteTemplate(index);
    }
}

function getNoteTemplate(index) {
    return document.getElementById('dialogTitle').innerHTML = `<h2>
                                                                ${imagesNames[index]}
                                                              </h2>`
}


// DIALOG TITLE

let titleRef = document.getElementById('dialogTitle');

function renderTitle() {
    let temp
    temp = document.getElementsByTagName("template");


}





// DIALOG IMAGE

let imageRef = document.getElementById('dialogImage');

function renderImage(params) {
    let temp // for template
    temp = document.getElementsByTagName("template");


}

function showImage() {
    if (document.createElement("tempalte").content) {
        imageRef = document.getElementById('dialogImage').innerHTML;
    } else {
        imageRef = document.getElementById('img1');
    }

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
