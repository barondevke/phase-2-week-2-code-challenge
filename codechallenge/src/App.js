
import { useState } from 'react';
import './App.css';
import BotCollection from './components/BotCollection';


function App() {
  const [data, setData] = useState([])
  fetch(' http://localhost:3000/bots')
    .then(res => res.json())
    .then(json => setData(json))


  return (
    <div className="App">

      <BotCollection data={data} />

    </div>
  );
}

export default App;
