import React from "react";
import TrackItemActions from "../track-item-actions/track-item-actions.component";
import TrackItemInfo from "../track-item-info/track-item-info.component";
import './track-item.styles.scss';

const TrackItem = ({track}) => {
    return (
        <div className="track-item">
            <div className="track-item-container">
                <TrackItemActions track={track} />
                <TrackItemInfo track={track} />
            </div>
        </div>
    )
}

export default TrackItem;