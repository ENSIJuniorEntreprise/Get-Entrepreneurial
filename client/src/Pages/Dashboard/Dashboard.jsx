// Dashboard.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Dashboard.css'; // Import the CSS file

function Dashboard() {
  const [inscriptions, setInscriptions] = useState([]);

  useEffect(() => {
    // Fetch inscriptions from the server
    axios.get('http://localhost:8000/inscription')
      .then((response) => {
        setInscriptions(response.data);
      })
      .catch((error) => {
        console.error('Error fetching inscriptions:', error);
      });
  }, []);

  const handleCVClick = (filename) => {
    // Handle the click event, e.g., open a PDF viewer
    console.log(`Clicked on CV: ${filename}`);

    // You may want to implement a PDF viewer or open the CV in a new tab/window.
    // Example using window.open to open the CV in a new tab
    window.open(`http://localhost:8000/inscription/CV/${filename}`, '_blank');
  };

  const handleDeleteClick = (email) => {
    console.log(`Deleting entry with email: ${email}`);
    
    // You can send a request to your server to delete the entry with the specified email
    axios.delete('http://localhost:8000/inscription/single', {
      headers: {
        'Content-Type': 'application/json',
      },
      data: JSON.stringify({ email }),
    })
      .then((response) => {
        // Update the state after the deletion is successful
        setInscriptions(prevState => prevState.filter(inscription => inscription.Email !== email));
        console.log(`Deleted entry with email: ${email}`);
      })
      .catch((error) => {
        console.error('Error deleting entry:', error);
      });
  };
  
  

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <table className="inscription-table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Birthday</th>
            <th>Gender</th>
            <th>Region</th>
            <th>Status</th>
            <th>University</th>
            <th>Class</th>
            <th>Expertise</th>
            <th>Experience Level</th>
            <th>Sharing Permission</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {inscriptions.map((inscription) => (
            <tr key={inscription._id}>
              <td>{inscription.Nom} </td>
              <td>{inscription.Prenom}</td>
              <td>{inscription.Email}</td>
              <td>{inscription.Phone}</td>
              <td>{new Date(inscription.Birthday).toLocaleDateString()}</td>
              <td>{inscription.Genre}</td>
              <td>{inscription.Region}</td>
              <td>{inscription.Status}</td>
              <td>{inscription.Universite}</td>
              <td>{inscription.Classe}</td>
              <td>{inscription.DomaineExpertise}</td>
              <td>{inscription.NiveauExperience}</td>
              <td>{inscription.Partage ? 'Yes' : 'No'}</td>
              <td>
                <button  onClick={() => handleCVClick(inscription.CV)}>View CV</button>
                <button className="delete-button" onClick={() => handleDeleteClick(inscription.Email)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
