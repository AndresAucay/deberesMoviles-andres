import React, { useState } from 'react';

const MatrixSolver: React.FC = () => {
  const [matrixInput, setMatrixInput] = useState<string>('');
  const [rows, setRows] = useState<string[]>([]);
  const [columns] = useState<string[][]>([]);

  const solveMatrix = () => {
    const matrixRows = matrixInput.trim().split('\n');
    const matrix = matrixRows.map(row => row.trim().split(/\s+/).map(Number));

    const calculatedColumns: string[][] = [];
    for (let i = 0; i < matrix[0].length; i++) {
      const column: string[] = [];
      for (let j = 0; j < matrix.length; j++) {
        column.push(matrix[j][i].toString());
      }
      calculatedColumns.push(column);
    }

    setRows(matrixRows.map(row => row.split(' ').join(', ')));
    
  };

  return (
    <div>
      <h2>Ingresar Matriz:</h2>
      <textarea
        value={matrixInput}
        onChange={(e) => setMatrixInput(e.target.value)}
        rows={5}
        cols={30}
      />
      <button onClick={solveMatrix}>Resolver</button>

      <div>
        <h2>Filas:</h2>
        <ul>
          {rows.map((row, index) => (
            <li key={index}>{row}</li>
          ))}
        </ul>
      </div>

      <div>
        <h2>Columnas:</h2>
        <ul>
          {columns.map((column, index) => (
            <li key={index}>{column}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MatrixSolver;
