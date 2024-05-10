import React, { useState } from 'react';
import './App.css'

function ConversorADNAR() {
  const [entradaADN, setEntradaADN] = useState('');
  const [salidaARN, setSalidaARN] = useState('');
  const [mensajeError, setMensajeError] = useState('');

  const convertirADNaARN = (entradaADN: string | any[]) => {
    let salidaARN = '';
    for (let i = 0; i < entradaADN.length; i++) {
      const letraADN = entradaADN[i].toUpperCase();
      let letraARN = '';
      switch (letraADN) {
        case "A":
          letraARN = "U";
          break;
        case "C":
          letraARN = "G";
          break;
        case "G":
          letraARN = "C";
          break;
        case "T":
          letraARN = "A";
          break;
        default:
          throw new Error("ADN de entrada no válido.");
      }
      salidaARN += letraARN;
    }
    return salidaARN;
  };

  const manejarConversion = () => {
    try {
      const resultadoARN = convertirADNaARN(entradaADN);
      setSalidaARN(resultadoARN);
      setMensajeError('');
    } catch (error) {
      setSalidaARN('');
      setMensajeError('ADN de entrada no válido.');
    }
  };

  return (
    <div className='contenedor'>
      <h2>Conversor de ADN a ARN</h2>
      <input
        type="text"
        value={entradaADN}
        onChange={(e) => setEntradaADN(e.target.value)}
        placeholder="Ingresa la secuencia de ADN"
      />
      <button onClick={manejarConversion}>Convertir</button>
      {salidaARN && <p>Salida ARN: {salidaARN}</p>}
      {mensajeError && <p style={{ color: 'red' }}>{mensajeError}</p>}
    </div>
  );
}

export default ConversorADNAR;
