import React from 'react';
import Card from './Card'

const CardList = ({ works }) => {
    return (
        <div>
            {works.map((user, i) => {
                return (
                    <Card
                        key={i}
                        id={works[i].id}
                        name={works[i].name}
                        link={works[i].link}
                        date={works[i].date}
                    />
                );
            })}
        </div>
    );
}
export default CardList;