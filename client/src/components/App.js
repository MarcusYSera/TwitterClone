import React from 'react';
import { Form, Field } from 'react-final-form';
import axios from 'axios';

// console.log(process.env.REACT_APP_BEARER_TOKEN);

class App extends React.Component {
  // async componentDidMount() {
  //   try {
  //     const res = await window.twttr.ready;
  //     return res;
  //   } catch (err) {
  //     console.log(err);
  //     return err;
  //   }
  // }

  onSubmit = (e) => {
    console.log(e.user);
  };

  render() {
    return (
      // <div className="ui grid container">
      <div className="ui middle aligned center aligned grid">
        <div className="column">
          <h2 classNAme="ui header">Search Twitter</h2>
          <Form
            onSubmit={this.onSubmit}
            render={({ handleSubmit }) => (
              <form onSubmit={handleSubmit} className="ui large form">
                <div className="ui stacked segment">
                  <div className="field">
                    <Field
                      component="input"
                      name="user"
                      placeholder="Search for User here"
                    />
                  </div>
                  <button className="ui fluid large submit button" type="submit">
                    submit
                  </button>
                </div>
              </form>
            )}
          />
          <h1>hello world</h1>
          {this.displayTweeet}
        </div>
      </div>
      // </div>
    );
  }
}

export default App;
