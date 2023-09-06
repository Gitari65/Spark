import PropTypes from 'prop-types'
import { Navbar } from './Navbar'
//import route,routes
import { Router, Route, Routes } from 'react-router-dom'
import { Aboutus } from './Aboutus'
import { Contactus } from './Contactus'
import { Home } from './Home'


function App()  {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<Aboutus />} />
        <Route path='/contact' element={<Contactus />} />
      </Routes>
    </div>
  );
}

export default App;
