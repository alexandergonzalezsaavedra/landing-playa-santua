//document.querySelector("#sonidoOceano").volume = .35;
const estructura = document.querySelector("#activar-animacion-estructura"),
    menu = document.querySelector("#menu"),
    detalles = document.querySelector("#detalles");
let pathsEstructura = document.querySelectorAll(".animacionEstructura"),
    audio = document.querySelector("#sonidoOceano"),
    iconoSonido = document.querySelector("#silenciarMar i"),
    burgerToggle = document.querySelector("#burger-toggle");
// const solenciarMar = () => {
//     audio.classList.contains("silenciar") ? (audio.classList.remove("silenciar"), audio.play(), iconoSonido.classList.remove("fa-volume-low"), iconoSonido.classList.add("fa-volume-xmark")) : (audio.classList.add("silenciar"), audio.pause(), iconoSonido.classList.add("fa-volume-low"), iconoSonido.classList.remove("fa-volume-xmark"))
// };
document.addEventListener("click", (e => {
    e.target.matches(".enlaceMenu") && (burgerToggle.checked = !1)
})), window.addEventListener("scroll", (() => {
    detalles.getBoundingClientRect().y <= 200 ? (menu.classList.add("modoOscuro"), menu.classList.remove("modoClaro")) : (menu.classList.remove("modoOscuro"), menu.classList.add("modoClaro"));
    const e = estructura.getBoundingClientRect().y;
    if (e < 450 || e <= 0)
        for (let e = 0; e < pathsEstructura.length; e++) pathsEstructura[e].classList.add("estructura"), pathsEstructura[e].classList.remove("ocultarEstructura");
    else
        for (let e = 0; e < pathsEstructura.length; e++) pathsEstructura[e].classList.remove("estructura"), pathsEstructura[e].classList.add("ocultarEstructura")
})), AOS.init();
let nombreUsuario = document.querySelector(".nombreUsuario")
let telUsuario = document.querySelector(".telUsuario")
let correoUsuario = document.querySelector(".correoUsuario")
let url = new URL(window.location.href);
let queryParams = new URLSearchParams(url.search);
let nombre = queryParams.get("name");
let telefono = queryParams.get("tel");
let correo = queryParams.get("mail");
window.addEventListener("load", e => {
    e.preventDefault()
    nombreUsuario.textContent = nombre
    telUsuario.textContent = telefono
    correoUsuario.textContent = correo
}
)
