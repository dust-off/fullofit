import React from 'react';
import ContestPreview from './ContestPreview';
import PropTypes from 'prop-types';

const ContestList = ({ contests }) => (
<div className="ContestList">
    {contests.map(contest =>
      <ContestPreview
        {...contest}
        key={contest.id}
      />
    )}
  </div>
);

ContestList.propTypes = {
  contests: PropTypes.array,
};

export default ContestList;