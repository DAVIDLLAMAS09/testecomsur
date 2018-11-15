# Frontend Technical Test :mag_right:

- [Requerimientos mínimos](#requerimientos-mínimos)
- [Correr la aplicación](#correr-aplicación)
- [Descripción del test](#descripción-del-test)
- [Reglas](#reglas-de-entrega)

## Requerimientos mínimos

- [Node 6.9.1][nodejs]

## Correr aplicación

- Correr Express

```shell
$ npm run dev
```

- Correr aplicación frontend con Webpack

```shell
$ npm run webpack
```

## Descripción del test

Se requiere implementar un carrito de compras simple, éste debe contar con dos secciones importantes:

- Una lista de ítems mostrando el catálogo de productos.
- Un carrito de compras que tenga todos los ítems que serán comprados por el usuario.

Las reglas del negocio son:

- Cada ítem del catálogo debe tener un action button con texto `Add item to cart`
- Cada ítem en el carro debe tener un action button con texto `Remove item from cart`

# DEMO

![](ecomsur-test.gif)

### Puntos extras

- Uso de Redux para el manejo de estados.
- Uso de `map`, `filter`, `reduce`, `forEach`.
- Uso de componentes funcionales en tu aplicación

# Recursos

[nodejs]: https://nodejs.org/en/download/


# Reglas de entrega

1. Documenta la resolución de tu problema en el archivo README.md, además,
indica detalladamente cómo instalar las dependencias o archivos necesarios para correr
tu aplicación.

2. Tu aplicación debe funcionar correctamente.

3. Si no puedes utilizar React, puedes resolver este test con Vanilla Javascript.

4. Por favor, no subas tu desarrollo a Github para hacer que el proceso de selección
sea más justo para todos. Envíanos tu proyecto en formato .zip al correo
`lliempi@ecomsur.com`


¡Mucho éxito! :muscle: