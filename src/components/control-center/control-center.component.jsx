import React from "react";
import { connect } from "react-redux";
import CustomButton from "../custom-button/custom-button.component";
import './control-center.styles.scss'

const ControlCenter = () => {
    return (
        <div className="control-center">
            <CustomButton name="OPEN FILE" />
            <CustomButton name="DONATE" isDonate={true} />
        </div>
    )
}

export default connect(null, null)(ControlCenter);