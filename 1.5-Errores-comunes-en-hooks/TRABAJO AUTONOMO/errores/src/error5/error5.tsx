import React, { useState, useEffect } from 'react';

interface FetchDataProps {
    url: string;
}

const FetchData: React.FC<FetchDataProps> = ({ url }) => {
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(url);
            const data = await result.json();
            setData(data);
        };
        fetchData();
    }, [url]); // `url` está en las dependencias.

    return (
        <div>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
}

export default FetchData;
/*5. Pasar dependencias incorrectas a useEffect
No actualizar el array de dependencias adecuadamente puede causar bugs difíciles de detectar.
*/