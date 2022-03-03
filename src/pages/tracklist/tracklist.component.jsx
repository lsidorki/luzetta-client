import React from "react";
import { useSelector } from "react-redux";
import TrackItem from "../../components/track-item/track-item.component";
import { selectUserTracklist } from "../../redux/tracklist/tracklist.selectors";
import './tracklist.styles.scss'

const TracklistPage = () => {
    const userTracklist = useSelector(selectUserTracklist);
    const {tracks} = userTracklist;
    return(
        <div className="tracklist-page">
            <h2 className="title">Tracklist page</h2>
            {
                tracks.map(track => <TrackItem key={track.id} track={track}/>)
            }
        </div>
    );
}

export default TracklistPage;