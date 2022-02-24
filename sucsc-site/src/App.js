import './App.css';
import { Route, Routes } from 'react-router-dom';

import Home from './components/us/Home'
import Carson from './components/us/Carson'
import Dan from './components/us/Dan'
import Erika from './components/us/Erika'
import Ivan from './components/us/Ivan'
import Sabrina from './components/us/Sabrina'
import Eric from './components/us/Eric'
import Andres from './components/us/Andres'



function App() {
  return (
    <div className='App'>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/Carson' element={<Carson/>} />
        <Route exact path='/Dan' element={<Dan/>} />
        <Route exact path='/Erika' element={<Erika/>} />
        <Route exact path='/Ivan' element={<Ivan/>} />
        <Route exact path='/Sabrina' element={<Sabrina/>} />
        <Route exact path='/Eric' element={<Eric/>} />
        <Route exact path='/Andres' element={<Andres/>} />
      </Routes>
    </div>
  );
}

export default App;
