import React from 'react'
import { useState } from 'react';
import './forminput.css';
import '../../css/main.css';

const FormInput = (props) => {
    const [focus, setFocus] = useState(false);
    const {onChange, name, type, errorMessage, pattern} = props;
    console.log(pattern)
    return (
        <div className={`app__input-${name}`}>
            <input 
                name={name} 
                onChange={onChange} 
                type={type} 
                autoComplete="off" 
                onBlur={() => {
                    setFocus(true);
                }}
                required
                pattern="/(.*[a-z]){3}/i"
                focused={focus.toString()}
                />
        </div>
    )
}

export default FormInput