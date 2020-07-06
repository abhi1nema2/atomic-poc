import React from 'react';
import './styles.scss';

function Button(props) {
    const { label } = props;

    return (
        <button className="button" onClick={() => window.alert('asd')}>
            {label ? label : 'Button'}
        </button>
    )
}

export default Button;
