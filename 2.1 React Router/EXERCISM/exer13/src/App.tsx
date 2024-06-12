// App.tsx
import React, { useEffect, useState } from 'react';

const App: React.FC = () => {
  const matrixString = "1 2 3 4\n 5 6 7 8 \n9 10 11 12";
  
  const [matrixState, setMatrixState] = useState<{
    rows: number[][];
    columns: number[][];
  }>({
    rows: [],
    columns: [],
  });

  useEffect(() => {
    const rows = matrixString.trim().split("\n").map(row => row.trim().split(" ").map(Number));
    const columns = rows.length > 0 ? rows[0].map((_, colIndex) => rows.map(row => row[colIndex])) : [];

    setMatrixState({ rows, columns });
  }, [matrixString]);

  return (
    <div>
      <h1>Matrix Component Example</h1>
      <div>
        <h2>Matrix Representation:</h2>
        <div>
          <h3>Rows:</h3>
          <ul>
            {matrixState.rows.map((row, index) => (
              <li key={index}>{row.join(", ")}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Columns:</h3>
          <ul>
            {matrixState.columns.map((col, index) => (
              <li key={index}>{col.join(", ")}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
