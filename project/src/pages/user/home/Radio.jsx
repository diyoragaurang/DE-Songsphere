import React from 'react';
import './Radio.scss'; // Create this file for styles

const Radio = () => {
  const stations = [
    { 
      name: "Chill Beats FM", 
      listeners: "24,523", 
      category: "Lo-fi & Chill",
      image: "https://cdn-images.dzcdn.net/images/cover/4b9be6cc41cd1f850120ac9f938ccba8/1900x1900-000000-80-0-0.jpg"
    },
    { 
      name: "Classic Rock 101", 
      listeners: "18,756", 
      category: "Rock",
      image: "/api/placeholder/400/320"
    },
    { 
      name: "Hip-Hop Nation", 
      listeners: "32,145", 
      category: "Hip-Hop",
      image: "/api/placeholder/400/320"
    },
    { 
      name: "Jazz Café", 
      listeners: "12,678", 
      category: "Jazz",
      image: "/api/placeholder/400/320"
    },
    { 
      name: "Electric Avenue", 
      listeners: "26,890", 
      category: "Electronic",
      image: "/api/placeholder/400/320"
    },
    { 
      name: "Country Roads", 
      listeners: "15,432", 
      category: "Country",
      image: "/api/placeholder/400/320"
    }
  ];

  // Currently playing station from the stations array
  const currentStation = stations[0];

  return (
    <div className="page-container">
      <h1>Radio Stations</h1>
      <div className="content-section">
        <div className="now-playing">
          <h2>Currently Playing</h2>
          <div className="player-card">
            <div className="station-logo">
              <img src={currentStation.image} alt={currentStation.name} />
            </div>
            <div className="station-info">
              <h3>{currentStation.name}</h3>
              <p className="playing-now">"Moonlight Sonata (Lo-fi Remix)" by BeatMaster</p>
              <div className="player-controls">
                <button className="control-button">Previous</button>
                <button className="play-pause-button">Pause</button>
                <button className="control-button">Next</button>
              </div>
            </div>
          </div>
        </div>
        
        <h2>Popular Stations</h2>
        <div className="stations-grid">
          {stations.map((station, index) => (
            <div key={index} className="station-card">
              <div className="station-icon">
                <img src={station.image} alt={station.name} />
              </div>
              <div className="station-details">
                <h3>{station.name}</h3>
                <p>{station.category}</p>
                <p>{station.listeners} listeners</p>
              </div>
              <button className="tune-in-button">Tune In</button>
            </div>
          ))}
        </div>
        
        <div className="create-station">
          <h2>Create Your Own Station</h2>
          <p>Start your own radio station based on your favorite artists or songs.</p>
          <button className="create-button">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Radio;