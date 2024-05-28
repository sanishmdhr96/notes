import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

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
      {/* Form */}
      <form>
        {/* Create Input */}
        <input
          type='text'
          id='note'
          onChange={(event) => {
            setNote(event.target.value)
          }}
          value={note}
        />
        {/* Submit button */}
        <button
          onClick={addToList}
        >Submit</button>
      </form>


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
