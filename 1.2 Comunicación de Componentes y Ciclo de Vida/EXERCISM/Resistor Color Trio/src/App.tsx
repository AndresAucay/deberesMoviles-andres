import React, { useState } from 'react';

function ConvertidorADNaARN() {
  const [entradaADN, setEntradaADN] = useState('');
  const [salidaARN, setSalidaARN] = useState('');
  const [mensajeError, setMensajeError] = useState('');

  const convertirLetra = (letraADN: any) => {
    switch (letraADN) {
      case "A": return "U";
      case "C": return "G";
      case "G": return "C";
      case "T": return "A";
      default: throw new Error("ADN de entrada no válido.");
    }
  };

  const aARN = (cadenaADN: string) => {
    const cadenaARN = cadenaADN
      .split("")
      .map((letra) => convertirLetra(letra))
      .join("");

    return cadenaARN;
  };

  const manejarConversion = () => {
    try {
      const resultadoARN = aARN(entradaADN.toUpperCase());
      setSalidaARN(resultadoARN);
      setMensajeError('');
    } catch (error) {
      setSalidaARN('');
      setMensajeError('ADN de entrada no válido.');
    }
  };

  return (
    <div>
      <h2>Convertidor de ADN a ARN</h2>
      <input
        type="text"
        value={entradaADN}
        onChange={(e) => setEntradaADN(e.target.value)}
        placeholder="Ingrese la secuencia de ADN"
      />
      <button onClick={manejarConversion}>Convertir</button>
      {salidaARN && <p>Salida ARN: {salidaARN}</p>}
      {mensajeError && <p style={{ color: 'red' }}>{mensajeError}</p>}
    </div>
  );
}

export default ConvertidorADNaARN;
