import React from "react";
import FormInput from "../form-input/form-input.component";
import './track-item-info.styles.scss'

const TrackItemInfo = ({track}) => {
    const {artist, title, album, label, lyricist, composer} = track;
    return (
        <div className="track-item-info">
            <h5>Track data:</h5>
            <FormInput type="text" name="first" placeholder={artist} label='Artist' readOnly />
            <FormInput type="text" name="first" placeholder={title} label='Title' readOnly />
            <FormInput type="text" name="first" placeholder={album} label='Album' readOnly />
            <FormInput type="text" name="first" placeholder={label} label='Label' readOnly />
            <FormInput type="text" name="first" placeholder={lyricist} label='Lyricist' readOnly />
            <FormInput type="text" name="first" placeholder={composer} label='Composer' readOnly />
        </div>
    )
}

export default TrackItemInfo;