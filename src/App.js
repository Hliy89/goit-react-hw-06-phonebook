import React from 'react';
import style from './App.module.css';

import Phonebook from "./components/Phonebook";

function App() {
  return (
    <div className={style.App}>
      <Phonebook />
    </div>
  );
}

export default App;
