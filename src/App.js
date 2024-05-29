import './App.css';
import { useState } from 'react';
import UserInput from './components/InputForm';

function App() {

  // Component
  // State
  // props

  // Note application -> input -> text -> list render -> dynamically / realtime
  // search feature

  const [note, setNote] = useState('')
  const [allNotes, setAllNotes] = useState([])

  const addToList = (e) => {
    e.preventDefault();
    //spread operators
    setAllNotes((prevState) => [...prevState, note])
  }

  return (
    <div className="App">
      {/* 
       InputForm
      */}

      <UserInput
        sanish={note}
        sanishSetter={setNote}
        addToSanish={addToList}
      />



      {/* DisplayNotes */}


      {/* 1. Import Display form */}

      {/* 2. Render dispaly form */}
      {/* List */}
      <ul>
        {
          allNotes.map((item, index) =>
            <li key={index}>
              {item}
            </li>
          )
        }
      </ul>
    </div>
  );
}

export default App;
