import React from 'react';

interface MatrixProps {
  matrixString: string;
}

interface MatrixState {
  rows: number[][];
  columns: number[][];
}

const Matrix: React.FC<MatrixProps> = ({ matrixString }) => {
  const [matrixState, setMatrixState] = React.useState<MatrixState>({
    rows: [],
    columns: [],
  });

  React.useEffect(() => {
    const rows = matrixString.trim().split("\n").map(row => row.trim().split(" ").map(Number));
    const columns = rows.length > 0 ? rows[0].map((_, colIndex) => rows.map(row => row[colIndex])) : [];

    setMatrixState({ rows, columns });
  }, [matrixString]);

  return (
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
  );
};

export default Matrix;
