import Video from '@/components/_share/Video';
import ListRelated from '@/components/screens/watch/ListRelated';
import React, { Fragment, useCallback, useEffect, useState } from 'react';
import moment from 'moment';
import videoApi from '@/services/videoApi';
// import FilterTopic from '@/components/_share/FilterTopic';

function WatchVideo({ data }) {
  const [videoRelated, setVideoRelated] = useState([]);

  const fetchMoreDataVideoRelated = useCallback(async () => {
    try {
      const res = await videoApi.getVideoRelated(data?.id, '', 'video');
      setVideoRelated(res.data);
    } catch (error) {
      console.log('Failed to fetch', error);
    }
  }, [data]);

  useEffect(() => {
    fetchMoreDataVideoRelated();
  }, [fetchMoreDataVideoRelated]);
  return (
    <>
      <div className="watch__video">
        {data && (
          <Video
            direction="column"
            isShow={true}
            isDetail={true}
            isVideo={true}
            videoId={data.id}
            title={data.snippet.title}
            nameChannel={data.snippet.channelTitle}
            urlAvt={data.snippet.thumbnails.medium.url}
            publishedAt={`${moment(data?.snippet?.publishedAt).fromNow()}`}
            viewCount={data.statistics.viewCount}
            countLike={data.statistics.likeCount}
            description={data.snippet.description}
            publicAt={data.snippet.publishedAt}
          />
        )}
      </div>
      <div className="list-video__item">
        {videoRelated.items &&
          videoRelated.items.map(
            (item, index) =>
              item?.snippet && (
                <Fragment key={index}>
                  <ListRelated item={item} />
                </Fragment>
              ),
          )}
      </div>
    </>
  );
}

export default WatchVideo;
