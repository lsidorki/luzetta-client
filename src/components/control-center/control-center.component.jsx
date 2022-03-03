import React from "react";
import { connect } from "react-redux";
import { openFileStart } from "../../redux/import-file/import-file.actions";
import CustomButton from "../custom-button/custom-button.component";
import './control-center.styles.scss'
import { read, utils } from "xlsx"
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";

const ControlCenter = ({currentUser, openFileStart}) => {
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

    return (
        <div className="control-center">
            {
                currentUser ? 
                <CustomButton onChange={readUploadFile} isOpenFile={true}>OPEN FILE</CustomButton>
                : null
            }
            <CustomButton type="button" isDonate={true}>DONATE</CustomButton>
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