
## Cómo Funciona

1. **Ingresa tus Coordenadas**: Mete  números en los cuadros de "Coordenada X" y "Coordenada Y" para decirle a dónde lanzaste tu dardo.

2. **Dale al Botón**: haz clic en el botón "Calcular Puntuación" 

3. **Mira tus Puntos**: Después de darle al botón, la calculadora te dirá cuántos puntos ganaste.

## Cálculo de Puntuación

La calculadora mide la distancia desde el centro del objetivo hasta donde lanzasteel dardo, y te da puntos según esa distancia:

- Si estás bien cerca (a menos de 1 unidad de distancia), te dan 10 puntos.
- Si estás cerca pero no tanto (de 1 a 5 unidades), te dan 5 puntos.
- Si estás un poco más lejos (de 5 a 10 unidades), te dan 1 punto.
- Si estás muy lejos (a más de 10 unidades), no te dan nada 😢.

## Metodos

- **useState**: Pa guardar las coordenadas y la puntuación.
- **parseFloat**: Para convertir las coordenadas en números.
- **isNaN**: Paraver si las coordenadas son números válidos.
