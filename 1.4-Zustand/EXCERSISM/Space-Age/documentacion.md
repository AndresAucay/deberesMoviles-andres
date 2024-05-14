# Función CalculadoraEdadEnPlanetas

La función `CalculadoraEdadEnPlanetas` calcula la edad de una persona en años terrestres y en otros planetas del sistema solar, dada una cantidad de segundos desde su nacimiento.

## Parámetros

- `segundos`: Un número entero que representa la cantidad de segundos desde el nacimiento de la persona.

## Retorno

La función devuelve un objeto con las edades de la persona en años terrestres y en cada uno de los planetas del sistema solar.

## Detalles de Implementación

La función divide los segundos proporcionados entre la duración de un año en segundos en la Tierra (`Año_Espacial`) y luego multiplica el resultado por la proporción orbital de cada planeta en relación con la Tierra. Finalmente, redondea el resultado a dos decimales.

## Uso en el código

En el código proporcionado, la función `CalculadoraEdadEnPlanetas` toma la cantidad de segundos como parámetro y devuelve un objeto con la edad de la persona en cada planeta del sistema solar, calculada según las reglas mencionadas anteriormente.


Andres AucAY