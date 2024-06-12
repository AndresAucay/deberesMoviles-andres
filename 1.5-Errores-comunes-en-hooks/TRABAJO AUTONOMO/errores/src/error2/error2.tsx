import React, { useState, useEffect } from 'react';

const Counter: React.FC = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('Component mounted');
    }, []); // Error: dependencias vacías

    return (
        <div>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}

export default Counter;
/* Olvidar dependencias en useEffect
No especificar las dependencias correctamente puede llevar a comportamientos inesperados.
*/