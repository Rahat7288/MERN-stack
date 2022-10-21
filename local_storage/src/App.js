import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const[username, setusername]= useState('');
  const[language, setlanguage]= useState('');
  const[framework, setframework] =useState('');

  function saveLanguage(){
    var course={
      language:language,
      framework:framework,
    }

    localStorage.setItem('course',JSON.stringify(course))
  }

  function addtolocalstorage(){
    localStorage.setItem('username',username)

  }
  return (
    <div className="App">
      <h1>Local Storage</h1>

      <input type='text' placeholder= 'username' value={username} onChange={(e)=>{setusername(e.target.value)}}/>
      <br/>
      <button onClick={addtolocalstorage}>Add to Local Storage</button>

      <h1>the value user name in localstorage is {localStorage.getItem('username')}</h1>

      <br/>

      <h1>loacl storage with objects</h1>

      <input type='text' placeholder='language' value={language} onChange={(e)=>{setlanguage(e.target.value)}}/>
      <input type='text' placeholder='framework' value={framework} onChange={(e)=>{setframework(e.target.value)}}/>
      <button onClick={saveLanguage}>save</button>


    </div>
  );
}

export default App;
