import React from 'react';

const NoMatch = () => {
    return (
        <>
          <h2>Whoops- looks like you've ventured into uncharted territory!</h2>
          <p>Here's something to help guide your way <span><Link exact to='/'>Home</Link></span></p>
          <h3>Happy exploring!</h3>
        </>
    );
}

