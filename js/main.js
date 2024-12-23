window.addEventListener('load', e => {
    e.preventDefault()
})

document.querySelector('#sonidoOceano').volume = 0.35;
const estructura = document.querySelector('#activar-animacion-estructura'),
    menu = document.querySelector('#menu'),
    detalles = document.querySelector('#detalles');
let pathsEstructura = document.querySelectorAll('.animacionEstructura'),
    pathEstructuraUno = estructura.querySelector('#estructuraUno'),
    audio = document.querySelector('#sonidoOceano'),
    iconoSonido = document.querySelector('#silenciarMar i'),
    burgerToggle = document.querySelector('#burger-toggle');
const solenciarMar = () => {
    audio.classList.contains('silenciar')
        ? (audio.classList.remove('silenciar'),
            audio.play(),
            iconoSonido.classList.remove('fa-volume-xmark'),
            iconoSonido.classList.add('fa-volume-low'))
        : (audio.classList.add('silenciar'),
            audio.pause(),
            iconoSonido.classList.add('fa-volume-xmark'),
            iconoSonido.classList.remove('fa-volume-low'));
};

const seccionVideo = document.querySelector("#video-playa-santua")
const videoSantua = document.getElementById("embed-video");
const silenciarVideo = document.querySelector("#silenciarVideo")
const iconoSonidoVideo = document.querySelector('#silenciarVideo i')
const playVid = () => {
    videoSantua.play();
}
const playVidAud = () => {
    videoSantua.play();
}
setTimeout(() => {
    playVid()
}, 6000)

window.addEventListener('load', e => {
    e.preventDefault()
    // setInterval(function () {
    //     window.location.hash = '#video-playa-santua';
    // }, 5000);
})

silenciarVideo.addEventListener('click', e => {
    e.preventDefault()
    videoSantua.muted = !videoSantua.muted;
    if (iconoSonidoVideo.classList.contains('fa-volume-xmark')) {
        iconoSonidoVideo.classList.add('fa-volume-low')
        iconoSonidoVideo.classList.remove('fa-volume-xmark', 'pulso')
    } else {
        iconoSonidoVideo.classList.add('fa-volume-xmark', 'pulso')
        iconoSonidoVideo.classList.remove('fa-volume-low')
    }
}
)





document.addEventListener('click', (e) => {
    e.target.matches('.enlaceMenu') && (burgerToggle.checked = !1);
}),
    window.addEventListener('scroll', () => {
        seccionVideo.getBoundingClientRect().y <= 200
            ? (menu.classList.add('modoOscuro'), menu.classList.remove('modoClaro'))
            : (menu.classList.remove('modoOscuro'), menu.classList.add('modoClaro'));
        const e = estructura.getBoundingClientRect().y;
        if (e < 450 || e <= 0)
            for (let e = 0; e < pathsEstructura.length; e++)
                pathsEstructura[e].classList.add('estructura'),
                    pathsEstructura[e].classList.remove('ocultarEstructura');
        else
            for (let e = 0; e < pathsEstructura.length; e++)
                pathsEstructura[e].classList.remove('estructura'),
                    pathsEstructura[e].classList.add('ocultarEstructura');
    }),
    AOS.init();
const formulario = document.querySelector('#formularioRegistro');
let nombre = document.getElementById('nombre');
let apellido = document.getElementById('apellido');
let ciudad = document.getElementById('ciudad');
let correo = document.getElementById('correo');
let telefono = document.getElementById('telefono');
let interesado = document.getElementById('interesado');
let tyc = document.getElementById('terminos-condiciones');
let mensajePreenvio = document.querySelector('#mensajePreenvio');
// Errores
let errorNombre = document.getElementById('nombre-error');
let errorApellido = document.getElementById('apellido-error');
let errorCiudad = document.getElementById('ciudad-error');
let errorCorreo = document.getElementById('correo-error');
let errorTelefono = document.getElementById('telefono-error');
let errorInteresado = document.getElementById('interesado-error');
let errorTyC = document.getElementById('checkbox-error');
// Obtener utms
let url = new URL(window.location.href);
let queryParams = new URLSearchParams(url.search);
let source = queryParams.get('utm_source');
let medium = queryParams.get('utm_medium');
let campaign = queryParams.get('utm_campaign');
let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let isValid;
formulario.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (nombre.value === '') {
        errorNombre.classList.remove('d-none');
        errorNombre.innerText = '¡El nombre es obligatorio!';
        isValid = false;
    }
    if (nombre.value !== '') {
        errorNombre.innerText = '';
        errorNombre.classList.add('d-none');
    }
    if (apellido.value === '') {
        errorApellido.classList.remove('d-none');
        errorApellido.innerText = '¡El apellido es obligatorio!';
        isValid = false;
    }
    if (apellido.value !== '') {
        errorApellido.classList.add('d-none');
        errorApellido.innerText = '';
    }
    if (ciudad.value === '') {
        errorCiudad.classList.remove('d-none');
        errorCiudad.innerText = '¡La ciudad es obligatoria!';
        isValid = false;
    }
    if (ciudad.value !== '') {
        errorCiudad.classList.add('d-none');
        errorCiudad.innerText = '';
    }
    if (correo.value === '') {
        errorCorreo.classList.remove('d-none');
        errorCorreo.innerText = '¡El coreo obligatorio!';
        isValid = false;
    }
    if (correo.value !== '') {
        errorCorreo.classList.add('d-none');
        errorCorreo.innerText = '';
    }
    if (telefono.value === '') {
        errorTelefono.classList.remove('d-none');
        errorTelefono.innerText = '¡El teléfono obligatorio!';
        isValid = false;
    }
    if (telefono.value !== '') {
        errorTelefono.classList.add('d-none');
        errorTelefono.innerText = '';
    }
    // if (interesado.value === '') {
    //     errorInteresado.classList.remove('d-none');
    //     errorInteresado.innerText = '¡Debe seleccionar un tipo de apartamento!';
    //     isValid = false;
    // }
    if (
        nombre.value !== '' &&
        apellido.value !== '' &&
        ciudad.value !== '' &&
        correo.value !== '' &&
        telefono.value !== ''
        //tyc.checked
        //interesado.value !== ''
    ) {
        isValid = true;
    }
    if (isValid) {
        formulario.classList.add('d-none');
        mensajePreenvio.classList.remove('d-none');
        try {
            const headers = new Headers();
            headers.append('Content-Type', 'application/json');
            const raw = JSON.stringify({
                nombreProyecto: 'Playa Santúa',
                nombres: nombre.value,
                apellidos: apellido.value,
                correoElectonico: correo.value,
                telefono: telefono.value,
                tipoCompra: '',
                precio: '',
                utm_source: source,
                utm_medium: medium,
                utm_campaign: campaign,
                habeasData: true,
                celular: true,
                sms: true,
                llamada: true,
                email: true,
                fisico: true,
            });
            const requestOptions = {
                method: 'POST',
                headers: headers,
                body: raw,
                redirect: 'follow',
            };
            let data = await fetch(
                'https://paymentsummary.herokuapp.com/zonapublica/leadsLandings/ldxFWvlb0nLMRbC6xrt8EdAjQtrd783',
                requestOptions
            );
            let resData = await data.json();
            if (resData.success === true) {
                location.replace(
                    `https://www.playasantua.com/thank-you-page.html?name=${nombre.value}&tel=${telefono.value}&mail=${correo.value}`
                );
            }
        } catch (error) {
            console.log(error);
        } finally {
            mensajePreenvio.classList.remove('d-none');
        }
    }
});