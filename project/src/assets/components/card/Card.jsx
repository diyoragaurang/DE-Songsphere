import React from 'react';
import "./Card.scss";
import { Link } from 'react-router-dom';
const Card = (props) => {
    const { image, show, author, onClick } = props;
    return (
        <div className="card" onClick={onClick}>
            <div className="card__image">
                <img src={image} alt="" />
            </div>
            <div className="card__content">
                <div>
                    <Link to={"podcast"} className="individual-link">{show}</Link>
                    <span className="author">{author}</span>
                </div>
            </div>
        </div>
    )
}

export default Card
