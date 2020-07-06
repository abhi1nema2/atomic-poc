import React from 'react';
import './styles.scss';


function Video(props) {
    const { Heading } = props;
    return (
        <div className="video">
            <h1>{Heading}</h1>
        </div>
    )
}

export default Video;
