import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { fetchTracklistStart } from "../../redux/tracklist/tracklist.actions";
import TracklistPageContainer from "../tracklist/tracklist.container";
import './report.styles.scss'

const ReportPage = ({fetchTracklistStart, match}) => {

    useEffect(() => {
        fetchTracklistStart({barcode: "alalka", report: "2022-03-01"});
    }, [fetchTracklistStart]);

    return(
        <div className="report">
            <Routes>
                <Route exact={true} path="/" element={<TracklistPageContainer />} />
            </Routes>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    fetchTracklistStart: () => dispatch(fetchTracklistStart({barcode: "aarczynska", report: "2022-03-01"}))
})

export default connect(null, mapDispatchToProps)(ReportPage);