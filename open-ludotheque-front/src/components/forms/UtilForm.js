import React from 'react';

import TextField from 'material-ui/TextField'

import {RadioButton, RadioButtonGroup} from 'material-ui/Radio'
import Checkbox from 'material-ui/Checkbox'
//import SelectField from 'material-ui/SelectField'

export const renderField = ({ input, label, type, className, meta: { touched, error, warning } }) => (
    <div className="form-group">
        <label htmlFor={input.name}>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type} className={className} />
            {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
    </div>
);

export const renderTextField = ({input, label, meta: {touched, error}, ...custom}) => (
    <TextField
        label={label}
        //helperText={label}
        //placeholder={label}
        //errorText={touched && error}
        {...input}
        {...custom}
    />
);

export const renderCheckbox = ({input, label}) => (
    <Checkbox
        label={label}
        checked={input.value ? true : false}
        onCheck={input.onChange}
    />
);

export const renderRadioGroup = ({input, ...rest}) => (
    <RadioButtonGroup
        {...input}
        {...rest}
        valueSelected={input.value}
        onChange={(event, value) => input.onChange(value)}
    />
);

//export const renderSelectField = ({ input, label,  meta: {touched, error},  children, ...custom }) => (
//    <SelectField
//        floatingLabelText={label}
//        errorText={touched && error}
//        {...input}
//        onChange={(event, index, value) => input.onChange(value)}
//        children={children}
//        {...custom}
//    />
//);