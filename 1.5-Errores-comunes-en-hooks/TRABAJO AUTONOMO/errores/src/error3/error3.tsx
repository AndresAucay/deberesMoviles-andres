import React, { useEffect } from 'react';

const IntervalExample: React.FC = () => {
    useEffect(() => {
        const timer = setInterval(() => {
            console.log('Tick');
        }, 1000);

        return () => clearInterval(timer); // Limpieza del intervalo.
    }, []);

    return <div>Check the console for interval logs</div>;
}

export default IntervalExample;
