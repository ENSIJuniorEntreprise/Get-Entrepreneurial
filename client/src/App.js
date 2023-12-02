import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Program from './Pages/Program/Program';
import Form from './Pages/formulaire/form';
import Collab from './Pages/collab/collab';
import { useEffect } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';



function App() {
 /* useEffect(() => {
    showLoader();
    addClass();
  }, []);

  const loader = document.querySelector(".loader");
  const showLoader = () => loader.classList.remove("loader");
  const addClass = () => loader.classList.add("loader-hide");*/

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/program" element={<Program />} />
          <Route path="/collab" element={<Collab />} />
          <Route path="/Register" element={<Form />} />
        </Routes>
       <Footer /> 
      </Router>
    </>
  );
}

export default App;

