document.querySelector("#sonidoOceano").volume = 0.20;
const estructura = document.querySelector("#activar-animacion-estructura")
let pathsEstructura = document.querySelectorAll(".animacionEstructura")
let pathEstructuraUno = estructura.querySelector("#estructuraUno")
let audio = document.querySelector("#sonidoOceano");
let iconoSonido = document.querySelector("#silenciarMar i");
let burgerToggle = document.querySelector("#burger-toggle");
const solenciarMar = () => {
    if (audio.classList.contains("silenciar")) {
        audio.classList.remove("silenciar");
        audio.volume = 0.20;
        iconoSonido.classList.add("fa-volume-low");
        iconoSonido.classList.remove("fa-volume-xmark");
    } else {
        audio.classList.add("silenciar");
        audio.volume = 0.00;
        iconoSonido.classList.remove("fa-volume-low");
        iconoSonido.classList.add("fa-volume-xmark");
    }
}
document.addEventListener("click", (e) => {
    if (e.target.matches(".enlaceMenu")) {
        burgerToggle.checked = false
    }
})
window.addEventListener("scroll", () => {
    const rect = estructura.getBoundingClientRect().y;
    if (rect < 450 || rect <= 0) {
        for (let i = 0; i < pathsEstructura.length; i++) {
            pathsEstructura[i].classList.add("estructura");
            pathsEstructura[i].classList.remove("ocultarEstructura");
        }
    } else {
        for (let i = 0; i < pathsEstructura.length; i++) {
            pathsEstructura[i].classList.remove("estructura");
            pathsEstructura[i].classList.add("ocultarEstructura");
        }
    }
});
AOS.init();


