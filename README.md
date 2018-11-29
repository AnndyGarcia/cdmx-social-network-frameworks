# Rehaciendo Shero

## Preámbulo

[React](https://reactjs.org/), [Angular](https://angular.io/) y [Vue](https://vuejs.org/)
son algunos de los _frameworks_ y _librerías_ de JavaScript más utilizados por
lxs desarrolladorxs alrededor del mundo, y hay una razón para eso.
En el contexto del navegador, [_mantener la interfaz sincronizada con el estado
es difícil_](https://medium.com/dailyjs/the-deepest-reason-why-modern-javascript-frameworks-exist-933b86ebc445).
Al elegir un _framework_ o _librería_ para nuestra interfaz, nos apoyamos en una
serie de convenciones e implementaciones _probadas_ y _documentadas_ para
resolver un problema común a toda interfaz web. Esto nos permite concentrarnos
mejor (dedicar más tiempo) en las caractrísticas _específicas_ de
nuestra aplicación.

Cuando elegimos una de estas tecnologías no solo importamos un pedacito de
código para reusarlo (lo cuál es un gran valor per se), si no que adoptamos una
**arquitectura**, una serie de **principios de diseño**, un **paradigma**, unas
**abstracciones**, un **vocabulario**, una **comunidad**, ...

Como desarrolladora Front-end, estos kits de desarrollo pueden resultarte
de gran ayuda para implementar rápidamente características de los proyectos en
los que trabajes.

![caracoles](http://www.animated-photography.com/images/portfolio/full/Evolution.jpg)

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
  

![Inicio](https://github.com/LexHernandez/cdmx-2018-06-bc-core-am-social-network/blob/master/ux/images/sketch-desktop/Sketch-desktop%20(1).png)

![Inicio-registro](https://github.com/LexHernandez/cdmx-2018-06-bc-core-am-social-network/blob/master/ux/images/sketch-desktop/Sketch-desktop%20(3).png)

![Inicio-sesion](https://github.com/LexHernandez/cdmx-2018-06-bc-core-am-social-network/blob/master/ux/images/sketch-desktop/Sketch-desktop%20(2).png)

Sin embargo, en esta oportunidad de rehacer el proyecto, posiblemente haya más cambios visuales, que se estarán documentando.

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
