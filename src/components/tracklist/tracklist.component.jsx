import React from "react";
import TrackItem from "../track-item/track-item.component";
import './tracklist.styles.scss'

const Tracklist = () => {
    const track1 = {
        artist: "MØ",
        title: "Goosebumps",
        album: "Motordrom",
        label: "Chess Club",
        lyricist: "Karen Marie Aagaard Ørsted Andersen",
        composer: "Marie Aagaard Ørsted Andersen",
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/5/56/M%C3%98_-_Motordrome.png"
    }
    const track2 = {
        artist: "Aurora",
        title: "The Forbidden Fruits of Eden",
        album: "The Gods We Can Touch",
        label: "Decca",
        lyricist: "Aurora Aksnes",
        composer: "Aurora Aksnes, Magnus Skylstad, Matias Tellez",
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/f/f5/Aurora_-_The_Gods_We_Can_Touch.jpeg"
    }
    const track3 = {
        artist: "FKA Twigs",
        title: "Pamplemousse",
        album: "Caprisongs",
        label: "Young",
        lyricist: "Tahliah Debrett Barnett",
        composer: "Díaz-Reixa, Halm, FKA twigs",
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/8/89/FKA_twigs_-_Caprisongs.jpeg"
    }
    return (
        <div className="tracklist">
            <TrackItem track={track1}/>
            <TrackItem track={track2}/>
            <TrackItem track={track3}/>
        </div>
    )
}

export default Tracklist;