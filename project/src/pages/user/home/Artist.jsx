import React from 'react';
import './Artist.scss'; // Create this file for styles

const Artist = () => {
  const popularArtists = [
    { 
      name: "Luna Ray", 
      followers: "3.2M", 
      genres: ["Pop", "R&B"],
      image: "https://cdn-images.dzcdn.net/images/cover/4b9be6cc41cd1f850120ac9f938ccba8/1900x1900-000000-80-0-0.jpg"
    },
    { 
      name: "Static Pulse", 
      followers: "2.8M", 
      genres: ["Electronic", "Dance"],
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    { 
      name: "Melody Masters", 
      followers: "4.1M", 
      genres: ["Jazz", "Soul"],
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    { 
      name: "Urban Legends", 
      followers: "5.6M", 
      genres: ["Hip-Hop", "Rap"],
      image: "https://m.media-amazon.com/images/M/MV5BZWNkZjQ1NzktNTlkZC00MDRiLWIzNjEtMmQwNDg5NzdjYTI5XkEyXkFqcGc@._V1_.jpg"
    },
    { 
      name: "Echo Valley", 
      followers: "2.4M", 
      genres: ["Indie", "Alternative"],
      image: "https://images.unsplash.com/photo-1501612780327-45045538702b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    { 
      name: "Rhythm Section", 
      followers: "1.9M", 
      genres: ["Rock", "Blues"],
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  // Featured artist (Luna Ray) from the popularArtists array
  const featuredArtist = popularArtists[0];

  return (
    <div className="page-container">
      <h1>Artists</h1>
      <div className="content-section">
        <div className="artists-spotlight">
          <h2>Artist of the Month</h2>
          <div className="featured-artist">
            <div className="artist-image">
              <img src={featuredArtist.image} alt={featuredArtist.name} />
            </div>
            <div className="artist-details">
              <h3>{featuredArtist.name}</h3>
              <p>{featuredArtist.followers} followers</p>
              <p>Known for her mesmerizing vocals and genre-bending music that combines elements of {featuredArtist.genres.join(" and ")}.</p>
              <button className="follow-button">Follow</button>
            </div>
          </div>
        </div>
        
        <h2>Popular Artists</h2>
        <div className="artists-grid">
          {popularArtists.map((artist, index) => (
            <div key={index} className="artist-card">
              <div className="artist-avatar">
                <img src={artist.image} alt={artist.name} />
              </div>
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