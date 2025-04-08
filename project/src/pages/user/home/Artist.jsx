import React from 'react';

const Artist = () => {
  const popularArtists = [
    { name: "Luna Ray", followers: "3.2M", genres: ["Pop", "R&B"] },
    { name: "Static Pulse", followers: "2.8M", genres: ["Electronic", "Dance"] },
    { name: "Melody Masters", followers: "4.1M", genres: ["Jazz", "Soul"] },
    { name: "Urban Legends", followers: "5.6M", genres: ["Hip-Hop", "Rap"] },
    { name: "Echo Valley", followers: "2.4M", genres: ["Indie", "Alternative"] },
    { name: "Rhythm Section", followers: "1.9M", genres: ["Rock", "Blues"] }
  ];

  return (
    <div className="page-container">
      <h1>Artists</h1>
      <div className="content-section">
        <div className="artists-spotlight">
          <h2>Artist of the Month</h2>
          <div className="featured-artist">
            <div className="artist-image"></div>
            <div className="artist-details">
              <h3>Luna Ray</h3>
              <p>3.2M followers</p>
              <p>Known for her mesmerizing vocals and genre-bending music that combines elements of pop and R&B.</p>
              <button className="follow-button">Follow</button>
            </div>
          </div>
        </div>
        
        <h2>Popular Artists</h2>
        <div className="artists-grid">
          {popularArtists.map((artist, index) => (
            <div key={index} className="artist-card">
              <div className="artist-avatar"></div>
              <h3>{artist.name}</h3>
              <p>{artist.followers} followers</p>
              <p>{artist.genres.join(", ")}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Artist;