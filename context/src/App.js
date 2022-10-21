import logo from './logo.svg';
import './App.css';
import A from './A';
import B from './B';
import Moviescontext from './Moviescontext';

function App() {
  return (
    <div className="App">

      <Moviescontext>
      <A/>
      <B/>
      </Moviescontext>
      
    </div>
  );
}

export default App;
