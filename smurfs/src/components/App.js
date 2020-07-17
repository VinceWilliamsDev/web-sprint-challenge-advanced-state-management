import React, { useState, useEffect } from "react";
import axios from 'axios'

import { SmurfsContext } from '../contexts/smurfsContext'
import SmurfsList from './smurfsList'
import SmurfForm from './smurfForm'
import "./App.css";


const App = () => {

const [smurfs, setSmurfs ] = useState([]) 
// console.log(smurfs)

useEffect(() => {
    axios
        .get('http://localhost:3333/smurfs')
        .then(res => {
            console.log(res.data.age)
            setSmurfs(res.data)
        })
        .catch(err => console.log(err))
}, [])



const postSmurf = smurfData => {
  console.log(smurfData)
  axios
    .post('http://localhost:3333/smurfs', smurfData)
    .then(res => {
      console.log(res)
    })
    .catch(err => console.log(err))

}



    return (
      <SmurfsContext.Provider value={{smurfs, postSmurf}}>
        <div className="App">
          <h1>SMURFS! 2.0 W/ Context API</h1>
          <SmurfForm />
          <SmurfsList />
        </div>
      </SmurfsContext.Provider>
    );
}

export default App;
