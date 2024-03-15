   //Esto es para que la bola cambie cuando se le de click//
    document.addEventListener("DOMContentLoaded", function() {
        var navigationLinks = document.querySelectorAll('.navigation a');

        navigationLinks.forEach(function(link) {
            link.addEventListener('click', function(event) {
                event.preventDefault(); // Evita el comportamiento predeterminado del enlace

                // Elimina la clase 'active' de todos los enlaces de navegación
                navigationLinks.forEach(function(link) {
                    link.classList.remove('active');
                });

                // Añade la clase 'active' al enlace que se ha hecho clic
                this.classList.add('active');

                // Obtén el href del enlace clicado
                var targetId = this.getAttribute('href');

                // Encuentra la sección correspondiente al href
                var targetSection = document.querySelector(targetId);

                // Desplázate a la sección correspondiente suavemente
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    });







 //Esto es para que la bola cambie cuando se baje el mouse//
    document.addEventListener("DOMContentLoaded", function() {
        var navigationLinks = document.querySelectorAll('.navigation a');
        var sections = document.querySelectorAll('section');

        navigationLinks.forEach(function(link) {
            link.addEventListener('click', function(event) {
                event.preventDefault(); // Evita el comportamiento predeterminado del enlace

                // Elimina la clase 'active' de todos los enlaces de navegación
                navigationLinks.forEach(function(link) {
                    link.classList.remove('active');
                });

                // Añade la clase 'active' al enlace que se ha hecho clic
                this.classList.add('active');

                // Obtén el href del enlace clicado
                var targetId = this.getAttribute('href');

                // Encuentra la sección correspondiente al href
                var targetSection = document.querySelector(targetId);

                // Desplázate a la sección correspondiente suavemente
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Agregar eventos de escucha para el evento 'mouseover' en cada sección
        sections.forEach(function(section) {
            section.addEventListener('mouseover', function() {
                // Obtener el ID de la sección actual
                var sectionId = this.getAttribute('id');

                // Obtener el enlace de navegación correspondiente a la sección actual
                var correspondingLink = document.querySelector('.navigation a[href="#' + sectionId + '"]');

                // Eliminar la clase 'active' de todos los enlaces de navegación
                navigationLinks.forEach(function(link) {
                    link.classList.remove('active');
                });

                // Agregar la clase 'active' al enlace correspondiente
                correspondingLink.classList.add('active');
            });
        });
    });