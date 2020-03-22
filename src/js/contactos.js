const contac=()=>{
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

  <div class="container">
    <div class="row">
          <div class="card mr-5" style="width: 18rem;">
              <img src="./src/assets/Images/facebook.png" class="card-img-top" alt="Facebook">
              <div class="card-body">
              <h5 class="card-title">Facebook</h5>
              <p class="card-text">Mi facebook personal si quieren contactarme, estoy disponible de las 13:00 hrs hasta las 22:00 hrs. </p>
              <a href="https://www.facebook.com/chicho.bicho" class="btn btn-danger">Ir a mi Facebook</a>
              </div>
          </div>

          <div class="card ml-5" style="width: 18rem;">
              <img src="./src/assets/Images/instagram.png" class="card-img-top" alt="Instagram">
              <div class="card-body">
              <h5 class="card-title">Instagram</h5>
              <p class="card-text">Mi instagram personal, usualmente no contesto por este medio pero pueden seguirme para ver un poco de lo que hago en mi vida.</p>
              <a href="https://www.instagram.com/bryan_fredy/?hl=es-la" class="btn btn-danger">Ir a mi Instagram</a>
              </div>
          </div>

          <div class="card ml-5" style="width: 18rem;">
              <img src="./src/assets/Images/twitter.png" class="card-img-top" alt="Twitter">
              <div class="card-body">
              <h5 class="card-title">Twitter</h5>
              <p class="card-text">Mi twitter personal, lo uso más para saber un poco del mundo, a menos de que sea algo de urgencia, no respondo por este medio.</p>
              <a href="https://twitter.com/JisusFre" class="btn btn-danger">Ir a mi Twitter</a>
              </div>
          </div>
      </div>

      <div class="row">
          <div class="card mr-5 mt-5" style="width: 18rem;">
              <img src="./src/assets/Images/gmail.png" class="card-img-top" alt="Gmail">
              <div class="card-body">
              <h5 class="card-title">Gmail</h5>
              <p class="card-text">Mi cuenta de gmail si quieren contactarme, estoy disponible de las 13:00 hrs hasta las 22:00 hrs, por este medio siempre respondo. jisusfre@gmail.com</p>
              </div>
          </div>

          <div class="card ml-5 mt-5" style="width: 18rem;">
              <img src="./src/assets/Images/hotmail.png" class="card-img-top" alt="Hotmail">
              <div class="card-body">
              <h5 class="card-title">Hotmail</h5>
              <p class="card-text">Mi cuenta de hotmail personalsi quieren contactarme, estoy disponible de las 13:00 hrs hasta las 22:00 hrs, por este medio siempre respondo. spique_2000@hotmail.com</p>
              
              </div>
          </div>

          <div class="card ml-5 mt-5" style="width: 18rem;">
              <img src="./src/assets/Images/lol.png" class="card-img-top" alt="League of legends">
              <div class="card-body">
              <h5 class="card-title">League of legends</h5>
              <p class="card-text">Mi cuenta de league of legends personal, si quieren jugar o echar un 1 vs 1, estoy disponible a partir de las 22:00 hrs en adelante.</p>
              <a href="https://www.leagueofgraphs.com/es/summoner/lan/Jisusfre" class="btn btn-danger">Ir a mi perfil de informacion de lol</a>
              </div>
          </div>
      </div>
  </div>

  <div class="container mt-5">
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="./src/assets/Images/facebook.png" class="d-block w-100" alt="Facebook">
          </div>
          <div class="carousel-item">
            <img src="./src/assets/Images/instagram.png" class="d-block w-100" alt="Instagram">
          </div>
          <div class="carousel-item">
            <img src="./src/assets/Images/twitter.png" class="d-block w-100" alt="Twitter">
          </div>
          <div class="carousel-item ">
            <img src="./src/assets/Images/lol.png" class="d-block w-100" alt="lol">
          </div>
          <div class="carousel-item ">
            <img src="./src/assets/Images/hotmail.png" class="d-block w-100" alt="lol">
          </div>
          
        </div>
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
  </div>`;
  return view;
}
export default contac;