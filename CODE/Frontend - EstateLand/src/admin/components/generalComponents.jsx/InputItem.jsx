import React from 'react'

function InputItem(props) {
    return (
        <div className={props.divClassName}>
            <label>{props.labelTitle}</label>
            <input
                type={props.inputType}
                placeholder={props.placeholder}
                className={props.inputClass}
                value={props.value}
                onChange={props.onChange}
            />
        </div>
    )
}

export default InputItem
