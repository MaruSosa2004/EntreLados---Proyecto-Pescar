const agregarModuloBtn = document.getElementById('agregar-modulo');

const modulosContainer = document.getElementById('modulos-container');

// Contador para los módulos
let contadorModulos = 0;

// Función para agregar un nuevo módulo
function agregarModulo() {
    contadorModulos++;
    
    const nuevoModulo = document.createElement('div');
    nuevoModulo.classList.add('modulo');
    
    nuevoModulo.innerHTML = `
        <h3>Módulo ${contadorModulos}:<label for="nombre-modulo-${contadorModulos}"></label>
        <input type="text" id="nombre-modulo-${contadorModulos}" name="nombre-modulo-${contadorModulos}" placeholder="Ingrese el título del módulo"></h3>

    `;

    modulosContainer.appendChild(nuevoModulo);
    
    modulosContainer.appendChild(agregarModuloBtn);

   
}

agregarModuloBtn.addEventListener('click', agregarModulo);
