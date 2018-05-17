import React from 'react';
import PropTypes from 'prop-types';


class ContestPreview extends React.Component {
  state={
    categoryName: this.props.categoryName,
    contestName: this.props.contestName,
  }

  handleClick = () => {
    this.props.onContestClick(this.props.id);
  }

  render() {
    return (
      <div className="link ContestPreview" onClick={this.handleClick}>
        <div className="category-name">
          {this.props.categoryName}
        </div>
        <dir className="contest-name">
          {this.props.contestName}
        </dir>
      </div>
    );
  }
}

ContestPreview.propTypes = {
  id: PropTypes.number.isRequired,
  categoryName: PropTypes.string.isRequired,
  contestName: PropTypes.string.isRequired,
  onContestClick: PropTypes.func.isRequired
};

export default ContestPreview;