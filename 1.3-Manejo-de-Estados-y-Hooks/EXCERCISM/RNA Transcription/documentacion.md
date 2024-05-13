# Función ConversorADNAR

La función `ConversorADNAR` es una función que convierte una secuencia de ADN en su complemento de ARN, siguiendo las reglas del código genético.

## Parámetros

- `entradaADN`: Una cadena de texto que representa la secuencia de ADN que se va a convertir.

## Retorno

- Una cadena de texto q representa la secuencia de ARN complementaria a la secuencia de ADN proporcionada.

# Reglas para la conversión de ADN a ARN

Las reglas para la conversión de una secuencia de ADN a su complemento de ARN son las siguientes:

- `G` en ADN se convierte en `C` en ARN.
- `C` en ADN se convierte en `G` en ARN.
- `T` en ADN se convierte en `A` en ARN.
- `A` en ADN se convierte en `U` en ARN.

## Ejemplo

Si se proporciona la secuencia de ADN `"GCTA"`, la función devolverá la secuencia de ARN `"CGAU"`.

## Uso en el código

En el código proporcionado, la función `ConversorADNAR` toma la secuencia de ADN como entrada y devuelve la secuencia de ARN correspondiente, aplicando las reglas de conversión mencionadas anteriormente.
