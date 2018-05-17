import React from 'react';
import Header from './Header';
import ContestPreview from './ContestPreview';
// import data from '../testData';
// import axios from 'axios';

export default class App extends React.Component{
  state = {
    pageHeader: 'Naming Contests',
    contests: this.props.initialContests,
  }
  componentDidMount() {

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