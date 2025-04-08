import React from 'react';

const Genres = () => {
  const genreList = [
    { name: "Pop", count: "12,453 songs" },
    { name: "Rock", count: "8,756 songs" },
    { name: "Hip-Hop", count: "9,234 songs" },
    { name: "R&B", count: "5,678 songs" },
    { name: "Electronic", count: "7,890 songs" },
    { name: "Jazz", count: "3,456 songs" },
    { name: "Classical", count: "4,567 songs" },
    { name: "Country", count: "6,789 songs" }
  ];

  return (
    <div className="page-container">
      <h1>Music Genres</h1>
      <div className="content-section">
        <p>Explore music across different genres and discover new sounds from around the world.</p>
        
        <div className="genres-grid">
          {genreList.map((genre, index) => (
            <div key={index} className="genre-card">
              <h3>{genre.name}</h3>
              <p>{genre.count}</p>
            </div>
          ))}
        </div>
        
        <div className="genre-spotlight">
          <h2>Genre Spotlight: Electronic</h2>
          <p>From house to techno, trance to dubstep, dive into the electrifying world of electronic music.</p>
          <button className="explore-button">Explore Electronic</button>
        </div>
      </div>
    </div>
  );
};

export default Genres;