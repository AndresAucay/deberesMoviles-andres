    import React, { useState } from 'react';
import './calculadora.css'
    const CalculadoraPuntuacion: React.FC = () => {
    const [x, setX] = useState<string>('');
    const [y, setY] = useState<string>('');
    const [puntuacion, setPuntuacion] = useState<number | null>(null);

    const calcularPuntuacion = (x: number, y: number): number => {
        const puntoDardo = Math.sqrt(x * x + y * y);
        if (puntoDardo <= 1) {
        return 10;
        }
        if (puntoDardo <= 5) {
        return 5;
        }
        if (puntoDardo <= 10) {
        return 1;
        }
        return 0;
    };

    const manejarCalculo = (): void => {
        const xNum = parseFloat(x);
        const yNum = parseFloat(y);
        if (!isNaN(xNum) && !isNaN(yNum)) {
        setPuntuacion(calcularPuntuacion(xNum, yNum));
        } else {
        setPuntuacion(null);
        }
    };

    return (
        <div>
            <h3>Instrucciones</h3>
            <h1>Calculadora de Puntuación de Dardos</h1>
      <p>'Ingresa las coordenadas X & Y del punto donde has lanzado el dardo (solo imaginalo).</p>
      <p>Cada dardo lanzado se puntúa según su distancia al centro del objetivo:</p>
      <ul>
        <li>Si el dardo está dentro del círculo central (radio menor o igual a 1), obtienes 10 puntos.</li>
        <li>Si el dardo está dentro del círculo intermedio (radio menor o igual a 5), obtienes 5 puntos.</li>
        <li>Si el dardo está dentro del círculo externo (radio menor o igual a 10), obtienes 1 punto.</li>
        <li>Si el dardo está fuera del círculo externo, no obtienes puntos.</li>
      </ul>
    <hr />
        <div>
            <label>
            Coordenada X:
            <input
                type="number"
                value={x}
                onChange={(e) => setX(e.target.value)}
            />
            </label>
        </div>
        <div>
            <label>
            Coordenada Y:
            <input
                type="number"
                value={y}
                onChange={(e) => setY(e.target.value)}
            />
            </label>
        </div>
        <button onClick={manejarCalculo}>Calcular Puntuación</button>
        {puntuacion !== null && <div>Puntuación: {puntuacion}</div>}
        </div>
    );
    };

    export default CalculadoraPuntuacion;
