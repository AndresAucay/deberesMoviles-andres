import React, { useState, useEffect } from 'react';
import { Button, Typography } from 'antd';
import './Produccion.css'

const { Title, Text } = Typography;

const App = () => {
    const [production, setProduction] = useState(0);
    const [ganancias, setProfit] = useState(0);

    useEffect(() => {
        console.log("Production Counter Initialized");
    }, []);

    const increaseProduction = () => {
        const newProduction = production + 1;
        const newProfit = ganancias + 15; // 
        setProduction(newProduction);
        setProfit(newProfit);
    };

    return (
        <div className='targeta'>
            <Title level={2}> Conteo</Title>
            <div>
                <Text>Producción: {production}</Text>
                <br />
                <Text>Ganancia: ${ganancias }</Text>
            </div>
            <br />
            <Button className='btn'  type="primary" onClick={increaseProduction}>
                Incrementar Producción
            </Button>
        </div>
    );
}

export default App;
