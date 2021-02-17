# prueba tecnica david llamas:

En el proyecto hay dos carpetas principales

-server
-client

separamos el backend(server) de la parte de front(client) para poder tner un mejor orden cuando se trabaje.



## Requerimientos mínimos

- [Node 12.16.1][nodejs]
- [npm 6.13.4][npm]

## instalar dependencias

antes de correr la aplicacion tenemos que instalar las dependenciar tanto del server como de client.

estando en el la carpeta testecomsur

navegamos a la carpeta client y luego a la carpeta ecomsurtestfront

estando en la raiz de la aplicacion de react instalamos las dependencias 

```shell
npm install
```

volviendo a la raiz de la carpeta testecomsur

ahora nos vamos a la carpeta de server e instalamos nuevamente las dependencias

```shell
npm install
```

## Correr aplicación

ya instaladas las dependencias y estando en la carpeta de server podemos correr tanto el front como el backend con un solo comando

```shell
npm run dev
```

podemos correr el back y front con comandos separados si asi se requiere

front 


```shell
npm run client
```

back 

```shell
npm run server
```



# DEMO

![](ecomsur-test.gif)

### Resolucion del problema

En base a los requerimientos de la prueba se opto por usar la libreria de reactjs 

-para parte de los estilos visuales se utilizo el framework de bootstrap

-para el manejo del estado global del carrito de compras opte por utilizar redux, ya que nos facilita mucho pasar los estados a cualquier componente  e 
igualmente poderlos actualizar.

-instalamos la dependencia de react-redux ya que nos provee de una conexion para quye podamos conectar con el componente y usar el store

el componente de Globalstate.js - contiene la inicializacion del los estados, obtener los datos del servidor y  de redux para que todos los componentes que  estan envueltas de este componente puedan tener disponible el store de redux

tenemos dos componentes principales :

ViewCartProducts.js en este componente nos dice si el carrito tiene algun producto asi mismo como el total segun los productos agregados, 
tambien en esta parte podemos ver lo que hay en el carrito dentro de un modal donde podemos removerlos del carrito y asi actualizando state para que podamos ver los
nuevos cambios.

ProductComponent.js en este componente consumimos la informacion del server para que podamos pintarlos individualmente en un otro componente hijo, en este componente
podemos agregar productos al carrito y ver toda la informacion de cada producto








