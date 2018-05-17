import React from 'react';
import Header from './Header';
import ContestPreview from './ContestPreview';
// import data from '../testData';
import axios from 'axios';

export default class App extends React.Component{
  state = {
    pageHeader: 'Naming Contests',
    contests: [],
  }
  componentDidMount() {
    axios.get('/api/contests')
      .then(res => {
        this.setState({
          contests: res.data.contests,
        });
      })
      .catch(err => console.error(err));
  }
  render() {
    return (
      <div className="App">
        <Header message={this.state.pageHeader} />
        <div>
          {this.state.contests.map(contest => 
            <ContestPreview
              {...contest}
              key={contest.id}
            />
          )}
        </div>
      </div>
    );
  }
}