import React, { useState, useEffect } from 'react';

const ConditionalUpdate: React.FC = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (count === 0) {
            setCount(10); // Asegurarse que esto no cause un bucle infinito.
        }
    }, [count]);

    return (
        <div>
            <p>{count}</p>
            <button onClick={() => setCount(0)}>Reset to 0</button>
        </div>
    );
}

export default ConditionalUpdate;
