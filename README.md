# Rehaciendo Shero

## Introducción

En este proyecto, he decidido rehacer [_Shero_](https://github.com/AnndyGrs/cdmx-2018-06-bc-core-am-social-network) usando el framework [_Angular_](https://angular.io/),  ya que para mí aprender un framework tan completo y complejo significa un reto que quiero superar,  para así poder aprender a usar muchas más nuevas tecnologías relacionadas o basadas en el mismo.

Para mí, rehacer _Shero_ usando Angular ha sido una experiencia única, ya que aprender a usarlo siguiendo todas las convenciones ha sido un reto: tener que aprender a hacer (y usar correctamente) los componentes, definir las rutas de redirección, crear aplicaciones web de una sola página (evitando el DRY),  ver lo tan conectado que está con _NodeJS_ y _npm_, etc. Sin embargo, pienso que,  a pesar de todos los retos y dificultades, he tenido un gran aprendizaje, y definitivamente _Angular_ me está gustando bastante.

## Lineamientos de Diseño

_Shero_ está pensado como una plataforma web, intuitiva y de diseño sencillo para que el usuario pueda usarla sin complicaciones.

Los primeros sketches de _Shero_ fueron los siguientes:

### Diseño Web


![inicio-registro](https://raw.githubusercontent.com/AnndyGarcia/cdmx-2018-06-bc-core-am-social-network/master/ux/images/sketch-desktop/Inicio-Registro.jpg)

![acerca-nosotras](https://raw.githubusercontent.com/AnndyGarcia/cdmx-2018-06-bc-core-am-social-network/master/ux/images/sketch-desktop/Acerca-de-nosotras.jpg)

![registro-adicional](https://raw.githubusercontent.com/AnndyGarcia/cdmx-2018-06-bc-core-am-social-network/master/ux/images/sketch-desktop/Registro-adicional.jpg)

![muro](https://raw.githubusercontent.com/AnndyGarcia/cdmx-2018-06-bc-core-am-social-network/master/ux/images/sketch-desktop/Muro.jpg)

![sidebar](https://raw.githubusercontent.com/AnndyGarcia/cdmx-2018-06-bc-core-am-social-network/master/ux/images/sketch-desktop/Sidebar.jpg)


### Mobile


![inicio](https://raw.githubusercontent.com/AnndyGarcia/cdmx-2018-06-bc-core-am-social-network/master/ux/images/sketch-mobile/Inicio.jpg)
![inicio-sesion](https://raw.githubusercontent.com/AnndyGarcia/cdmx-2018-06-bc-core-am-social-network/master/ux/images/sketch-mobile/Inicio-sesion.jpg)
![inicio-registro](https://raw.githubusercontent.com/AnndyGarcia/cdmx-2018-06-bc-core-am-social-network/master/ux/images/sketch-mobile/Registro.jpg)

![registro-adicional](https://raw.githubusercontent.com/AnndyGarcia/cdmx-2018-06-bc-core-am-social-network/master/ux/images/sketch-mobile/Registro-adicional.jpg)
![muro](https://raw.githubusercontent.com/AnndyGarcia/cdmx-2018-06-bc-core-am-social-network/master/ux/images/sketch-mobile/Muro.jpg)
![sidebar](https://raw.githubusercontent.com/AnndyGarcia/cdmx-2018-06-bc-core-am-social-network/master/ux/images/sketch-mobile/Sidebar.jpg)


El diseño final de _Shero_ fue el siguiente:
  

![inicio](https://user-images.githubusercontent.com/8524564/49235504-d30dcc00-f3bf-11e8-9155-fc3def8389fa.png)

![registro](https://user-images.githubusercontent.com/8524564/49235590-08b2b500-f3c0-11e8-8a98-59ca55370243.png)

![inicio-sesion](https://user-images.githubusercontent.com/8524564/49235575-fafd2f80-f3bf-11e8-927d-f07840061d54.png)

![muro](https://user-images.githubusercontent.com/8524564/49235603-136d4a00-f3c0-11e8-8cab-efc91fe09403.png)

![perfil](https://user-images.githubusercontent.com/8524564/49235617-1c5e1b80-f3c0-11e8-9f50-603394800116.png)

## Instalación

## Despliegue de la aplicación

## Checklist

### General

* [ ] Producto final sigue los lineamientos del diseño.

### `README.md`

* [ ] Información sobre instalación y despliegue de tu aplicación.

### Pruebas / tests

* [ ] Tests unitarios cubren un mínimo del 70% de statements, functions, lines,
  y branches.
* [ ] Pasa tests (y linters) (`npm test`).

### Creación de cuenta (sign up)

* [ ] Permite crear cuenta.
* [ ] Valida email.
* [ ] Valida password.
* [ ] Muestra mensajes de error.

### Inicio de sesión (sign in)

* [ ] Permite iniciar sesión.
* [ ] Valida email.
* [ ] Valida password.
* [ ] Muestra mensajes de error.

### Muro (wall/feed)

* [ ] Muestra _muro_.
* [ ] Permite publicar nuevos posts.
* [ ] Permite eliminar posts.
* [ ] Pide confirmación antes de borrar posts.
* [ ] Permite editar posts (in place).
* [ ] Permite filtrar posts por público/amigos.
* [ ] Permite marcar posts como _gustados_ (like).
