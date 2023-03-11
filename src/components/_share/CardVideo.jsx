import videoApi from '@/services/videoApi';
import { Avatar } from '@mui/material';
import moment from 'moment';
import React, { useCallback, useEffect, useState } from 'react';
import { formatCount } from '@/utils/formatCount';

const CardVideo = ({ item, onClick }) => {
  const [channel, setChannel] = useState(null);
  const [view, setView] = useState(null);
  let channelId = item?.snippet?.channelId;
  let videoId = item?.id?.videoId;

  const getInfoItem = useCallback(async () => {
    try {
      const dataChannel = videoApi.getChannel(channelId);
      const dataVideo = videoApi.getInfoVideo(videoId);
      const data = await Promise.all([dataChannel, dataVideo]);
      setChannel(data[0].data);
      setView(data[1].data);
    } catch (error) {
      console.log('Failed to fetch', error);
    }
  }, [channelId, videoId]);

  useEffect(() => {
    getInfoItem();
  }, [getInfoItem]);

  const handleClick = (e) => {
    if (!onClick) return;
    onClick(e);
  };

  return (
    <div className="item">
      <div className="list-video" onClick={handleClick}>
        <div className="list-video__thumbnail">
          <img
            src={item?.snippet?.thumbnails?.medium?.url}
            alt={item?.snippet?.channelTitle}
          />
        </div>
        <div className="list-video__infor">
          <div className="list-video__infor__title">
            <p>{item?.snippet?.title}</p>
          </div>
          <div className="list-video__infor__view">
            {formatCount.convertNumberToSing(
              view?.items[0].statistics.viewCount,
            )}
            {` `} view <span> • </span>{' '}
            {moment(item?.snippet?.publishedAt).fromNow()}
          </div>
          <div className="list-video__infor__channel">
            <div className="list-video__infor__channel__avatar">
              <Avatar
                sx={{ width: 24, height: 24 }}
                alt="Suboi"
                src={channel?.items[0]?.snippet?.thumbnails?.default?.url}
              />
            </div>
            <div className="list-video__infor__channel__name">
              {item?.snippet?.channelTitle}
            </div>
          </div>
          <div className="list-video__infor__desc">
            <p>{item?.snippet?.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardVideo;
