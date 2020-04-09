import React from 'react';

const Card = ({ name, link, id, date }) => {
    return (
        <div className="dib">
            <a href={link}>
                <nav className="card dib br4 pa2 ma3 grow bw2 shadow-5" >
                    <img className="img" src={`https://robohash.org/${id}?200x200`} alt="" />
                    
                    <div>
                        <h2>{name}</h2>
                        <p>{date}</p>
                    </div>
                </nav>
            </a>
        </div>
    );
}
export default Card;