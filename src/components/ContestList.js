import React from 'react';
import ContestPreview from './ContestPreview';
import PropTypes from 'prop-types';

const ContestList = ({ contests, onContestClick }) => (
  <div className="ContestList">
    {contests.map(contest =>
      <ContestPreview
        {...contest}
        key={contest.id}
        onContestClick={onContestClick}
      />
    )}
  </div>
);

ContestList.propTypes = {
  contests: PropTypes.array,
  onContestClick: PropTypes.func.isRequired,
};

export default ContestList;