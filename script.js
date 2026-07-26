const btnAbrir = document.getElementById("btn-abrir");
const modal = document.querySelector(".modal");
const btnCerrar = document.querySelector(".btn-cerrar");
// Le decimos al botón que escuche el clic
btnAbrir.addEventListener("click", function() {
    modal.style.display = "block";
});
// Le decimos a la 'X' que escuche el clic para cerrar
btnCerrar.addEventListener("click", function() {
    modal.style.display = "none";
});
// Si la persona hace clic en el fondo oscuro de la pantalla
window.addEventListener("click", function(evento) {
    if (evento.target === modal) {
        modal.style.display = "none";
    }
});
document.addEventListener('DOMContentLoaded', () => {
    // 1. Capturamos la modal y los elementos para abrir/cerrar
    const modal = document.getElementById('modal-contacto');
    const btnCerrar = document.querySelector('.btn-cerrar');
    const campoPlan = document.getElementById('plan-seleccionado');
    const tarjetasPlanes = document.querySelectorAll('.tarjeta-plan');

    // 2. Evento para cada tarjeta de plan
    tarjetasPlanes.forEach(tarjeta => {
        tarjeta.addEventListener('click', () => {
            // Leemos el atributo data-plan de la tarjeta que recibió el clic
            const nombrePlan = tarjeta.getAttribute('data-plan');

            // Cargamos el nombre del plan en el input del formulario
            if (campoPlan && nombrePlan) {
                campoPlan.value = nombrePlan;
            }

            // Mostramos la ventana modal
            modal.style.display = 'block';
        });
    });

    // 3. Cerrar la modal al hacer clic en la 'X'
    if (btnCerrar) {
        btnCerrar.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }

    // 4. Cerrar la modal si hacen clic afuera del contenido blanco/oscuro
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});