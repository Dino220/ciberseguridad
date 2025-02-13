document.addEventListener("DOMContentLoaded", function() {
    let header = document.querySelector("header");

    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) {
            header.style.background = "#001F3F"; 
        } else {
            header.style.background = "linear-gradient(45deg, #00274D, #004080)";
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    let botones = document.querySelectorAll(".btn");
    
    botones.forEach(boton => {
        boton.addEventListener("click", function (event) {
            event.preventDefault(); 
            alert("¡Botón funcionando correctamente!");
        });
    });

    let header = document.querySelector("header");
    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) {
            header.style.background = "#001F3F"; 
        } else {
            header.style.background = "linear-gradient(45deg, #00274D, #004080)";
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Funcionalidad del menú en el scroll
    let header = document.querySelector("header");
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            header.style.background = "#001F3F";
        } else {
            header.style.background = "linear-gradient(45deg, #00274D, #004080)";
        }
    });

    // Alerta en botones
    let botones = document.querySelectorAll(".btn");
    botones.forEach(boton => {
        boton.addEventListener("click", function (event) {
            event.preventDefault();
            alert("¡Botón funcionando correctamente!");
        });
    });

    // Expandir detalles de los consejos
    let consejos = document.querySelectorAll(".toggle");

    consejos.forEach(consejo => {
        consejo.addEventListener("click", function () {
            let details = this.nextElementSibling;
            
            // Alternar visibilidad
            if (details.style.display === "block") {
                details.style.display = "none";
            } else {
                details.style.display = "block";
            }
        });
    });
});

