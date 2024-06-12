import React, { useState } from 'react';

const Counter: React.FC = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(prevCount => prevCount + 1); // Uso de la función de estado previo.
    };

    return (
        <div>
            <p>{count}</p>
            <button onClick={increment}>Increment</button>
        </div>
    );
}

export default Counter;
/*. No manejar bien los estados derivados
Actualizar el estado directamente sin considerar el estado anterior puede llevar a inconsistencias.
*/