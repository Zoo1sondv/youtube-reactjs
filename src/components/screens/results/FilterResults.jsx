import { Collapse, Button } from '@mui/material';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import React, { useState } from 'react';
import FilterItems from './FilterItems';

const FilterResults = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  const uploadDate = [
    'Last hour',
    'Today',
    'This week',
    'This month',
    'This year',
  ];
  const type = ['Video', 'Channel', 'Playlist', 'Moive'];
  const duration = ['Under 4 minutes', '4-20 minutes', 'Over 20 minutes'];
  const features = [
    'Live',
    '4K',
    'HD',
    'Subtitles/CC',
    'Creative Commons',
    '360',
    'VR180',
    '3D',
    'HDR',
    'Location',
    'Purchased',
  ];
  const sortBy = ['Relevance', 'Upload date', 'View count', 'Rating'];
  return (
    <div className="results__filter">
      <div className="results__filter__btn">
        <Button
          onClick={handleChange}
          style={{ color: 'black', fontSize: '14px' }}
          startIcon={<TuneOutlinedIcon />}>
          FILTERS
        </Button>
      </div>
      <Collapse in={checked}>
        <div className="results__filter__list">
          <FilterItems title="UPLOAD DATE" list={uploadDate} />
          <FilterItems title="TYPE" list={type} />
          <FilterItems title="DURATION" list={duration} />
          <FilterItems title="FEATURES" list={features} />
          <FilterItems title="SORT BY" list={sortBy} />
        </div>
      </Collapse>
    </div>
  );
};

export default FilterResults;
