import React from "react";
import FormCopyInput from "../form-copy-input/form-copy-input.component";
import './track-item-info.styles.scss'

const TrackItemInfo = ({track}) => {
    const {artist, title, album, label, lyricist, composer} = track;
    return (
        <div className="track-item-info">
            <h5>Track data:</h5>
            <FormCopyInput type="text" name="first" placeholder={artist} label='Artist' readOnly />
            <FormCopyInput type="text" name="first" placeholder={title} label='Title' readOnly />
            <FormCopyInput type="text" name="first" placeholder={album} label='Album' readOnly />
            <FormCopyInput type="text" name="first" placeholder={label} label='Label' readOnly />
            <FormCopyInput type="text" name="first" placeholder={lyricist} label='Lyricist' readOnly />
            <FormCopyInput type="text" name="first" placeholder={composer} label='Composer' readOnly />
        </div>
    )
}

export default TrackItemInfo;