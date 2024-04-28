/* FUNÇÃO MENU HAMBURGUER */


const button = document.getElementById("button-burger-menu");


button.addEventListener('click', function () {
    button.classList.toggle("active")
});

/* FUNÇÃO MUDA COR DO MENU */

document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");

    window.addEventListener("scroll", function () {
        const scrollPosition = window.scrollY;

        const scrollThreshold = 1200;

        if (scrollPosition > scrollThreshold) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
});


/* FUNÇÃO TEXTO DIGITANDO */

const interval = 80;

const phrasesH1 = [
    "Olá eu sou",
];

const phrasesH2 = [
    "Rocha Santos :)",
];

const phrasesH3 = [
    "Desenvolvedor Front-end",
    "Habilidades",
    "Html, Css, Javascript, React",
    "Bootstrap, Git, Sass, Typescript",
];

const elements = {
    h1: document.querySelector("h1"),
    h2: document.querySelector("h2"),
    h3: document.querySelector("h3"),
};

function showText(element, phrases, interval, index = 0) {
    const char = phrases[index].split("").reverse();

    const typer = setInterval(() => {
        if (!char.length) {
            clearInterval(typer);

            if (element.tagName.toLowerCase() !== 'h1' && element.tagName.toLowerCase() !== 'h2') {
                setTimeout(() => {
                    element.innerHTML = "";
                    const nextIndex = (index + 1) % phrases.length;
                    showText(element, phrases, interval, nextIndex);
                }, 800);
            }
        } else {
            const next = char.pop();
            element.innerHTML += next;
        }
    }, interval);
}

showText(elements.h1, phrasesH1, interval);

setTimeout(() => {
    showText(elements.h2, phrasesH2, interval);
}, 1000);

setTimeout(() => {
    showText(elements.h3, phrasesH3, interval);
}, 2500);


/* VOLTAR AO TOPO */

const voltar = document.getElementById("back-arrow-bar");

    window.addEventListener("scroll", function () {
        const scrollTop = document.documentElement.scrollTop;

        if (scrollTop > 1800) {
            voltar.style.display = "block";
        } else {
            voltar.style.display = "none";
        }
    });

    voltar.addEventListener("click", function (e) {
        e.preventDefault();

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });
