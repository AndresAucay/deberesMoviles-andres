import React, { useState } from 'react';

const Counter: React.FC = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}

export default Counter;
/*No usar los Hooks correctamente fuera de componentes o funciones personalizadas
Los Hooks deben ser usados únicamente dentro de componentes de función de React o en Hooks personalizados.*/

