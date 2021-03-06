import React from 'react';

const SearchBox = ({ searchChange }) => {
    return (
        <div className="pa2">
            <input
                className="pa3 search"
                type='search'
                placeholder='Navigation on my Works...'
                onChange={searchChange}
            />
            
        </div>
    );
}
export default SearchBox;