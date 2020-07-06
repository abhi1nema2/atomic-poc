import React from 'react';
import './styles.scss';
import Grid from '../Grid';
import Button from '@gg/Button';


function Home(props) {
    const { Heading } = props;
    return (
        <div className="home">
            <h1>{Heading}</h1>
            <Grid />
            <Button />
        </div>
    )
}

export default Home;
