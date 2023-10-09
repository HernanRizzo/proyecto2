const   cardWrapper = document.querySelector('#cardWrapper'),
        cardCover = document.querySelectorAll('.cardCover'),
        cardCover1 = document.querySelector('#cardCover1'),
        cardCover2 = document.querySelector('#cardCover2'),
        cardCover3 = document.querySelector('#cardCover3'),
        cardCover4 = document.querySelector('#cardCover4'),
        cardCover5 = document.querySelector('#cardCover5'),
        cardCover6 = document.querySelector('#cardCover6'),
        cardCover7 = document.querySelector('#cardCover7'),
        cardDetail = document.querySelectorAll('.cardDetail'),
        cardDetail1 = document.querySelector('#cardDetail1'),
        cardDetail2 = document.querySelector('#cardDetail2'),
        cardDetail3 = document.querySelector('#cardDetail3'),
        cardDetail4 = document.querySelector('#cardDetail4'),
        cardDetail5 = document.querySelector('#cardDetail5'),
        cardDetail6 = document.querySelector('#cardDetail6'),
        cardDetail7 = document.querySelector('#cardDetail7'),
        cardBack = document.querySelectorAll('.cardBack'),
        btnLeft = document.querySelector('.btnLeft'),
        btnRight = document.querySelector('.btnRight');

btnLeft.addEventListener("click", moveLeft);
btnRight.addEventListener("click", moveRight);

fetch('./files/catalogue.json')
.then((response) => {
    return response.json()
})
.then((catalogue) => {
    cardCover1.innerHTML = `
        <img class="cardImage" src="${catalogue[0].image}" alt="${catalogue[0].name}">
        <h2>${catalogue[0].name}</h2>
    `
    cardDetail1.innerHTML = `
        <p>${catalogue[0].brief}</p>
        <a class="btnLink" type="button" href="./item.html?code=${catalogue[0].code}">Más detalles</a>
    `
    cardCover2.innerHTML = `
        <img class="cardImage" src="${catalogue[1].image}" alt="${catalogue[1].name}">
        <h2>${catalogue[1].name}</h2>
    `
    cardDetail2.innerHTML = `
        <p>${catalogue[1].brief}</p>
        <a class="btnLink" type="button" href="./item.html?code=${catalogue[1].code}">Más detalles</a>
    `
    cardCover3.innerHTML = `
        <img class="cardImage" src="${catalogue[2].image}" alt="${catalogue[2].name}">
        <h2>${catalogue[2].name}</h2>
    `
    cardDetail3.innerHTML = `
        <p>${catalogue[2].brief}</p>
        <a class="btnLink" type="button" href="./item.html?code=${catalogue[2].code}">Más detalles</a>
    `
    cardCover4.innerHTML = `
        <img class="cardImage" src="${catalogue[3].image}" alt="${catalogue[3].name}">
        <h2>${catalogue[3].name}</h2>
    `
    cardDetail4.innerHTML = `
        <p>${catalogue[3].brief}</p>
        <a class="btnLink" type="button" href="./item.html?code=${catalogue[3].code}">Más detalles</a>
    `
    cardCover5.innerHTML = `
        <img class="cardImage" src="${catalogue[4].image}" alt="${catalogue[4].name}">
        <h2>${catalogue[4].name}</h2>
    `
    cardDetail5.innerHTML = `
        <p>${catalogue[4].brief}</p>
        <a class="btnLink" type="button" href="./item.html?code=${catalogue[4].code}">Más detalles</a>
    `
    cardCover6.innerHTML = `
        <img class="cardImage" src="${catalogue[5].image}" alt="${catalogue[5].name}">
        <h2>${catalogue[5].name}</h2>
    `
    cardDetail6.innerHTML = `
        <p>${catalogue[5].brief}</p>
        <a class="btnLink" type="button" href="./item.html?code=${catalogue[5].code}">Más detalles</a>
    `
    cardCover7.innerHTML = `
        <img class="cardImage" src="${catalogue[6].image}" alt="${catalogue[6].name}">
        <h2>${catalogue[6].name}</h2>
    `
    cardDetail7.innerHTML = `
        <p>${catalogue[6].brief}</p>
        <a class="btnLink" type="button" href="./item.html?code=${catalogue[6].code}">Más detalles</a>
    `
    cardCover8.innerHTML = `
    <img class="cardImage" src="${catalogue[7].image}" alt="${catalogue[7].name}">
    <h2>${catalogue[7].name}</h2>
    `
    cardDetail8.innerHTML = `
        <p>${catalogue[7].brief}</p>
        <a class="btnLink" type="button" href="./item.html?code=${catalogue[7].code}">Más detalles</a>
    `
})
.catch((error) => {
    console.log('Ha ocurrido un error: ' + error)
})

for (let i = 0; i < cardCover.length; i++) {
    cardCover[i].addEventListener("click", function() {
        cardCover[i].classList.toggle('opened1');
        cardDetail[i].classList.toggle('opened2');
        cardBack[i].classList.toggle('opened3');
    });
}

for (let i = 0; i < cardDetail.length; i++) {
    cardDetail[i].addEventListener("click", function() {
        cardCover[i].classList.toggle('opened1');
        cardDetail[i].classList.toggle('opened2');
        cardBack[i].classList.toggle('opened3');
    });
}

for (let i = 0; i < cardBack.length; i++) {
    cardBack[i].addEventListener("click", function() {
        cardCover[i].classList.toggle('opened1');
        cardDetail[i].classList.toggle('opened2');
        cardBack[i].classList.toggle('opened3');
    });
}

/*
setInterval(() => {
    moveRight()
}, 3000);
*/

let card = document.querySelectorAll('#card');
let cardLast = card[card.length -1];
cardWrapper.insertAdjacentElement('afterbegin', cardLast);

function moveRight() {
    let cardFirst = document.querySelectorAll('#card')[0];
    cardWrapper.style.marginLeft = "-200%";
    cardWrapper.style.transition = "all 0.5s";
    setTimeout(function() {
        cardWrapper.style.transition = "none";
        cardWrapper.insertAdjacentElement('beforeend', cardFirst);
        cardWrapper.style.marginLeft = "-100%";
    }, 500);
}

function moveLeft() {
    let card = document.querySelectorAll('#card');
    let cardLast = card[card.length -1];
    cardWrapper.style.marginLeft = "0%";
    cardWrapper.style.transition = "all 0.5s";
    setTimeout(function() {
        cardWrapper.style.transition = "none";
        cardWrapper.insertAdjacentElement('afterbegin', cardLast);
        cardWrapper.style.marginLeft = "-100%";
    }, 500);
}