# Laboratorio Cloud - Github Pages manual

Configuramos la ruta relativa en vite.config.ts con base: './'

Cambiamos el BrowserRouter del app.router.tsx por HashRouter, para que Github Pages pueda manejar de forma correcta las rutas relativas

Hacemos una build

Creamos una rama que se llame gh-pages y en ella borramos todos los archivos a excepción de los de la build, que deben moverse de la carpeta dist a la raíz del proyecto

Hacemos push y ya tenemos nuestro Github Pages de forma manual
