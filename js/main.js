document.querySelector("#sonidoOceano").volume = 0.35;
const estructura = document.querySelector("#activar-animacion-estructura")
const menu = document.querySelector("#menu")
const detalles = document.querySelector("#detalles")
let pathsEstructura = document.querySelectorAll(".animacionEstructura")
let pathEstructuraUno = estructura.querySelector("#estructuraUno")
let audio = document.querySelector("#sonidoOceano");
let iconoSonido = document.querySelector("#silenciarMar i");
let burgerToggle = document.querySelector("#burger-toggle");
const solenciarMar = () => {
    if (audio.classList.contains("silenciar")) {
        audio.classList.remove("silenciar");
        audio.play()
        iconoSonido.classList.remove("fa-volume-low");
        iconoSonido.classList.add("fa-volume-xmark");
    } else {
        audio.classList.add("silenciar");
        audio.pause()
        iconoSonido.classList.add("fa-volume-low");
        iconoSonido.classList.remove("fa-volume-xmark");
    }
}
document.addEventListener("click", (e) => {
    if (e.target.matches(".enlaceMenu")) {
        burgerToggle.checked = false
    }
})
window.addEventListener("scroll", () => {
    const rectMenu = detalles.getBoundingClientRect().y
    if (rectMenu <= 200) {
        menu.classList.add("modoOscuro")
        menu.classList.remove("modoClaro")
    } else {
        menu.classList.remove("modoOscuro")
        menu.classList.add("modoClaro")
    }
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


