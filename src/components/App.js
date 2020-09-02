import React from 'react';
import { Form, Field } from 'react-final-form';
// import axios from 'axios';

class App extends React.Component {
  async componentDidMount() {
    try {
      const res = await window.twttr.ready;
      return res;
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  onSubmit = (e) => {
    console.log(e.user);
  };

  render() {
    return (
      <div>
        <Form
          onSubmit={this.onSubmit}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <Field
                component="input"
                name="user"
                placeholder="Search for User here"
              />
              <button type="submit">submit</button>
            </form>
          )}
        />
        <h1>hello world</h1>
        {this.displayTweeet}
      </div>
    );
  }
}

export default App;
