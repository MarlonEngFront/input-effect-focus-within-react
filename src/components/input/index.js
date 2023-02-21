// componente de input
import React, { useState } from 'react';
import classNames from 'classnames';
import './index.css';

const Input = ({ placeholder }) => {
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    return (
        <>
            <div className='container'>
                <div className='input__container'>
                    <label
                        className={classNames('input__label', {
                            filled: !!value,
                        })}
                    >
                        {placeholder}
                    </label>
                    <input value={value} onChange={handleChange} />
                </div>
            </div>
        </>
    );
};

export default Input;