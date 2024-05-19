# Documentación del Componente App
Es responsable de gestionar el estado del validador de pangramas.

## Funcionalidad

El componente `App` consta de las siguientes funcionalidades:

1. **Entrada de Orasión:** Un campo de entrada de texto donde los usuarios pueden ingresar una orasión que deseen verificar si es un pangrama.

2. **Botón de Verificasión:** Un botón que activa la función de verificación para determinar si la orasión ingresada es un pangrama.

3. **Resultado de la Verificación:** Se muestra un mensaje indicando si la orasión es un pangrama o no después de hacer clic en el botón de verificación.

## Componentes y Funciones

El componente utiliza las siguientes funciones y componentes:

- **useState:** Utilizado para definir y gestionar el estado del componente, incluida la oración ingresada por el usuario y el resultado de la verificasión.

- **handleInputChange:** Una función que se activa cuando el usuario introduce texto en el campo de entrada. Actualiza el estado de la orasión ingresada.

- **handleCheckPangram:** Una función que se activa cuando el usuario hace clic en el botón de verificasión. Utiliza la función `isPangram` para determinar si la orasión es un pangrama y actualiza el estado correspondiente.

- **isPangram:** Una función que verifika si una orasión es un pangrama. Toma la orasión como entrada y devuelve un valor booleano que indica si es un pangrama o no.
