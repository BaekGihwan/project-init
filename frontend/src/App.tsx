import React, { useEffect, useState} from 'react';
import axios from "axios";
import './App.css';

function App() {
  const [data, setData] = useState('')

  useEffect(() => {
    axios.get('/api/hello')
        .then(response => setData(response.data))
        .catch(error => console.log(error))
  }, []);

  return (
    <div className="App">
      백엔드 데이터 : {data}
    </div>
  );
}

export default App;
