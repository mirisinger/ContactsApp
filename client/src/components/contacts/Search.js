import React from "react";

const Search = (props) => {
    const handleInputChange = (event) => {
        props.setSearchText(event.target.value);
    };

    return (
        <div className="search-input">
            <input type="text" placeholder="search in contacts..." onChange={handleInputChange} />
            <div className="search-icon">
                <i className="fa fa-search" aria-hidden="true"></i>
            </div>
        </div>
    );
};

export default Search;
