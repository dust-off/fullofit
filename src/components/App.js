import React from 'react';
import Header from './Header';
import ContestList from './ContestList';

const pushState = (obj, url, ) => 
  window.history.pushState(obj, '', url);


export default class App extends React.Component{
  state = {
    pageHeader: 'Naming Contests',
    contests: this.props.initialContests,
  }
  componentDidMount() {

  }
  fetchContest = (contestID) => {
    pushState(
      { currentContestID: contestID },
      `/contest/${contestID}`
    );
  }
  render() {
    return (
      <div className="App">
        <Header message={this.state.pageHeader} />
        <ContestList
          contests={this.state.contests}
          onContestClick={this.fetchContest}
        />
      </div>
    );
  }
}