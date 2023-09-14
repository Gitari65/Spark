import PropTypes from 'prop-types'
import { Navbar } from './assets/components/Navbar'
//import route,routes
import { Router, Route, Routes } from 'react-router-dom'
import { Aboutus , Contactus, Home } from './assets/components/pages'
function App()  {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<Aboutus />} />
        <Route path='/contact' element={<Contactus />} />
        <Route path='*' element={<h1>Not Found</h1>} /> 
      </Routes>
    </div>
  );
}

export default App;
