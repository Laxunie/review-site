import React from 'react'
import './forminput.css'

const FormInput = (props) => {
    const {onChange, id, ...inputProps} = props;
    return (
        <div className={"app__" + "formInput-"+ inputProps.name}>
            <input {...inputProps} onChange={onChange} autoComplete="off"/>
        </div>
    )
}

export default FormInput