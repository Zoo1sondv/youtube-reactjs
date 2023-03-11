import React, { useCallback, useEffect, useState } from 'react';
// import Video from '@/components/_share/Video';
import videoApi from '@/services/videoApi';
import { formatCount } from '@/utils/formatCount';
import moment from 'moment';
import { Link } from 'react-router-dom';
const ListRelated = ({ item }) => {
  const [viewVideoRelated, setViewVideoRelated] = useState([]);
  const getViewVideoRelated = useCallback(async () => {
    try {
      const viewVideo = await videoApi.getInfoVideo(item?.id?.videoId);
      setViewVideoRelated(viewVideo.data);
    } catch (error) {
      console.log('Failed to fetch', error);
    }
  }, [item.id.videoId]);
  useEffect(() => {
    getViewVideoRelated();
  }, [getViewVideoRelated]);
  return (
    <Link to={`/watch/v=${item.id.videoId}`} className="style-links">
      <div className="watch__related">
        <div>
          <img
            src={item?.snippet?.thumbnails?.medium?.url}
            alt="ảnh lỗi"
            width="170px"
            height="95px"
            className="style-img"
          />
        </div>

        <div className="watch__related__title">
          <p className="watch__related__title-music">{item?.snippet?.title}</p>
          <p className="watch__related__title-author">
            {item?.snippet?.channelTitle}
          </p>
          <p className="watch__related__title-view">
            <span className="view-count">
              {formatCount.convertNumberToSing(
                viewVideoRelated.items &&
                  viewVideoRelated.items[0]?.statistics?.viewCount,
              )}{' '}
              views<span> • </span>
            </span>
            <span>{moment(item?.snippet?.publishedAt).fromNow()}</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ListRelated;
