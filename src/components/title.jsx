import React from 'react';

const Title = ({ title }) => (
    <h4>{title}</h4>
);

export default React.memo(Title);