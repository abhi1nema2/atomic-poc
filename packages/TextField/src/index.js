import React from 'react';
import Button from '@gg/Button';
import './styles.scss';

function TextField(props) {
    const { label } = props;

    return (
        <input className="text-field">
            <Button />
            {label ? label : 'Button'}
        </input>
    )
}

export default TextField;
