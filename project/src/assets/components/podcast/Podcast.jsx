import React from "react";
import "./Podcast.scss";

const Podcast = () => {
    return (
        <section className="podcast" style={{ padding: "10rem 0", borderRadius: "1rem" }}>
            <div className="container">
                <div className="podcast__wrapper">
                    <div className="podcast__image">
                        <img src="https://i.scdn.co/image/ab6765630000ba8a3bdbdb26160dd06ec7cade99" alt="" />
                    </div>
                    <div className="podcast__content">
                        <span>Podcast</span>
                        <h4 style={{ marginBottom: "1rem" }}>Virus 2062 With Ali Fazal & Richa Chacha(Hindi Audio Thriller Podcast)</h4>
                        <p>Spotify Studios</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Podcast
