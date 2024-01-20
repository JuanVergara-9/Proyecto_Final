peliculasNuevas.forEach(img => {
    img.addEventListener('click', function() {
        // Cambia la imagen (simplemente como ejemplo)
        img.src = 'nueva-ruta-imagen.jpg';

        // Puedes agregar lógica adicional aquí para personalizar la animación
        img.classList.remove('zoomIn'); // Elimina la clase existente
        void img.offsetWidth; // Reinicia el reflow para aplicar la nueva clase
        img.classList.add('zoomIn'); // Agrega la clase de nuevo
    });
});

