const info=()=>{
    location.hash="/informacionpersonal"
    const view=`<nav class="navbar navbar-expand-lg navbar-dark bg-primary ">
    <a class="navbar-brand" href="">Sitio Personal</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-item nav-link active" href="">Home <span class="sr-only">(current)</span></a>
        <a class="nav-item nav-link" href="#/informacionpersonal">Informacion Personal</a>
        <a class="nav-item nav-link" href="#/contactos">Contactos</a>
        <a class="nav-item nav-link" href="#/error404">Calendario</a>
      </div>
    </div>
</nav>

  <div class="container mt-5">
    <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="./src/assets/Images/YoadnS.jpg" class="d-block w-100" alt="Yo y mi sis">
            <div class="carousel-caption d-none d-md-block">
              <h5>Esto soy yo con mi hermana</h5>
              <p>En realidad es mi media hermana pero es una historia complicada xD</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="./src/assets/Images/Yoxd.jpeg" class="d-block w-100" alt="Yo">
            <div class="carousel-caption d-none d-md-block">
              <h5>Mi nombre es Jesus Bryan</h5>
              <p>Estudio ingeniería en comptación en la poderosisima UNAM</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="./src/assets/Images/yocholo.jpg" class="d-block w-100" alt="Yo cholo">
            <div class="carousel-caption d-none d-md-block">
              <h5>Tengo 19 años</h5>
              <p>Y ya he sido hasta cholo, jaja en realidad no, siempre he sido buen estudiante.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="./src/assets/Images/vicios.png" class="d-block w-100" alt="Yo">
            <div class="carousel-caption d-none d-md-block">
              <h5 class="text-danger">Sin embargo he caido en algunos vicios</h5>
              <p class="text-danger">Me he equitado algunos pero otros siguen ahí</p>
            </div>
        </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
  </div>

  <div class="container mt-5">
    <div class="card ml-5" style="width: 18rem;">
        <img src="./src/assets/Images/Yoxd.jpeg" class="card-img-top" alt="Instagram">
        <div class="card-body">
        <h5 class="card-title">Biografia</h5>
        <p class="card-text">Nací el 19 de Octubre del 2000, en el, antes llamado, Distrito Federal, vivo en Ecatepec desde los 2 años, fui a las "mejores" escuelas de primaria y secundaria, después fui a la Preparatoria número 9 Pedro de Alba, por último, estoy en la Facultad de Ingeniería, cursando mi actual y cuarentenoso cuarto semestre, actualmente rento cerca de CU con mi roomie Brandon, 
                            , siendo mi segundo semestre más duro, pienso que voy por buen camino, en este largo viaje que se llama vida, yendo desde ecatepec hasta la facultad, pasando por la grieta del invocador.
        </p>
        <a href="https://www.facebook.com/chicho.bicho" class="btn btn-danger">Ir a mi Facebook</a>
        </div>
    </div>
  </div>`;
  return view;
}
export default info;