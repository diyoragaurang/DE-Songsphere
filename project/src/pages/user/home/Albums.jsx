import React from 'react';

const Albums = () => {
  const featuredAlbums = [
    { title: "Midnight Memories", artist: "The Night Owls", year: "2024" },
    { title: "Sunrise Serenade", artist: "Morning Glory", year: "2023" },
    { title: "Urban Echoes", artist: "City Sounds", year: "2024" },
    { title: "Wilderness", artist: "Nature's Call", year: "2022" },
    { title: "Digital Dreams", artist: "Cyber Collective", year: "2024" },
    { title: "Acoustic Sessions", artist: "Unplugged", year: "2023" }
  ];

  return (
    <div className="page-container">
      <h1>Albums Collection</h1>
      <div className="content-section">
        <h2>Featured Albums</h2>
        <div className="albums-grid">
          {featuredAlbums.map((album, index) => (
            <div key={index} className="album-card">
              <div className="album-cover"></div>
              <div className="album-info">
                <h3>{album.title}</h3>
                <p>{album.artist}</p>
                <span className="album-year">{album.year}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="new-releases">
          <h2>New Releases</h2>
          <div className="release-list">
            {featuredAlbums.slice(0, 3).map((album, index) => (
              <div key={index} className="release-item">
                <div className="release-cover"></div>
                <div className="release-info">
                  <h4>{album.title}</h4>
                  <p>{album.artist}</p>
                </div>
                <button className="play-button">Play</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Albums;