import { useState } from 'react'
import { useEffect } from 'react';
import { BrowserRouter, Routes ,Route,useLocation } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ScaleLoader } from 'react-spinners'
import NavbarNav from './components/Navbar'
import Footer from './components/Footer'

import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import NotFound from './Pages/NotFound';



const App = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setLoading(true);

  const timer =   setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer)
  }, [location]);


  return (

    <BrowserRouter>
        {loading ? (
          <div className="spinner-container">
            <ScaleLoader color="#fdc800" height={100} loading={loading} margin={10} />
          </div>
        ) : (
          
          <>
          <Routes>
            <Route index element={<> <NavbarNav/> <Home /> <Footer/> </>} />
            <Route path='/about' element={<> <NavbarNav/> <About/> <Footer/> </>} />
            <Route path='/services' element={<> <NavbarNav /><Services /><Footer /> </>} />
            <Route path='/contact' element={<> <NavbarNav /><Contact /><Footer /> </>} />
            <Route path='*' element={<NotFound/>} />
          </Routes>
       
          </>
        )}
        </BrowserRouter>
  )

}
export default App
