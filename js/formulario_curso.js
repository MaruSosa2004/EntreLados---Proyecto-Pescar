document.addEventListener('DOMContentLoaded', () => {
    const dropdownBtn = document.querySelector('.dropdown-btn');
    const dropdownContent = document.querySelector('.dropdown-content');
    
    dropdownBtn.addEventListener('click', () => {
        dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
    });

    dropdownContent.addEventListener('click', (event) => {
        if (event.target.tagName === 'A') {
            dropdownBtn.textContent = event.target.textContent + ' ▼';
            dropdownContent.style.display = 'none'; 
        }
    });

    document.addEventListener('click', (event) => {
        if (!dropdownBtn.contains(event.target) && !dropdownContent.contains(event.target)) {
            dropdownContent.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var contenedortitulo = document.getElementById('contenedor-titulo');

    contenedortitulo.addEventListener('focus', function() {
        if (contenedortitulo.value === '') {
            contenedortitulo.placeholder = '';
        }
    });

    contenedortitulo.addEventListener('blur', function() {
        if (contenedortitulo.value === '') {
            contenedortitulo.placeholder = 'Busca algo que llame la atención y destaque de otras publicaciones.';
        }
    });
}); 

document.addEventListener('DOMContentLoaded', () => {
    const dropdownBtnCurso = document.querySelector('.dropdown-btn-curso');
    const dropdownContentCurso = document.querySelector('.dropdown-content-curso');
    
    dropdownBtnCurso.addEventListener('click', () => {
        dropdownContentCurso.style.display = dropdownContentCurso.style.display === 'block' ? 'none' : 'block';
    });

    

    dropdownContentCurso.addEventListener('click', (event) => {
        if (event.target.tagName === 'A') {
            dropdownBtnCurso.textContent = event.target.textContent + ' ▼';
            dropdownContentCurso.style.display = 'none';
        }
    });

    document.addEventListener('click', (event) => {
        if (!dropdownBtnCurso.contains(event.target) && !dropdownContentCurso.contains(event.target)) {
            dropdownContentCurso.style.display = 'none';
        }
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const dropdownBtnDificultad = document.querySelector('.dropdown-btn-dificultad');
    const dropdownContentDificultad = document.querySelector('.dropdown-content-dificultad');
    

    dropdownBtnDificultad.addEventListener('click', () => {
        dropdownContentDificultad.style.display = dropdownContentDificultad.style.display === 'block' ? 'none' : 'block';
    });


    dropdownContentDificultad.addEventListener('click', (event) => {
        if (event.target.tagName === 'A') {
            dropdownBtnDificultad.textContent = event.target.textContent + ' ▼';
            dropdownContentDificultad.style.display = 'none';
        }
    });

    document.addEventListener('click', (event) => {
        if (!dropdownBtnDificultad.contains(event.target) && !dropdownContentDificultad.contains(event.target)) {
            dropdownContentDificultad.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var contenedorDescripcion = document.getElementById('contenedor-descripcion').querySelector('textarea');

    contenedorDescripcion.addEventListener('focus', function() {
        contenedorDescripcion.placeholder = ''; 
    });

    contenedorDescripcion.addEventListener('blur', function() {
        if (contenedorDescripcion.value === '') {
            contenedorDescripcion.placeholder = 'Escribe una descripción detallada de tu publicación aquí.'; 
        }
    });
});
