import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Alert } from '@itwin/itwinui-react';
import { PetsService } from '../api';


function loadPets () {
  const pets = PetsService.listPets(10)
  .then(response => { return response})
  .then(text => {
    console.log(text);
  });
}

function App() {
  const [count, setCount] = useState(0)
  const [alert0, setAlert0] = useState ("This is an alert")


  const pets = PetsService.listPets(10)
  .then(response => { return response})
  .then(text => {
    console.log(text);
  });

  
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Alert.Wrapper className='demo-alert-wrapper'>
      <Alert.Icon />
      <Alert.Message>
        {alert0}
        <Alert.Action onClick={() => {console.log('Clicked more info!'); setAlert0("Ups..!"); } }>
          Learn more
        </Alert.Action>
      </Alert.Message>
      <Alert.CloseButton onClick={async () => { 

        console.log('CLOSED')
        setAlert0("reset")   
        console.log(pets)
        
        } }/>
    </Alert.Wrapper>
    </>
    
  )
}

export default App
