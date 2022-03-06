import React from "react";
import { useSelector } from "react-redux";
import CustomButton from "../../components/custom-button/custom-button.component";
import TrackItem from "../../components/track-item/track-item.component";
import { selectUserTracklist } from "../../redux/tracklist/tracklist.selectors";
import './tracklist.styles.scss'

const TracklistPage = () => {
    const userTracklist = useSelector(selectUserTracklist);
    const {tracks} = userTracklist;

    const handleSubmit = e => {
        e.preventDefault();
        console.log("Download missing data...");
    }
    
    return(
        <div className="tracklist-page">
            <div className="statistics">
                <h1>Statistics</h1>
                <p>Tracks in total: {tracks.length}</p>
                <p>Missing fields: NaN</p>
                <CustomButton onClick={handleSubmit}>Download missing data</CustomButton>
            </div>
            <h2 className="title">Tracklist page</h2>
            {
                tracks.map(track => <TrackItem key={track.id} track={track}/>)
            }
        </div>
    );
}

export default TracklistPage;