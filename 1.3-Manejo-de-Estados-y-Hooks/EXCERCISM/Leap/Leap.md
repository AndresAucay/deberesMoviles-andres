# Función EsBisiesto

La función `EsBisiesto` es una función que determina si un año dado es bisiesto o no 

## Parámetros

- `year`: Un número q representa el año q se va a verificar.

## Retorno

- `true`: Si el año es bisiesto 
- `false`: Si el año no es bisiesto

## Reglas para determinar si un año es bisiesto

Un año bisiesto ocurre en los siguientes casos:

1. En cada año q es divisible de manera exacta por 4.
2. A menos q el año sea divisible de manera exacta por 100, en cuyo caso solo será bisiesto si también es divisible de manera exacta por 400.

## Ejemplos

- `1997` no fue un año bisiesto ya q no es divisible de manera exacta por 4.
- `1900` no fue un año bisiesto ya q, aunque es divisible de manera exacta por 4, no es divisible de manera exacta por 400.
- `2000` fue un año bisiesto ya q es divisible de manera exacta por 400.

## Uso en el código

la función `EsBisiesto` toma un año como parámetro y devuelve `true` si el año es bisiesto según las reglas mencionadas anteriormente, y `false` si no lo es.
