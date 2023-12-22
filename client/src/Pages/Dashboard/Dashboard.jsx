import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Dashboard() {
  const [inscriptions, setInscriptions] = useState([]);

  useEffect(() => {
    // Fetch inscriptions from the server
    axios.get('http://localhost:8000/inscription') // Assuming your API endpoint is '/api'
      .then((response) => {
        setInscriptions(response.data);
      })
      .catch((error) => {
        console.error('Error fetching inscriptions:', error);
      });
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <ul>
        {inscriptions.map((inscription) => (
          <li key={inscription._id}>{inscription.Email}</li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
