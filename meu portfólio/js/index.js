/* FUNÇÃO DO MENU HAMBURGUER */


const button = document.getElementById("button");


button.addEventListener('click', function () {
    button.classList.toggle("active")
});


/* FUNÇÃO MUDA COR DO MENU */

document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");

    window.addEventListener("scroll", function () {
        const scrollPosition = window.scrollY;

        const scrollThreshold = 1400;

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


/* FUNÇÃO DIV PROJETOS */


document.addEventListener('DOMContentLoaded', function () {
    const meuElemento1 = document.getElementById('sectiondiv18');
    const meuElemento = document.getElementById('sectiondiv13');

    meuElemento1.addEventListener('mouseover', function () {
        const moveBox1 = document.querySelector('#sectiondiv22');
        moveBox1.style.top = "0px";
        moveBox1.style.opacity = "1";

        document.getElementById("sectiondiv20").textContent = "";

        const images = document.querySelectorAll('#sectiondiv21 img');
        images.forEach(image => {
            image.style.opacity = '0';
        });
    });

    meuElemento1.addEventListener('mouseout', function () {
        const moveBox1 = document.querySelector('#sectiondiv22');
        moveBox1.style.top = "-8%";
        moveBox1.style.opacity = "0";

        document.getElementById("sectiondiv20").textContent = "Daily Weather";

        const images = document.querySelectorAll('#sectiondiv21 img');
        images.forEach(image => {
            image.style.opacity = '1';
        });
    });

    meuElemento.addEventListener('mouseover', function () {
        const moveBox = document.querySelector('#sectiondiv17');
        moveBox.style.top = "0px";
        moveBox.style.opacity = "1";

        document.getElementById("sectiondiv15").textContent = "";

        const images = document.querySelectorAll('#sectiondiv16 img');
        images.forEach(image => {
            image.style.opacity = '0';
        });
    });

    meuElemento.addEventListener('mouseout', function () {
        const moveBox = document.querySelector('#sectiondiv17');
        moveBox.style.top = "-8%";
        moveBox.style.opacity = "0";

        document.getElementById("sectiondiv15").textContent = "Daily Weather";

        const images = document.querySelectorAll('#sectiondiv16 img');
        images.forEach(image => {
            image.style.opacity = '1';
        });
    });
});


/* VOLTAR AO TOPO */

const voltar = document.getElementById("voltar");

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


// MODO DARK //

const changeThemeBtn = document.querySelector("#change-theme")
const checkbox = document.getElementById('change-theme');
const themeToggle = document.getElementById('theme-toggle');

changeThemeBtn.addEventListener("change", function () {
    document.body.classList.toggle("dark");

    checkbox.addEventListener('change', function() {
        if(this.checked) {
            themeToggle.classList.add('dark');
        } else {
            themeToggle.classList.remove('dark');
        }
    });

});



/* MODAL */ 


document.getElementById('button1').addEventListener('click', function(event) {

    document.getElementById('modal2').style.display = 'flex';
});

document.getElementById('confirmButton').addEventListener('click', function(event) {

    window.location.href = "A coisa mais humilhante do mundo é cobrar afeto.docx"; 

    document.getElementById('modal2').style.display = 'none';

});
























// SCROLL //
























// RESPONSIVIDADE //  // MENU HAMBURGUER //

// TABLET //

// MOBILE //




// CRIAR SITE SUPER MARIO //

// CRIAR SITE BARBEARIA //

// CRIAR LANDING PAGE //

