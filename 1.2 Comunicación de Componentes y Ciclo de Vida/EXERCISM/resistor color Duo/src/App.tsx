import './App.css';


const EsBisiesto = ({ year }: { year: number }) => {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  } else {
    return false;
  }  
};

function App() {
  const year = 2000; 

  return (
    <div className='card'>
      <div className='cont'>
        <h2>Verificador</h2>
        <p>Año: {year}</p>
      <p>¿Es bisiesto?: {EsBisiesto({ year }) ? 'Sí' : 'No'}</p>
      </div>
    </div>
  );
}

export default App;
