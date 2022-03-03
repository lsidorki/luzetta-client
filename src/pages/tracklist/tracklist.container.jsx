import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import { selectIsUserTracklistLoaded } from "../../redux/tracklist/tracklist.selectors";
import TracklistPage from "./tracklist.component";

const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectIsUserTracklistLoaded(state)
})

const TracklistPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(TracklistPage);

export default TracklistPageContainer;