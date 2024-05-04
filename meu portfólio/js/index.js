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

/* CAIXA 1 */

const projectsServices = document.getElementById("projetos");
const projectsInformation = document.getElementById("projects-information");
const button1 = document.getElementById("button1");
const divProjects = document.getElementById("div-projects");



projectsServices.addEventListener('mouseover', function () {
    projectsInformation.style.top = "0px";
    projectsInformation.style.opacity = "1";
});


projectsInformation.addEventListener('mouseover', function () {
    projectsInformation.style.top = "0px";
    projectsInformation.style.opacity = "1";
});

divProjects.addEventListener('mouseover', function () {
    button1.style.transform = "scale(1.3)";
    button1.style.transition = "all 2s ease-in-out";
    button1.style.backgroundColor = "#24abfa";
});

projectsInformation.addEventListener('mouseout', function () {
    projectsInformation.style.top = "-25%";
    projectsInformation.style.opacity = "0";
});


projectsServices.addEventListener('mouseout', function () {
    projectsInformation.style.top = "-25%";
    projectsInformation.style.opacity = "1";
});


divProjects.addEventListener('mouseout', function () {
    button1.style.transition = "none";
    button1.style.transform = "none";
    button1.style.backgroundColor = "transparent";
});


/* CAIXA 2 */


const projectsServicesSite = document.getElementById("projetos");
const projectsInformationSite = document.getElementById("projects-information-site");
const button2 = document.getElementById("button2");
const divProjectsSite = document.getElementById("div-projects-site");


projectsServicesSite.addEventListener('mouseover', function () {
    projectsInformationSite.style.top = "0px";
    projectsInformationSite.style.opacity = "1";
});


projectsInformationSite.addEventListener('mouseover', function () {
    projectsInformationSite.style.top = "0px";
    projectsInformationSite.style.opacity = "1";
});

divProjectsSite.addEventListener('mouseover', function () {
    button2.style.transform = "scale(1.3)";
    button2.style.transition = "all 2s ease-in-out";
    button2.style.backgroundColor = "#24abfa";
});

projectsInformationSite.addEventListener('mouseout', function () {
    projectsInformationSite.style.top = "-25%";
    projectsInformationSite.style.opacity = "0";
});


projectsServicesSite.addEventListener('mouseout', function () {
    projectsInformationSite.style.top = "-25%";
    projectsInformationSite.style.opacity = "1";
});

divProjectsSite.addEventListener('mouseout', function () {
    button2.style.transition = "none";
    button2.style.transform = "none";
    button2.style.backgroundColor = "transparent";
});


/* SCROLL 1 */

const myObserver = new IntersectionObserver((entries) => {
    entries.forEach( (entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})

const elements1 = document.querySelectorAll('.hidden')

elements1.forEach((element) => myObserver.observe(element))


/* VOLTAR AO TOPO */

const voltar = document.getElementById("to-go-back");

    window.addEventListener("scroll", function () {
        const scrollTop = document.documentElement.scrollTop;

        if (scrollTop > 1000) {
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












/* RESPONSIVIDADE */

/* MENU HAMBURGUER */

/* PROJETO MARIO BROS */

/* PROJETO BARBEARIA */