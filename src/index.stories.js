import React from 'react';
import Home from './components/Home';
// import * as props from './Home/__data__/default.json';

const props1 = {
    Heading: "BHaish"
}

const props2 = {
    Heading: "abhishek"
}

export default { title : 'default' };

export const withHeading = () => (
    <Home {...props2} />
);

export const withHeadingText = () => (
    <Home {...props1} />
);
