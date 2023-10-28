import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { goSearch } from "../reduxTools/searchSlice";
import { NavLink } from "react-router-dom";
import "./Css/SearchBox.css";

const Search = () => {
    const [search, setSearch] = useState("");
    const dispatch = useDispatch();

    // Define a callback function to handle form submission
    const submitevent = useCallback(() => {
        if (search === "") {
            return alert('Enter city or place name to continue');
        }
        // Dispatch an action using the Redux dispatch function to update the search state
        dispatch(goSearch(search));
        // Clear the search input field
        setSearch("");
    }, [search,dispatch]);

    return (
        <div className="searchComponent flex">
            <div className="navigation flex blur-background">
                {/* Define navigation links using React Router's NavLink */}
                <NavLink className="link" id="home" to="/">Home</NavLink>
                <NavLink className="link" id="forecast" to="/Forecast">Forecast</NavLink>
            </div>
            <div className="searchBox blur-background">
                <form onSubmit={(event) => { event.preventDefault() }}>
                    {/* Input element for searching with an onChange handler */}
                    <input
                        placeholder="Search city/place"
                        type="search"
                        value={search}
                        onChange={(e) => setSearch(String(e.target.value).toLowerCase())}
                        required
                    />
                    {/* Search button with an onClick handler to trigger the search */}
                    <i className="fa fa-search" aria-hidden="true" onClick={submitevent}></i>
                </form>
                <div>
                    {/* Additional content or functionality */}
                </div>
            </div>
        </div>
    );
};

export default Search;
