import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { goSearch } from "../reduxTools/searchSlice";
import { NavLink } from "react-router-dom";
import "./Css/SearchBox.css";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const Search = () => {
    const [search, setSearch] = useState("");
    const dispatch = useDispatch();

    // Define a callback function to handle form submission
    const submitevent = useCallback(() => {
        if (search === "") {
            // Display an alert if the search input is empty
            return alert('Enter city or place name to continue');
        }
        // Dispatch an action using the Redux dispatch function to update the search state
        dispatch(goSearch(search));
        // Clear the search input field
        setSearch("");
    }, [search, dispatch]);

    // Set up speech recognition
    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition,
        isMicrophoneAvailable
    } = useSpeechRecognition();

    // Use an effect to handle changes in the transcript (speech recognition results)
    useEffect(() => {
      
    
        // Dispatch an action to update the search state with the transcribed text
        if (transcript !== "" && transcript !== null) {
            dispatch(goSearch(transcript));

        }
      }, [transcript, dispatch]);
      
return (
    <div className="searchComponent flex" style={{ position: "relative" }}>
        <div className="navigation flex blur-background">
            {/* Define navigation links using React Router's NavLink */}
            <NavLink className="link" id="home" to="/"><i className="fa fa-home"></i> Home</NavLink>
            <NavLink className="link" id="forecast" to="/<i class="fa-regular fa-cloud-bolt-sun"></i>Forecast</NavLink>
        </div>
        <div className="searchBox blur-background">
            <form onSubmit={(event) => { event.preventDefault() }}>
                {/* Input element for searching with an onChange handler */}
                {(!listening) ? <input
                    placeholder="Search city/place"
                    type="search"
                    value={search}
                    onChange={(e) => { SpeechRecognition.stopListening(); setSearch(String(e.target.value).toLowerCase()) }}
                    required
                /> : <input
                    placeholder="listening....👂"
                    type="search"
                    value={(!isMicrophoneAvailable) ? ":(Access decline!" : transcript} disabled />}
                {/* Buttons for controlling speech recognition and search */}
                {(!listening) ? <i className="fa fa-microphone" onClick={SpeechRecognition.startListening} /> : <i className="fa fa-circle" onClick={SpeechRecognition.stopListening} style={{ color: "red" }}></i>}
                <i className="fa fa-search" aria-hidden="true" onClick={submitevent}></i>
                <span className="toolTips">search</span>
            </form>
            <div>
                {/* Additional content or functionality can be placed here */}
            </div>
        </div>
    </div >
);
};

export default Search;
