

const Error404 = () => {
    location.hash = "/error404"
    const view = `
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary ">
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
        <h1 class="text-light">ERROR 404</h1>
        `
    return view;
}

export default Error404;