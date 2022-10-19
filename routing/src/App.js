
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';

import {BrowserRouter, Route, Routes, Switch} from 'react-router-dom';

function App() {

  return (
    
    
      <div className="App">
        <BrowserRouter>
        <Navbar/>

        <Routes>
          <Route index element = {<Home/>}/>
          <Route path='/aboutus' element = {<AboutUs/>}/>
          <Route path='/contactus' element = {<ContactUs/>}/>
        </Routes>
        </BrowserRouter>
        

      </div>
    
    
  );
}

export default App;
