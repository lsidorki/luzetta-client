import React from "react";
import { connect } from "react-redux";
import { openFileStart } from "../../redux/import-file/import-file.actions";
import CustomButton from "../custom-button/custom-button.component";
import './control-center.styles.scss'
import { read, utils } from "xlsx"
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import DonateModal from "../donate/donate.component";

const ControlCenter = ({currentUser, openFileStart}) => {
    const [modalShow, setModalShow] = React.useState(false);
    const { role } = currentUser || 'none';

    const readUploadFile = (e) => {
        e.preventDefault();
        if (e.target.files) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const data = e.target.result;
                const workbook = read(data, { type: "array" });
                const sheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[sheetName];
                const json = utils.sheet_to_json(worksheet);
                openFileStart(json);
            };
            reader.readAsArrayBuffer(e.target.files[0]);
        }
    }

    const fetchTracksDataExt = e => {
        e.preventDefault();
        console.log("Start fetching external data about tracks.");
    }

    return (
        <div className="control-center">
            {
                currentUser && (role === 'maintain') ? 
                <div className="maintain-panel">
                    <CustomButton onChange={readUploadFile} isOpenFile={true}>IMPORT FILE</CustomButton>
                    <CustomButton onClick={fetchTracksDataExt}>FETCH TRACKS DATA</CustomButton>
                </div>
                : null
            }
            <CustomButton type="button" isDonate={true} onClick={() => setModalShow(true)}>DONATE</CustomButton>
            <DonateModal show={modalShow} onHide={() => setModalShow(false)} />
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    openFileStart: (importedData, sheetName) => dispatch(openFileStart({importedData, sheetName}))
})

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

export default connect(mapStateToProps, mapDispatchToProps)(ControlCenter);