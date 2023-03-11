import { useMyContext } from '@/store/context/store';
import React from 'react';
import Slider from 'react-slick';

function FilterTopic({ show = 12, scroll = 6, handleClickFilter }) {
  const { active, setActive } = useMyContext();

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: show,
    slidesToScroll: scroll,
  };

  const handleFilter = (e) => {
    if (!handleClickFilter) return;
    handleClickFilter(e.target.value);
    setActive(e.target.name);
  };

  const arrButton = [
    'All',
    'Mixes',
    'Music',
    'Background music',
    'Computer programming',
    'Live',
    'Lo-fi',
    'Playlists',
    'Youth music',
    'Classical music',
    'Algorithms',
    'Albums',
    'Humans',
    'Balls',
    'Acoustic guitar',
    'Comedy',
    'Eating',
    'Teams',
    'Recently uploaded',
    'Watched',
    'New to you',
  ];

  return (
    <div className="filterTopic">
      <Slider {...settings}>
        {arrButton.map((item, index) => (
          <button
            key={index}
            className={
              active === item
                ? 'filterTopic__btn filterTopic__btn--active'
                : 'filterTopic__btn'
            }
            name={item}
            value={item}
            onClick={(e) => handleFilter(e)}>
            {item}
          </button>
        ))}
      </Slider>
    </div>
  );
}

export default FilterTopic;
