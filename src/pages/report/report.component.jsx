import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { fetchTracklistStart } from "../../redux/tracklist/tracklist.actions";
import TracklistPageContainer from "../tracklist/tracklist.container";
import './report.styles.scss'

const ReportPage = ({match}) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTracklistStart({
            barcode: "akubala", 
            report: "2022-03-01"
        }));
    }, [dispatch]);

    return(
        <div className="report">
            <Routes>
                <Route exact={true} path="/" element={<TracklistPageContainer />} />
            </Routes>
        </div>
    )
}

export default ReportPage;