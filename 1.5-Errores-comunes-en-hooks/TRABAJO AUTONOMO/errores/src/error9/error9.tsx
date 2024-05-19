import React, { useState } from 'react';

function fetchData() {
    return 42;
}

const InitialState: React.FC = () => {
    const [data, setData] = useState(() => fetchData()); // Usar una función para inicializar.

    return <div>Data: {data}</div>;
}

export default InitialState;
