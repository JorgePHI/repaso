  
// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

var app = new Framework7({
    // App root element
    root: '#app',
    // App Name
    name: 'My App',
    // App id
    id: 'com.myapp.test',
    // Enable swipe panel
    panel: {
      swipe: 'left',
    },
    // Add default routes
    routes: [
      {
        path: '/',
        url: 'index.html',
      },
      {
        path: '/index/',
        url: 'index.html',
      },
      {
        path: '/panel/',
        url: 'panel.html',
      },
      {
        path: '/juego/',
        url: 'juego.html',
      },
    ]
    // ... other parameters
  });

var mainView = app.views.create('.view-main');


var toques = 0;

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");

    $$('#inicio').on('click', fnSetEmail);


});

// Option 1. Using one 'page:init' handler for all pages
$$(document).on('page:init', function (e) {
    // Do something here when page loaded and initialized
    console.log(e);
})




// Option 2. Using live 'page:init' event handlers for each page
$$(document).on('page:init', '.page[data-name="index"]', function (e) {
    // Inicio Panel
    console.log(e);
    
    $$('#inicio').on('click', fnSetEmail);


})
$$(document).on('page:init', '.page[data-name="panel"]', function (e) {
    // Inicio Panel
    console.log(e);
    
    $$('#setNombre').on('click', fnSetNombre);



})
$$(document).on('page:init', '.page[data-name="juego"]', function (e) {
    // Inicio Juego
    console.log(e);

    var columnas = 5;
    var filas = 5;
    var datos = "";



    for (j=0; j<filas; j++) {
        datos = '<div class="row">';
        for (i=0; i<columnas; i++) {
          datos += '<div class="col tocoCol" id="col_'+j+'_'+i+'">'+i+'</div>';
        }
        datos += '</div>';
        $$('#grilla').append(datos);
    }


    $$('.tocoCol').on('click', fnTocaCol);


})


/* MIS FUNCIONES */
function fnSetEmail() {

    var elMail = $$('#email').val(); // es un input... uso val!

    // lo seteo en el panel.... contenedor lblEmail
    $$('#lblEmail').text(elMail);   // es una etiqueta html. Text va sin formato

}

function fnSetNombre() {
    var elNombre = $$('#nombre').val(); // es un input... uso val!

    // lo seteo en el panel.... contenedor lblNombre
    $$('#lblNombre').text(elNombre);   // es una etiqueta html. Text va sin formato

}

function fnTocaCol() {

    elId = this.id;
    console.log(elId);

    if ( toques % 2 == 0 ) {
      $$('#'+elId).addClass('color1');
      $$('#c1').removeClass('btnSeleccionado');
      $$('#c2').addClass('btnSeleccionado');
    } else {
      $$('#'+elId).addClass('color2');
      $$('#c2').removeClass('btnSeleccionado');
      $$('#c1').addClass('btnSeleccionado');
    }


    

    toques++;
}