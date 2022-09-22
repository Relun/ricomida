//2) Tooltip
$(function () {
    $('[data-bs-toggle="tooltip"]').tooltip();
});

//3) Evento: alerta de correo enviado
$("#enviarCorreo").click(function () {
    alert("El correo fue enviado correctamente...");
});

// 4) Selectores de etiqueta: Cambiar títulos a color rojo
$("h3").on("dblclick", function () {
    $(this).addClass("red-text");
    //   $(this).css({
    //   "color": "#FF0000",
    //   });
});

// 5) Selectores de clase: Ocultar/mostrar contenido de las cards
$(".card-title").click(function () {
    $(".card-text").toggle();
});