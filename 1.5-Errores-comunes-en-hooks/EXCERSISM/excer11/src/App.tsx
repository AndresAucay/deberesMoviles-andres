import React, { useState } from "react";
import './App.css'

const esPangram = (paragraph: string): boolean => {
  return new Set(
    paragraph.toLowerCase().replace(/[^a-z]/g, "")
  ).size === 26;
};

const App: React.FC = () => {
  const [inputSentence, setInputSentence] = useState<string>("");
  const [isValidPangram, setIsValidPangram] = useState<boolean>(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputSentence(event.target.value);
  };

  const handleCheckPangram = () => {
    setIsValidPangram(esPangram(inputSentence));
  };

  return (
    <div>
      <h1>Validador de Pangramas</h1>
      <input
        type="text"
        value={inputSentence}
        onChange={handleInputChange}
        placeholder="Aqui va tu oracion..."
      />
      <button onClick={handleCheckPangram}>Verificar</button>
      {isValidPangram ? (
        <p>¡La oración es un pangrama!</p>
      ) : (
        <p>La oración no es un pangrama.</p>
      )}
    </div>
  );
};

export default App;
