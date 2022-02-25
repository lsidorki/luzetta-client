import React from "react";
import { connect } from "react-redux";
import { openFileStart } from "../../redux/import-xlsx/import-xlsx.actions";
import CustomButton from "../custom-button/custom-button.component";
import './control-center.styles.scss'
import { read, utils } from "xlsx"

const ControlCenter = ({openFileStart}) => {
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
                console.log(json);
            };
            reader.readAsArrayBuffer(e.target.files[0]);
        }
    }

    return (
        <div className="control-center">
            <CustomButton onChange={readUploadFile} name="OPEN FILE" isOpenFile={true} />
            <CustomButton type="button" name="DONATE" isDonate={true} />
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    openFileStart: () => dispatch(openFileStart())
})

export default connect(null, mapDispatchToProps)(ControlCenter);