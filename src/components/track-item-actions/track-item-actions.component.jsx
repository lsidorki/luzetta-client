import React from "react";
import './track-item-actions.styles.scss'

const TrackItemActions = ({track}) => {
    const {artist, title, imageUrl} = track;
    return (
        <div className="track-item-actions">
            <img src={imageUrl} className="cover" alt="cover" />
            <p><b>{artist}</b><br />{title}</p>
            <div className="action-button">GOTOWE</div>
        </div>
    )
}

export default TrackItemActions;