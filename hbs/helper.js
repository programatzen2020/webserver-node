const hbs = require('hbs');


// Helpers
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});

// Capitalizar
hbs.registerHelper('cap', (texto) => {
    let palabras = texto.split(' ');

    palabras.forEach( (palabra, index) => {
        palabras[index] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });

    return palabras.join(' ');

});




