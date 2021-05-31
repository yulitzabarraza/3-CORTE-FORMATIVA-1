// Activador de jQuery - Función principal de jQuery
$(document).ready(function(){

    // Funciones de Filtrado
    $('#todos').click(function(){
        $('main section#sistema-filtrado article img').show();

        $('#todos').addClass('filtro-activo');
        $('#todos').removeClass('filtro-inactivo');

        $('#sillas, #mesas, #sofas').removeClass('filtro-activo');
        $('#sillas, #mesas, #sofas').addClass('filtro-inactivo');
    });

    $('#sillas').click(function(){
        $('main section#sistema-filtrado article img').hide();
        $('main section#sistema-filtrado article img.sillas').show();

        $('#sillas').addClass('filtro-activo');
        $('#sillas').removeClass('filtro-inactivo');

        $('#todos, #mesas, #sofas').removeClass('filtro-activo');
        $('#todos, #mesas, #sofas').addClass('filtro-inactivo');
    });

    $('#sofas').click(function(){
        $('main section#sistema-filtrado article img').hide();
        $('main section#sistema-filtrado article img.sofas').show();

        $('#sofas').addClass('filtro-activo');
        $('#sofas').removeClass('filtro-inactivo');

        $('#todos, #mesas, #sillas').removeClass('filtro-activo');
        $('#todos, #mesas, #sillas').addClass('filtro-inactivo');
    });

    $('#mesas').click(function(){
        $('main section#sistema-filtrado article img').hide();
        $('main section#sistema-filtrado article img.mesas').show();

        $('#mesas').addClass('filtro-activo');
        $('#mesas').removeClass('filtro-inactivo');

        $('#todos, #sofas, #sillas').removeClass('filtro-activo');
        $('#todos, #sofas, #sillas').addClass('filtro-inactivo');
    });



    // Función de Posición fija de Filtros al hacer ScrollDown
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('main section#sistema-filtrado nav#filtros').css('position','fixed');
            $('main section#sistema-filtrado nav#filtros').css('left','0');
            $('main section#sistema-filtrado nav#filtros').css('z-index','999');
            $('main section#sistema-filtrado nav#filtros').css('top','80px');
            $('main section#sistema-filtrado nav#filtros').css('border-radius','0 0 5px 5px');
        } else {
            $('main section#sistema-filtrado nav#filtros').css('position','relative');
            $('main section#sistema-filtrado nav#filtros').css('left','0');
            $('main section#sistema-filtrado nav#filtros').css('z-index','1');
            $('main section#sistema-filtrado nav#filtros').css('top','0');
            $('main section#sistema-filtrado nav#filtros').css('border-radius','5px');
        }
    });
});