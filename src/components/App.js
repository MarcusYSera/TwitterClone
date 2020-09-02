import React from 'react';
import { Form, Field } from 'react-final-form';
import axios from 'axios';

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
    const config = {
      method: 'get',
      url: `https://api.twitter.com/labs/2/users/by/username/${e.user}?expansions=pinned_tweet_id`,
      headers: {
        Authorization:
          'Bearer AAAAAAAAAAAAAAAAAAAAAJohHQEAAAAAtFSv1c9bQguXmRTdyDXQLv1gfpE%3DcVtZrQvx6iEsO6AuATcGajsTXtm9lMk3rgBHuPCuI6ZaY15uVr',
        // Cookie:
        //   'personalization_id="v1_dLCv7GSVPP3SbawrnPi0+w=="; guest_id=v1%3A159899956972344374',
      },
    };

    axios(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
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
