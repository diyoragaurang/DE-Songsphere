import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Card from "../../../assets/components/card/Card"
import "./Home.scss"
import './pages.scss';

// import axios from 'axios'
const Home = () => {

    const navigate = useNavigate();

    const cards = [
        {
            image: "https://i.scdn.co/image/ab67656300005f1f6ae9b356ad51a874a20b8aa9",
            show: "Chanakya Niti",
            author: "Kiran Chavda"
        },
        {
            image: "https://i.scdn.co/image/ab67656300005f1fe051a5ebc737377b77c6e2a9",
            show: "The Horror Show",
            author: "TMV Studio"
        },
        {
            image: "https://i.scdn.co/image/ab67656300005f1fa640450d0f9e4367ccf0fa8a",
            show: "Gopi Sudhakara",
            author: "Spotify Studios"
        },
        {
            image: "https://i.scdn.co/image/ab67656300005f1f3bdbdb26160dd06ec7cade99",
            show: "Virus 2062",
            author: "Spotify Studios"
        },
        {
            image: "https://i.scdn.co/image/ab67656300005f1f58e730e8341e29ca0f0671fe",
            show: "Pretkotha",
            author: "Gourab"
        }
    ];
    return (
        <>
            <main className="home">
                <section style={{ padding: "10rem 0" }}>
                    <div className="container">
                        <div>
                            <h2 className="title">
                                <Link className="type-link">Spotify original & exclusive shows</Link>
                            </h2>
                        </div>
                        <div style={{ margin: "2rem 0" }}>
                            <div className="home__card-wrapper">
                                {
                                    cards.map((card, index) => (
                                        <Card onClick={() => navigate("podcast/1")} key={index} image={card.image} show={card.show} author={card.author} />
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Home
