import { useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {

  const[items, setItems] = useState([]);

  useEffect(() => {
    new Promise((todoBien, todoMal) => {
      setTimeout(() => {
        todoBien(['imagen','Producto','Precio','Contador'])
      },2000);
    }).then(resultado => setItems(resultado))
  });

  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer items={items} />
    </div>
  );
}

export default App;
