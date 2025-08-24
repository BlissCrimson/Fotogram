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

function openDialog() {
    let overlayRef = document.getElementById('overlay');
    dialogRef.showModal();
    overlayRef.classList.remove('d_none');
}

function closeDialog() {
    let overlayRef = document.getElementById('overlay');
    dialogRef.close();
    overlayRef.classList.add('d_none');
}

// DIALOG RENDERING


// let titleRef = document.getElementById("dialogTitle");

function render(myImages, imagesNames) {
    let dialogImageRef = document.getElementById('dialogImage');
    for (let index = 0; index < myImages.length; index++) {
        dialogImageRef.innerHTML += getNoteTemplate(index);
    }
}

function getNoteTemplate(index) {
    return ` <div>
                <h2>
                    ${imagesNames[index]}
                </h2>
                <img>
                    ${myImages[index]}
                </img>
            </div>`
}


// DIALOG TITLE



function renderTitle(myImages, imagesNames) {
    // let titleRef = document.getElementById("dialogTitle");
    // titleRef.innerHTML = "";

    // for (let indexImgTitle = 0; indexImgTitle < imagesNames.length; indexImgTitle++) {
    //     imagesNames == [indexImgTitle];
    //     titleRef.innerHTML += "Test"

    // }


}


// DIALOG IMAGE

function imageRender() {

}


// DIALOG FOOTER

// document.getElementById("arrowLeft").addEventListener("click", back);
// document.getElementById("arrowRight").addEventListener("click", foward);

// function back() {

//     console.log("du drückst zurück");

// }

// function foward() {
//     console.log("du drückst weiter");

// }


// OVERLAY

function openOverlay() {
    let overlayRef = document.getElementById('overlay')

    overlayRef.classList.remove('d_none')

    return `<img src="./img/aussichtlaboe.jpg">
                `
}

function closeOverlay() {
    let overlayRef = document.getElementById('overlay')

    overlayRef.classList.add('d_none')
}