import React, { useState } from 'react';

const ConversorADNaARN = () => {
  const [entradaADN, setEntradaADN] = useState('');
  const [salidaARN, setSalidaARN] = useState('');
  const [mensajeError, setMensajeError] = useState('');

  const convertirADNaARN = (letraADN: string) => {
    switch (letraADN) {
      case "A":
        return "U";
      case "C":
        return "G";
      case "G":
        return "C";
      case "T":
        return "A";
      default:
        throw new Error("Entrada de ADN inválida.");
    }
  };

  const manejarConversion = () => {
    try {
      const cadenaARN = entradaADN
        .split("")
        .map((letra) => convertirADNaARN(letra))
        .join("");
      setSalidaARN(cadenaARN);
      setMensajeError('');
    } catch (error) {
      setSalidaARN('');
      setMensajeError('Error al convertir ADN a ARN.');
    }
  };

  return (
    <div>
      <h2>Convertidor de ADN a ARN</h2>
      <input
        type="text"
        value={entradaADN}
        onChange={(e) => setEntradaADN(e.target.value)}
        placeholder="Ingresa la secuencia de ADN"
      />
      <button onClick={manejarConversion}>Convertir</button>
      {salidaARN && <p>Resultado ARN: {salidaARN}</p>}
      {mensajeError && <p style={{ color: 'red' }}>{mensajeError}</p>}
    </div>
  );
};

export default ConversorADNaARN;
