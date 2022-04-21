/** variables */
const btnBuscador = document.querySelector('#search-btn');
const navBuscador = document.querySelector('.buscador');
const videoBtn = document.querySelectorAll(".video-btn");
const navHamburgesa = document.querySelector(".fa-bars");
const nav = document.querySelector(".navegador");
const loginEmergente = document.querySelector(".head-icons .fa-user");
const closeLogin = document.querySelector(".close-login");
const ejecutarLogin = document.querySelector(".login-user");

ejecutarFunciones();

function ejecutarFunciones() {
    btnBuscador.addEventListener('click', mostrarBuscador);

    window.addEventListener("scroll", () => {
        btnBuscador.classList.remove('fa-times');
        navBuscador.classList.remove('active');
    })

    /**funcion para mostrar el video de fondo en inicio */
    videoBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelector('.controls .active').classList.remove('active');
            btn.classList.add('active');
            let src = btn.getAttribute('data-src');
            document.querySelector('#video-slider').src = src;
        });
    })

    /**Activar el menu hamburgesa */
    navHamburgesa.addEventListener('click', menuHamburgesa);

    /**activar y cerrar ventana emergente de login user */
    loginEmergente.addEventListener('click', activarLogin);
    closeLogin.addEventListener('click', activarLogin);
}

function mostrarBuscador() {
    btnBuscador.classList.toggle('fa-times');
    navBuscador.classList.toggle('active');
}

function menuHamburgesa() {
    nav.classList.toggle("active")
    navHamburgesa.classList.toggle("fa-times");
}


function activarLogin() {
    ejecutarLogin.classList.toggle("active");
}

/**Swiper js */

var swiper = new Swiper(".mySwiper", {
    slidesPerGroup: 1,
    slidesPerView: 1,
    spaceBetween: 5,
    freeMode: true,
    loop: true,

    // Responsive breakpoints
    breakpoints: {

        // when window width is >= 480px
        500: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        // when window width is >= 640px
        800: {
            slidesPerView: 3,
            spaceBetween: 10
        }
    },



});

/**Testimoniales */
var swiper = new Swiper(".mySwi", {
    slidesPerView: 1,
    spaceBetween: 5,
    freeMode: true,
    loop: true,

    breakpoints: {

        // when window width is >= 500px
        500: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        // when window width is >= 650px
        750: {
            slidesPerView: 3,
            spaceBetween: 10
        },
        // when window width is >= 800px
        900: {
            slidesPerView: 4,
            spaceBetween: 20
        }
    },

});

/**Apartado del temporizador */
const getTimeRemain = plazo => {
    let now = new Date(),
        remainTime = (new Date(plazo) - now + 1000) / 1000,
        remainSeconds = ("0" + Math.floor(remainTime % 60)).slice(-2),
        remainMinutes = ("0" + Math.floor(remainTime / 60 % 60)).slice(-2),
        remainHours = ("0" + Math.floor(remainTime / 3600 % 24)).slice(-2),
        remainDays = ("0" + Math.floor(remainTime / (3600 * 24))).slice(-2);

    return {
        remainTime,
        remainSeconds,
        remainMinutes,
        remainHours,
        remainDays
    }
};

const countDown = (deadline, elem) => {
    const element = document.querySelector('#clock');
    const timerUpdate = setInterval(() => {
        let t = getTimeRemain(deadline);
        element.innerHTML = `
        <div class='contador'>
        <p class='time'>${t.remainDays}</p>
        <p class='nombre'>Dias</p>
        </div>
        <div class='contador'>
        <p class='time'>${t.remainHours}</p>
        <p class='nombre'>Horas</p>
        </div>
        <div class='contador'>
        <p class='time'>${t.remainMinutes}</p>
        <p class='nombre'>Minutos</p>
        </div>
        <div class='contador'>
        <p class='time'>${t.remainSeconds}</p>
        <p class='nombre'>Segundos</p>
        </div>`;

        if (t.remainTime <= 1) {
            clearInterval(timerUpdate);
        }

    }, 1000)


}
console.log(countDown('Mar 17 2022 12:58:36'));