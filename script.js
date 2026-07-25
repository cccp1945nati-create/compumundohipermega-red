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