import React from 'react';

export default function Filter({ searchState, handleFilter }) {
  return (
    <div>
      filter shown with
      <input name='filtered' value={searchState} onChange={handleFilter} />
    </div>
  );
}
