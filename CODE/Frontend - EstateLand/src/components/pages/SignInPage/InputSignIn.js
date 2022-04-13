import React from 'react'

function InputSignIn(props) {
    return (
        <div>
             <input
              id={props.id}
              className={props.class}
              type={props.type}
              placeholder={props.placeholder}
              name={props.name}
              value={props.value}
              onChange={props.onChange}
            />
        </div>
    )
}

export default InputSignIn
