peliculasNuevas.forEach(img => {
    img.addEventListener('click', function() {
        img.src = 'nueva-ruta-imagen.jpg';

        img.classList.remove('zoomIn'); 
        void img.offsetWidth;
        img.classList.add('zoomIn'); 
    });
});

