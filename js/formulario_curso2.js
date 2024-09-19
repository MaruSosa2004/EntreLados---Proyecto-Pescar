const agregarModuloBtn = document.getElementById('agregar-modulo');
const modulosContainer = document.getElementById('modulos-container');

// Contador para los modulos
let contadorModulos = 0;

function agregarModulo() {
    contadorModulos++;

    // Crear el contenedor del modulo 
    const nuevoModulo = document.createElement('div');
    nuevoModulo.classList.add('modulo');
    
    // Crear contenedor expandible 
    const moduloContentExpandible = document.createElement('div');
    moduloContentExpandible.classList.add('modulo-content-expandible');

    // Crear el contenedor de contenidos
    const contenidosContainer = document.createElement('div');
    contenidosContainer.classList.add('contenidos-container');

    // Contenido expandible con la descripcion y primer contenido
    const textareaId = `descripcion-modulo-${contadorModulos}`;
    moduloContentExpandible.innerHTML = `
        <h4 class="descripcion-titulo">Descripción *</h4>
        <div class="descripcion-contenedor">
            <textarea class="descripcion-texto" id="${textareaId}" placeholder="Ingrese una descripción breve de qué temas se abordarán en este módulo y todo lo que consideres relevante."></textarea>
        </div>
    `;

    // Agregar el primer contenido
    agregarContenido(contenidosContainer, contadorModulos);

    // Boton para agregar contenido
    const botonAgregarContenido = document.createElement('button');
    botonAgregarContenido.classList.add('boton-agregar-contenido');
    botonAgregarContenido.innerHTML = '+';
    botonAgregarContenido.addEventListener('click', function() {
        agregarContenido(contenidosContainer, contadorModulos);
    });

    moduloContentExpandible.appendChild(contenidosContainer);
    moduloContentExpandible.appendChild(botonAgregarContenido);

    // Boton de guardar modulo
    const botonGuardarModulo = document.createElement('button');
    botonGuardarModulo.classList.add('boton-guardar');
    botonGuardarModulo.textContent = `Guardar Módulo ${contadorModulos}`;
    
    // Añadir el boton de guardar al contenedor expandible
    moduloContentExpandible.appendChild(botonGuardarModulo);

    // Contenido del módulo
    nuevoModulo.innerHTML = `
        <h3>
            Módulo ${contadorModulos}:
            <input type="text" id="nombre-modulo-${contadorModulos}" name="nombre-modulo-${contadorModulos}" placeholder="Ingrese el título del módulo">
            <span class="arrow-icon"></span>
        </h3>
    `;

    // Añadir el modulo y su contenedor al contenedor de modulos
    modulosContainer.appendChild(nuevoModulo);
    modulosContainer.appendChild(moduloContentExpandible);

    const arrow = nuevoModulo.querySelector('.arrow-icon');
    arrow.addEventListener('click', function(event) {
        event.stopPropagation();

        moduloContentExpandible.classList.toggle('expandido');
        arrow.classList.toggle('active');
    });

    const textarea = document.getElementById(textareaId);
    manejarPlaceholder(textarea, 'Ingrese una descripción breve de qué temas se abordarán en este módulo y todo lo que consideres relevante.');

    const textareaContenido = nuevoModulo.querySelector('.textarea-contenido');
    if (textareaContenido) {
        manejarPlaceholder(textareaContenido, 'Ingrese el nombre que figurará para el apunte/video');
    }
}

function agregarContenido(contenedor, moduloId) {
    const numeroContenidos = contenedor.children.length + 1;

    const nuevoContenido = document.createElement('div');
    nuevoContenido.classList.add('contenido');
    nuevoContenido.innerHTML = `
        <span class="numero-contenido">${numeroContenidos}</span>
        <div class="contenido-detalle">
            <div class="titulo-contenido">Título del contenido*</div>
            <div class="tituloarch">Cargue el primer contenido*</div>
            <textarea placeholder="Ingrese el nombre que figurará para el apunte/video" name="titulo-contenido-${moduloId}-${numeroContenidos}" class="textarea-contenido"></textarea>
            <input type="file" name="archivo-contenido-${moduloId}-${numeroContenidos}">
            <img src="../img/logo2.png" alt="Logo">
        </div>
    `;

    const textareaContenido = nuevoContenido.querySelector('.textarea-contenido');
    manejarPlaceholder(textareaContenido, 'Ingrese el nombre que figurará para el apunte/video');

    contenedor.appendChild(nuevoContenido);
}

function manejarPlaceholder(elemento, placeholderTexto) {
    elemento.addEventListener('focus', function() {
        if (elemento.value === '') {
            elemento.placeholder = '';
        }
    });

    elemento.addEventListener('blur', function() {
        if (elemento.value === '') {
            elemento.placeholder = placeholderTexto;
        }
    });
}

// Agregar el evento al boton de agregar modulo
agregarModuloBtn.addEventListener('click', agregarModulo);
