const redes = document.querySelectorAll("red-social");
const wifi = document.getElementById("wifi");
const bienvenida = document.getElementById("Bienvenida");

function registrarSalida() {
    localStorage.setItem("horaSalida", Date.now());
}

redes.forEach((red) => {
    red.addEventListener("click", registrarSalida);
});

function mostrarAccesoWifi() {
    bienvenida.style.display = "none";

    wifi.style.display = "flex";

    setTimeout(() => {
        wifi.style.opacity = "1";
    }, 50);
}

function comprobarAcceso() {
    const salida = Number(localStorage.getItem("horaSalida"));

    if (!salida) return;

    const tiempo = (Date.now() - salida) / 1000;

    if (tiempo < 1) return;

    mostrarAccesoWifi();
    localStorage.removeItem("horaSalida");
}

window.addEventListener("focus", comprobarAcceso);
window.addEventListener("pageshow", comprobarAcceso);

document.addEventListener("visibilitychange", () => {
    if (!document.hidden) {
        comprobarAcceso();
    }
});

comprobarAcceso();