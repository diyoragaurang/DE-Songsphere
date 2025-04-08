import React from 'react';
import './Albums.scss'; // Don't forget to create this file for styles

const Albums = () => {
  const featuredAlbums = [
    { 
      title: "Midnight Memories", 
      artist: "The Night Owls", 
      year: "2024", 
      image: "https://i.ytimg.com/vi/bkx9kCdaaMg/maxresdefault.jpg" 
    },
    { 
      title: "Sunrise Serenade", 
      artist: "Morning Glory", 
      year: "2023", 
      image: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
    },
    { 
      title: "Urban Echoes", 
      artist: "City Sounds", 
      year: "2024", 
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
    },
    { 
      title: "Wilderness", 
      artist: "Nature's Call", 
      year: "2022", 
      image: "https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
    },
    { 
      title: "Digital Dreams", 
      artist: "Cyber Collective", 
      year: "2024", 
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
    },
    { 
      title: "Acoustic Sessions", 
      artist: "Unplugged", 
      year: "2023", 
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
    }
  ];

  return (
    <div className="page-container">
      <h1>Albums Collection</h1>
      <div className="content-section">
        <h2>Featured Albums</h2>
        <div className="albums-grid">
          {featuredAlbums.map((album, index) => (
            <div key={index} className="album-card">
              <div className="album-cover">
                <img src={album.image} alt={`${album.title} by ${album.artist}`} />
              </div>
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
                <div className="release-cover">
                  <img src={album.image} alt={`${album.title} by ${album.artist}`} />
                </div>
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