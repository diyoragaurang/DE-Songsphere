import React from 'react';
import './Genres.scss'; // You'll need to create this file for the styles

const Genres = () => {
  const genreList = [
    { 
      name: "Pop", 
      count: "12,453 songs",
      bgImage: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    { 
      name: "Rock", 
      count: "8,756 songs",
      bgImage: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    { 
      name: "Hip-Hop", 
      count: "9,234 songs",
      bgImage: "https://images.unsplash.com/photo-1547355253-ff0740f6e8c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    { 
      name: "R&B", 
      count: "5,678 songs",
      bgImage: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    { 
      name: "Electronic", 
      count: "7,890 songs",
      bgImage: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    { 
      name: "Jazz", 
      count: "3,456 songs",
      bgImage: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    { 
      name: "Classical", 
      count: "4,567 songs",
      bgImage: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    { 
      name: "Country", 
      count: "6,789 songs",
      bgImage: "https://images.unsplash.com/photo-1543699936-c901ddbf0c05?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="page-container">
      <h1>Music Genres</h1>
      <div className="content-section">
        <p>Explore music across different genres and discover new sounds from around the world.</p>
        
        <div className="genres-grid">
          {genreList.map((genre, index) => (
            <div 
              key={index} 
              className="genre-card"
              style={{ 
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${genre.bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <h3>{genre.name}</h3>
              <p>{genre.count}</p>
            </div>
          ))}
        </div>
        
        <div 
          className="genre-spotlight"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)), url(${genreList.find(genre => genre.name === "Electronic").bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            padding: '2rem'
          }}
        >
          <h2>Genre Spotlight: Electronic</h2>
          <p>From house to techno, trance to dubstep, dive into the electrifying world of electronic music.</p>
          <button className="explore-button">Explore Electronic</button>
        </div>
      </div>
    </div>
  );
};

export default Genres;