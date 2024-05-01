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

        const scrollThreshold = 1500;

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


/* FUNÇÃO PROJETOS DIV QUE SE ABRE */


const primeiradiv = document.getElementById("primeiradiv");
const segundadiv = document.getElementById("segundadiv");
const button5 = document.getElementById("button");
const pai = document.getElementById("pai");




primeiradiv.addEventListener('mouseover', function () {
    segundadiv.style.top = "0px";
    segundadiv.style.opacity = "1";
});


segundadiv.addEventListener('mouseover', function () {
    segundadiv.style.top = "0px";
    segundadiv.style.opacity = "1";
});

segundadiv.addEventListener('mouseout', function () {
    segundadiv.style.top = "-25%";
    segundadiv.style.opacity = "0";
});


primeiradiv.addEventListener('mouseout', function () {
    segundadiv.style.top = "-25%";
    segundadiv.style.opacity = "1";
});

pai.addEventListener('mouseover', function () {
    button5.style.transform = "scale(1.3)";
    button5.style.transition = "all 2s ease-in-out";
    button5.style.backgroundColor = "#24abfa";
});

pai.addEventListener('mouseout', function () {
    button5.style.transition = "none";
    button5.style.transform = "none";
    button5.style.backgroundColor = "transparent";
});


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
