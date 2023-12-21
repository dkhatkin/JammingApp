import React from "react";
import "./Track.css"
function Track (props) {
    return (

        <div className="Track">
            <h3 className="TrackName">{props.track.title}</h3>
            <h4 className="TrackArtist">{props.track.artist}</h4>
            <h4>{props.track.album}</h4>
            <button></button>
        </div>
    )
}
export default Track;