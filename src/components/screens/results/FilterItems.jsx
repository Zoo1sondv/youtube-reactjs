import React from 'react';

const FilterItems = ({ title, list }) => {
  return (
    <div className="filter-items">
      <div className="filter-items__title">{title}</div>
      {list.map((item, index) => (
        <div key={index}>
          <div className="filter-items__title__list">{item}</div>
        </div>
      ))}
    </div>
  );
};

export default FilterItems;
