import React from 'react';

export default function ContestPreview({ categoryName, contestName}) {
  return (
    <div className="ContestPreview">
      <div className="category-name">
        {categoryName}
      </div>
      <dir className="contest-name">
        {contestName}
      </dir>
    </div>
  );
}