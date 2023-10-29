# practicaFrontEndjs
Práctica Desarrollo de Front End con JS para el bootcamp Full Stack 2023 Keep Coding

## Instalación
- Clonar el repositorio
```sh
git clone https://github.com/CarlosNauzet/practicaFrontEndJS.git
cd practicaFrontEndJS
```
- Inicializar BBDD - He dejado una copio de la db. con varios productos creados:
- Usuario: Nauzet
- contraseña: 1234
- Inciar la aplicación
 ```sh
npx live-server
```

## Funcionalidad API
### Endpoints
-http://127.0.0.1:8080/ -> listado todos los productos disponibles tanto en venta como para comprar.

-http://127.0.0.1:8080/signup.html -> formulario para darse de alta como usuario, redirecciona a login.

-http://127.0.0.1:8080/login.html -> formulario para loguearse, redirecciona a la página de listado de productos.

-http://127.0.0.1:8080/createproducts.html -> formulario para crear productos, solo disponible si estás logueado.

-http://127.0.0.1:8080/product-detail.html?id= -> para borrar los productos por medio de la clave primaria id. 
La boción de borrado Se hace por medio del botón que solo aparece si el usario que lo creo está loguedo.


### Validaciones: 
Realizadas las validaciones desde formularios para uqe los campos email, nombre, imagen, ect reciban el valor adecuado.
- Para que el password hay un límite de 4 para facilitar el testeo.
- Las opciones de create porduct y el botón de borrados solo salen si el suario está logueado.
- Si el usario no sube foto al crear el producto, colocamos una imagen de archivo de no img.
- Para el campo 'precio', un min/max required para limitar unas cantidades máximas y mínimas:


## Vista
-He metido Bootstrap a última hora por adecentar un poco el frontal porque se me venía el deadline encima.
-Me he centrado más en hacer que funcionara y entender la asíncronia de las funciones y el js.

### Conclusión

He aprendido muchísimo con esta práctica y en general con las clases. Al principio me costó mucho pillar el ritmo y ahora me siento que finalmente lo voy pillando. 
Ha habido momentos muy fustrantes, pero valió la pena el aprendizaje.
¡Gracias por toda tu paciencia profe! 😉

