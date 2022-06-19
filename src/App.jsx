import { useState, useEffect } from 'react';
import './App.css';
import Create from './Components/Create';
import DataContext from './Components/DataContext';
import List from './Components/List';
import axios from 'axios';

function App() {

  const [animals, setAnimals] = useState([]);
  useEffect(() =>{
    axios.get('http://localhost/php_farm_back/animals')
    .then(response => setAnimals(response.data));
  },[])

  return (
<DataContext.Provider value={
  {
    animals
  }
}>
  <div className="container">
    <div className="row">

      <Create/>
      <List/>  
      
    </div>
  </div>
  </DataContext.Provider>
  );
}

export default App;
