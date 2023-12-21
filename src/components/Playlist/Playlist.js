import React from "react";
import "./Playlist.css";
import Track from "../Track/Track";
import SearchResults from "../SearchResults/SearchResults";
function Playlist (props) {
    const songs = props.songs;
    return (
        <div className="Playlist">
      <input className="PlaylistName"/>
      <div className="PlaylistSongs">
        {
          songs.map((track, index) => {
            return (
              <Track key={index} track={track}/>
            )
          })
        }
      </div>
      <button className="PlaylistButton">SAVE TO SPOTIFY</button>
    </div>
    )
}
export default Playlist;