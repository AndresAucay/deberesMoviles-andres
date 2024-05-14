import React, { useState } from 'react';

const Año_Espacial = 31557600;
const planetas = [
  { nombre: 'Tierra', proporcion: 1.0 },
  { nombre: 'Mercurio', proporcion: 0.2408467 },
  { nombre: 'Venus', proporcion: 0.61519726 },
  { nombre: 'Marte', proporcion: 1.8808158 },
  { nombre: 'Jupiter', proporcion: 11.862615 },
  { nombre: 'Saturno', proporcion: 29.447498 },
  { nombre: 'Urano', proporcion: 84.016846 },
  { nombre: 'Neptuno', proporcion: 164.79132 }
];

function App() {
  const [segundos, setSegundos] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSegundos(Number(e.target.value));
  };

  return (
    <div>
      <h1>Calculadora de Edad en Otros Planetas</h1>
      <div>
        <label>Segundos:</label>
        <input type="number" value={segundos} onChange={handleChange} />
      </div>
      {segundos > 0 && (
        <div>
          <h2>Edad en otros planetas:</h2>
          <ul>
            {planetas.map((planeta) => (
              <li key={planeta.nombre}>
                {planeta.nombre}: {(segundos / Año_Espacial / planeta.proporcion).toFixed(12)} años
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
