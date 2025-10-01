// Puedes agregar animaciones o tracking aquí si lo deseas
console.log("Volutt landing page cargada correctamente.");

    document.addEventListener("DOMContentLoaded", function () {
        const popup = document.getElementById("age-verification");
        const btnSi = document.getElementById("btn-si");
        const btnNo = document.getElementById("btn-no");

        btnSi.addEventListener("click", () => {
        popup.style.display = "none";
        });

        btnNo.addEventListener("click", () => {
        window.location.href = "https://www.google.com"; // o tu página de salida
        });
    });

    document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("age-verification");
    const btnSi = document.getElementById("btn-si");
    const btnNo = document.getElementById("btn-no");

    // Bloquea el scroll al cargar
    document.body.classList.add("popup-active");

    btnSi.addEventListener("click", () => {
        popup.style.display = "none";
        document.body.classList.remove("popup-active"); // 🔓 Desbloquea el scroll
    });

    btnNo.addEventListener("click", () => {
        window.location.href = "https://www.google.com";
    });
    });




