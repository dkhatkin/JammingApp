import React from "react";
import Track from "../Track/Track";

function SearchResults(props) {
  const songs = [
    { artist: 'AC/DC', title: 'Thunderstruck', album: "The Razors Edge" },
    { artist: 'Rammstein', title: 'Sonne', album: "Mutter" },
    { artist: 'Green Day', title: '21 Guns', album: "21st Century Breakdown" },
  ]
  return (
    <div className="SearchResults">
      <h2>Results: </h2>
      <div className="TrackList">
        {
          songs.map((track, index) => {
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
