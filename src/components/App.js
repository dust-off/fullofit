import React from 'react';
import Header from './Header';
import ContestPreview from './ContestPreview';

export default class App extends React.Component{
  state = {
    test: 'Naming Contests',
  }
  render() {
    return (
      <div className="App">
        <Header message={this.state.test} />
        <div>
          {this.props.contests.map(contest => 
            <ContestPreview {...contest} />
          )}
        </div>
      </div>
    );
  }
}