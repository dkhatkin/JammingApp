import React from "react";
import Track from "../Track/Track";
import "./SearchResults.css"
function SearchResults(props) {

  return (
    <div className="SearchResults">
      <h2 className="SearchTitle">Results: </h2>
      <div className="TrackList">
        {
          props.songs.map((track, index) => {
            return (
              <Track key={index} track={track}/>
            )
          })
        }
      </div>
    </div>
  );
}

export default SearchResults;
