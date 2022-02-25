import React from "react"
import './custom-button.styles.scss'

const CustomButton = ({onChange, name, isDonate, isOpenFile, ...otherProps}) => (
    isOpenFile ? 
    (<div className="custom-button file-input">
        <input onChange={onChange} type="file" id="file" className="file" {...otherProps} />
        <label htmlFor="file">{name}</label>
    </div>
    ) :
        (<button className={`custom-button${isDonate ? ' donate' : ''}`} {...otherProps}>
        {name}
    </button>
    )
)


export default CustomButton;