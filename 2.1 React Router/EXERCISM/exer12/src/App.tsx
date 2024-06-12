
import React, { useState } from 'react';

const App: React.FC = () => {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    setResponse(hey(message));
  };

  const hey = (message: string): string => {
    if (!message.trim()) {
      return '¡Bien, sé de esa manera!';
    }
    if (message === message.toUpperCase()) {
      if (message.endsWith('?')) {
        return '¡Cálmate, sé lo que estoy haciendo!';
      }
      return '¡Vaya, relájate!';
    }
    if (message.endsWith('?')) {
      return 'Seguro.';
    }
    return 'Lo que sea.';
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={message} onChange={handleChange} />
        <button type="submit">Enviar</button>
      </form>
      <p>Respuesta: {response}</p>
    </div>
  );
};

export default App;