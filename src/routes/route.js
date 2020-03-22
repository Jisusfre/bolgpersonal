import H from '../js/home'
import Error404 from '../js/error404'
import info from '../js/informacion'
import contac from '../js/contactos'

import getHash from '../utils/getHash'
import resolveRoutes from '../utils/resolveRoutes'

const routes = {
    "/": H,
    "/error404": Error404,
    "/informacionpersonal": info,
    "/contactos":contac
    
};

const router = async () => {
    const content = document.getElementById("xD");
    let hash = getHash();
    let route = await resolveRoutes(hash);
    let render = routes[route] ? routes[route] : Error404;
    content.innerHTML = await render();
 };

export default router;