document.addEventListener('DOMContentLoaded', () => {
    const slider = document.getElementById('slider');
    const sliderValue = document.getElementById('slider-value');
    
    // Funcion para convertir valor del slider en horas o minutos
    function updateSliderValue(value) {
        const hours = Math.floor(value); // Horas completas
        const minutes = Math.round((value - hours) * 60); 

        if (minutes === 0) {
            return `${hours} hora${hours !== 1 ? 's' : ''}`; 
        } else {
            return `${hours > 0 ? hours + ' hora' + (hours > 1 ? 's' : '') + ' y ' : ''}${minutes} minuto${minutes !== 1 ? 's' : ''}`;
        }
    }
    
    sliderValue.textContent = updateSliderValue(slider.value);
    
    slider.addEventListener('input', () => {
        sliderValue.textContent = updateSliderValue(slider.value);
    });
});

/*------aplicar filtros------------ */
document.getElementById('apply-filters').addEventListener('click', () => {
    // Obtener los filtros seleccionados
    const categorias = Array.from(document.querySelectorAll('.left-sidebar input[type="checkbox"]:checked'))
        .map(checkbox => checkbox.nextElementSibling.textContent.trim());
    
    const duracion = document.getElementById('slider').value;
    
    // mirar la consola de la web ahi aparece lo selecionado
    console.log('Categorías seleccionadas:', categorias);
    console.log('Duración seleccionada:', duracion + ' horas');
});

/* ------------icono del usuario menu deplegable----------- */

document.addEventListener('DOMContentLoaded', function() {
    const profileIcon = document.getElementById('profile-icon');
    const profileMenu = document.getElementById('profile-menu');

    profileIcon.addEventListener('click', function(event) {
        event.stopPropagation();  
        profileMenu.style.display = profileMenu.style.display === 'block' ? 'none' : 'block';
    });

    document.addEventListener('click', function(event) {
        if (!profileMenu.contains(event.target) && !profileIcon.contains(event.target)) {
            profileMenu.style.display = 'none';
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const cerrarSesionBtn = document.querySelector("#logout-btn"); 
    if (cerrarSesionBtn) {
        cerrarSesionBtn.addEventListener("click", function() {
            window.location.href = "../interfaces/editar_perfilv2.html";
        });
    }
});
