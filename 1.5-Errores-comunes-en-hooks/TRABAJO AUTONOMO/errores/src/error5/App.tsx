import React from 'react';
import FetchData from './error5';

const App: React.FC = () => {
    return (
        <div>
            <h1>Error 5: Dependencies in useEffect</h1>
            <FetchData url="https://api.example.com/data" />
        </div>
    );
}

export default App;
