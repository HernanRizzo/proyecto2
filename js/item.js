let pressedKey = location.search;
let pressedCode = new URLSearchParams(pressedKey);
let selectedCode = pressedCode.get('code');
let userChoice = selectedCode-1;

const showCode = document.getElementById("code");
showCode.innerHTML = `Código: ${selectedCode}`;

fetch('./files/catalogue.json')
.then((response) => {
    return response.json()
})
.then((catalogue) => {
    localStorage.clear;
    localStorage.setItem("code", catalogue[userChoice].code);
    localStorage.setItem("name", catalogue[userChoice].name);
    localStorage.setItem("brief", catalogue[userChoice].brief);
    localStorage.setItem("image", catalogue[userChoice].image);
    localStorage.setItem("info", catalogue[userChoice].info);
    localStorage.setItem("price", catalogue[userChoice].price);

    const vName = localStorage.getItem("name");
    const showName = document.getElementById("name");
    showName.innerHTML = `${vName}`;

    const vBrief = localStorage.getItem("brief");
    const showBrief = document.getElementById("brief");
    showBrief.innerHTML = `${vBrief}`;

    const vImg = localStorage.getItem("image");
    const showImg = document.getElementById("infoCover");
    showImg.innerHTML = `<img id="image" class="cardImage" src="${vImg}" alt="${vName}">`;

    const vInfo = localStorage.getItem("info");
    const showInfo = document.getElementById("info");
    showInfo.innerHTML = `${vInfo}`;

    const vPrice = localStorage.getItem("price");
    const showPrice = document.getElementById("price");
    showPrice.innerHTML = `ARS ${vPrice}`;
})