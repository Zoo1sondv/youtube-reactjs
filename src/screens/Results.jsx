import FilterResults from '@/components/screens/results/FilterResults';
import React, { useCallback, useEffect, useRef } from 'react';
import { useMyContext } from '@/store/context/store';
import videoApi from '@/services/videoApi';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import CardVideo from '@/components/_share/CardVideo';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from '@/components/_share/Loader';

function Results() {
  const { setIsSearch, setVideoList, videoList, isSearch, setIsPageWatch } =
    useMyContext();

  const pageRef = useRef();
  const { query } = useParams();

  let navigate = useNavigate();

  useEffect(() => {
    if (isSearch) {
      setVideoList([]);
      pageRef.current = '';
    }
  }, [isSearch, setVideoList]);
  const fetchMoreData = useCallback(async () => {
    try {
      const { data } = await videoApi.getSearch(query, pageRef.current);
      setVideoList((prev) => [...prev, ...data.items]);
      pageRef.current = data.nextPageToken;
      setIsSearch(false);
    } catch (error) {
      console.log('Failed to fetch', error);
    }
  }, [query, setIsSearch, setVideoList]);
  console.log(videoList);
  useEffect(() => {
    setIsPageWatch(false);
    setVideoList([]);

    fetchMoreData();
  }, [fetchMoreData, setIsPageWatch, setVideoList]);

  const handleCardVideo = (videoId) => {
    setIsPageWatch(true);
    navigate(`/watch/v=${videoId}`);
  };
  return (
    <div className="results">
      <div className="results__list">
        <FilterResults />
        <div>
          {videoList.length !== 0 && (
            <InfiniteScroll
              dataLength={videoList.length}
              next={fetchMoreData}
              hasMore={true}
              loader={<Loader />}>
              {videoList &&
                videoList.map((item, index) => {
                  return (
                    <CardVideo
                      item={item}
                      key={index}
                      onClick={() => handleCardVideo(item.id.videoId)}
                    />
                  );
                })}
            </InfiniteScroll>
          )}
        </div>
      </div>
    </div>
  );
}

export default Results;
