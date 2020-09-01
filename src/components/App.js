import React from 'react';
import axios from 'axios';

const TwitterDB = () => {
  const returnCall = 'hello';
  axios({ method: 'get', url: '' });

  return <div>{returnCall}</div>;
};

const App = () => {
  return (
    <div className="ui center aligned container">
      <h1>hello world</h1>
      {TwitterDB()}
    </div>
  );
};

export default App;
