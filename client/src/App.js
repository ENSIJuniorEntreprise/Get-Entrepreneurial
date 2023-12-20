import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './Pages/Home/Home';
import Program from './Pages/Program/Program';
import Form from './Pages/formulaire/form';
import Collab from './Pages/collab/collab';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Spinner from './Components/Spinner/spinner';
import loader from './Assets/loader.png'
import './App.css'

function Loader() {
  return (
    <div className="loader">
      <Spinner></Spinner>
      <img src={loader} className='loaderImg'></img>
    </div>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating an asynchronous task (e.g., API call) that takes some time
    const fetchData = async () => {
      // Add your asynchronous logic here (e.g., fetching data)
      // For now, using a setTimeout to simulate loading time
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsLoading(false); // Set loading to false when done
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

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
