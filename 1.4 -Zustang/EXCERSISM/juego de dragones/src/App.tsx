import React, { useState } from 'react';

const GeneradorPersonajeDnD = () => {
  const [personaje, setPersonaje] = useState({
    fuerza: 0,
    destreza: 0,
    constitucion: 0,
    inteligencia: 0,
    sabiduria: 0,
    carisma: 0,
    generado: false,
  });

  const generarHabilidades = () => {
    const habilidades = {
      fuerza: generarValor(),
      destreza: generarValor(),
      constitucion: generarValor(),
      inteligencia: generarValor(),
      sabiduria: generarValor(),
      carisma: generarValor(),
    };
    return habilidades;
  };

  const generarValor = () => {
    return Math.floor(Math.random() * 18) + 1;
  };

  const generarPersonaje = () => {
    const habilidades = generarHabilidades();
    setPersonaje({ ...habilidades, generado: true });
  };

  return (
    <div>
      <h1>Generador de Personajes</h1>
      <button onClick={generarPersonaje}>Generar</button>
      {personaje.generado && (
        <div>
          <h2>Habilidades</h2>
          <ul>
            <li>Fuerza: {personaje.fuerza}</li>
            <li>Destreza: {personaje.destreza}</li>
            <li>Constitución: {personaje.constitucion}</li>
            <li>Inteligencia: {personaje.inteligencia}</li>
            <li>Sabiduría: {personaje.sabiduria}</li>
            <li>Carisma: {personaje.carisma}</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default GeneradorPersonajeDnD;
