document.querySelector('.ver-perfil-btn').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'block';
});


document.querySelector('.close-btn').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';
});

window.onclick = function(event) {
    if (event.target === document.getElementById('modal')) {
        document.getElementById('modal').style.display = 'none';
    }
};


document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', function() {
        document.querySelectorAll('.menu-item').forEach(i => i.classList.remove('active'));
        this.classList.add('active');
    });
});


window.onload = function() {
    document.getElementById('modal').style.display = 'none';
};

/* ------------icono del usuario menu deplegable----------- */

document.addEventListener('DOMContentLoaded', function() {
    const profileIcon = document.getElementById('profile-icon');
    const profileMenu = document.getElementById('profile-menu');

    // Mostrar/Ocultar menu al hacer clic en el icono
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
