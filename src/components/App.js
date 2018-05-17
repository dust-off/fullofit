import React from 'react';
import Header from './Header';
// import ContestPreview from './ContestPreview';
// import data from '../testData';
// import axios from 'axios';

import ContestList from './ContestList';

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
        <ContestList contests={this.state.contests} />
      </div>
    );
  }
}