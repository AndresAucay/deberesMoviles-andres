import React, { useState, useEffect } from 'react';

const TitleUpdater: React.FC = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Count: ${count}`;
    }, [count]); // Añadir todas las dependencias necesarias.

    return (
        <div>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}

export default TitleUpdater;
