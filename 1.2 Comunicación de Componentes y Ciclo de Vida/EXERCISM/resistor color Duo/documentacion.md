# Explicación del Código

## Funcionamiento del Código

El código proporcionado crea una aplicación que decodifica el valor de resistencia de un resistor basado en el color de las dos primeras bandas.

## Enumeración `ResistorValues`

- Define un enum llamado `ResistorValues` que asigna un valor numérico a cada color de banda de resistor.

## Función `decodedValue`

- La función `decodedValue` toma dos parámetros de tipo `Color`, que representan los colores de las dos primeras bandas del resistor.
- Devuelve un número que representa el valor de resistencia decodificado basado en los colores proporcionados.

## Componente `ResistorDecoder`

- Este componente es un Functional Component de React que muestra el valor decodificado del resistor.
- Ejecuta la función `decodedValue` con ejemplos de colores de bandas y muestra el resultado en la interfaz de usuario.

## Instrucciones del Ejercicio

El ejercicio proporciona un contexto sobre la construcción de un programa que traduzca los colores de las bandas de un resistor en su valor de resistencia. Se establece que los dos primeros colores determinan el valor de la resistencia.

## Solución del Problema

El código proporcionado implementa una solución al problema planteado en las instrucciones. Utiliza un enum para mapear los colores de las bandas de resistor a valores numéricos y una función para decodificar el valor de resistencia basado en los colores proporcionados.

El componente `ResistorDecoder` muestra un ejemplo del valor de resistencia decodificado en la interfaz de usuario.
