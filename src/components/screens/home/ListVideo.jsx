import Video from '@/components/_share/Video';
import videoApi from '@/services/videoApi';
import { useMyContext } from '@/store/context/store';
import { formatCount } from '@/utils/formatCount';
import moment from 'moment';
import React, { Fragment, useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import InfiniteScroll from 'react-infinite-scroll-component';

function ListVideo({ data, listVideoId }) {
  const navigate = useNavigate();

  const [listVideoInfo, setListVideoInfo] = useState([]);
  const { setIsPageWatch } = useMyContext();

  const handleClick = (videoId) => {
    setIsPageWatch(true);
    navigate(`/watch/v=${videoId}`);
  };

  const getListVideoInfo = useCallback(async () => {
    try {
      const getInfo = listVideoId.map((videoId) => {
        return videoApi.getInfoVideo(videoId);
      });

      const listInfo = await Promise.all(getInfo);

      setListVideoInfo(listInfo.map((item) => item.data.items[0]));
    } catch (error) {
      console.log('Failed to fetch video', error);
    }
  }, [listVideoId]);

  useEffect(() => {
    getListVideoInfo();
  }, [getListVideoInfo]);

  return (
    <div className="content">
      {data !== [] && listVideoInfo !== [] && (
        <div className="list-video">
          {data.map((item, index) => (
            <Fragment key={index}>
              <Video
                direction="column"
                urlThumbnail={item.snippet?.thumbnails.medium.url || ''}
                title={item.snippet?.title || ''}
                urlAvt={item.snippet?.thumbnails.medium.url || ''}
                nameChannel={item.snippet?.channelTitle || ''}
                viewCount={
                  formatCount.convertNumberToSing(
                    item?.statistics?.viewCount,
                  ) ||
                  formatCount.convertNumberToSing(
                    listVideoInfo[index]?.statistics?.viewCount,
                  ) ||
                  '100.000'
                }
                publicAt={moment(item.snippet?.publishedAt).fromNow()}
                onClick={() =>
                  handleClick(
                    typeof item.id === 'object' ? item.id.videoId : item.id,
                  )
                }
              />
            </Fragment>
          ))}
        </div>
      )}
    </div>
  );
}

export default ListVideo;
