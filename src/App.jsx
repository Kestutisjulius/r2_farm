import { useState, useEffect } from 'react';
import './App.css';
import Create from './Components/Create';
import DataContext from './Components/DataContext';
import List from './Components/List';
import axios from 'axios';

function App() {

  const [animals, setAnimals] = useState([]);
  const [createAnimal, setCreateAnimal] = useState(null);

  useEffect(() =>{
    axios.get('http://localhost/php_farm_back/animals')
    .then(response => setAnimals(response.data, 1));
  },[]);

  useEffect(() =>{
/**
 *  axios.defaults.baseURL = 'http://localhost:3000';
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
 */
    if(null === createAnimal) return;
    axios.post('http://localhost/php_farm_back/animals')
    .then(response => console.log(response));
  },[createAnimal]);

  return (
<DataContext.Provider value={
  {
    animals, setCreateAnimal
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
