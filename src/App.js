import React, { useState } from 'react';
import axios from 'axios';

function App() {

  const [casos , setCasos] = useState([]);

  async function buscar () {
    const res = await axios.get(
      'https://covid19-brazil-api.now.sh/api/report/v1'
    );
    setCasos(res.data);
  }

  return (
    <div className="App">
      <button onClick={() => buscar()}>Carregar casos covid</button>
      <ul>
        {casos.map((caso, index) => {
          return <li key={index}>{caso.uf} {caso.cases}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
