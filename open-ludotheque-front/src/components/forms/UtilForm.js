import React from 'react';

export const renderField = ({ input, label, type, className, meta: { touched, error, warning } }) => (
    <div className="form-group">
        <label htmlFor={input.name}>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type} className={className} />
            {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
    </div>
);