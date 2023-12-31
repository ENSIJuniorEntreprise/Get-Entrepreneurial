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
import LoginForm from './LoginForm';
import {AuthProvider } from './AuthContext';
import PrivateRoute from './PrivateRoute';

import './App.css'
import Dashboard from './Pages/Dashboard/Dashboard';

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
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsLoading(false);
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/program" element={<Program />} />
          <Route path="/login" element={<LoginForm />} />
          <Route element={<PrivateRoute />}>
                <Route element={<Dashboard/>} path="/Dash"/>
            </Route>
          <Route element={<Collab/>} path="/Collab"/>
          <Route path="/Register" element={<Form />} />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
}


export default App;