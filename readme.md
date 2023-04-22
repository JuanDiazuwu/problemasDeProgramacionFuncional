# Tarea | Problemas de Programación Funcional

Desarrollo Basado en Plataformas

## Unidad II

Conceptos Básicos de las Plataformas Web

## Instrucciones

Resolver los siguientes problemas usando Lambdas y funciones, subir la liga del proyecto de GitHub a moodle:

La empresa de abarrotes doña Julia tiene una lista de productos donde almacena la clave del producto, su descripción precio, clasificación, cantidad de existencia, existencia mínima y máxima. Doña Julia requiere generar varios reportes:

1.- Número de productos con existencia mayor a 20.
2.- Número de productos con existencia menos a 15.
3.- Lista de productos con la misma clasificación y precio mayor 15.50
4.- Lista de productos con precio mayor a 20.30 y menor a 45.00
5.- Número de productos agrupados por su clasificación

Cree un DAO para cargar la información de un archivo con 80 productos como mínimo.

## Lenguaje de Programación 

JavaScript (Node.js v18.13.0.)

## Autor

**Juan Antonio Díaz Fernández**

	Usuario: JuanDiazuwu

	Matricula: 348637

* Personal [Github](https://github.com/Fuan200/) 
* Escuela [Github](https://github.com/JuanDiazuwu)

## Funcionamiento

Este script cuenta con dos clases:
    `Product`: Cuenta con un constructor que moldea los datos del producto (`id, description, price, classification, existence, minimumExistence, maximumExistence`).
    `ProductDAO`: Permite leer el archivo `info.txt` que hace de "base de datos" para realizar operaciones sobre estos productos.

La clase `ProductDAO` tiene los siguientes métodos:

* `constructor(fileName)`: Crea una instancia apartir de el archivo `info.txt`.

* `showData()`: Muestra todos los productos `products`.

* `existenceGreaterThanTwenty()`: Número de productos con existencia mayor a 20.

* `existenceLessThanFifteen()`: Número de productos con existencia menos a 15.

* `sameClassificationAndHigherPriceFifteenPointFifty(classification)`: Lista de productos con la misma clasificación y precio mayor 15.50. Recibe como paramétro la clasificacion `classification` como un string.

`priceBetweenTwentyPointThirtyAndFortyFive()`: Lista de productos con precio mayor a 20.30 y menor a 45.00.

`groupedByTheirClassification()`: Número de productos agrupados por su clasificación.

## Instrucciones de Uso

Para utilizar este script, sigue los siguiente pasos:

* 1 .- Clona el repositorio en tu maquina local.

* 2 .- Abre una terminal en la raíz del repositorio clonado.

* 3 .- Asegurese de tener instalado node.js

* 4 .- Ejecutar el siguiente comando en la terminal:

```
node product.js
```

* 5 .- El código mostrará cinco operaciones diferentes que se pueden realizar con los datos, apartir de los métodos:

    existenceGreaterThanTwenty()

    existenceLessThanFifteen()

    sameClassificationAndHigherPriceFifteenPointFifty()

    priceBetweenTwentyPointThirtyAndFortyFive()
    
    groupedByTheirClassification()

Siéntete libre de clonar este repositorio y probar su funcionamiento. ¡Espero que te sea útil!