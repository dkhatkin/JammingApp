import React from "react";
import "./Track.css";
function Track(props) {
  return (
    <div className="Track">
      <div className="TrackInfo">
        <h3 className="TrackName">{props.track.title}</h3>
        <h4 className="TrackArtistAlbum">
          {props.track.artist} | {props.track.album}
        </h4>
      </div>
      <button className="TrackButton">+</button>
    </div>
  );
}
export default Track;
