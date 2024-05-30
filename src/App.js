import './App.css';
import { useState } from 'react';
import UserInput from './components/InputForm';
import DisplayForm from './components/DisplayForm';

function App() {

  const [note, setNote] = useState('')
  const [allNotes, setAllNotes] = useState([])

  const addToList = (e) => {
    e.preventDefault();
    //spread operators
    setAllNotes((prevState) => [...prevState, note])
  }

  return (
    <div className="App">
      <UserInput
        sanish={note}
        sanishSetter={setNote}
        addToSanish={addToList}
      />

      <DisplayForm
        allNotes={allNotes}
      />
    </div>
  );
}

export default App;
