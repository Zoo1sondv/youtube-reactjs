import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import FilterTopic from '@/components/_share/FilterTopic';
import ListVideo from '@/components/screens/home/ListVideo';
import videoApi from '@/services/videoApi';
import { useMyContext } from '@/store/context/store';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from '@/components/_share/Loader';

function Home() {
  const {
    videoList,
    setVideoList,
    valueFilter,
    setValueFilter,
    setIsPageWatch,
  } = useMyContext();
  const pageHomeRef = useRef();

  const handleClickFilter = (value) => {
    setValueFilter(value);
  };

  const getListVideoId = useMemo(() => {
    const listVideoId = [];
    if (videoList) {
      videoList.forEach((item) => {
        const videoId = typeof item.id === 'object' ? item.id.videoId : item.id;
        listVideoId.push(videoId);
      });
    }
    return listVideoId;
  }, [videoList]);
  useEffect(() => {
    if (valueFilter) {
      setVideoList([]);
      pageHomeRef.current = '';
    }
  }, [setVideoList, valueFilter]);
  const getListVideoHome = useCallback(async () => {
    try {
      let data;
      if (valueFilter) {
        data = await videoApi.getFilterTopic(valueFilter);
      } else {
        data = await videoApi.getHome(pageHomeRef.current);
      }
      setVideoList((prev) => [...prev, ...data.data.items]);
      pageHomeRef.current = data.data.nextPageToken;
    } catch (error) {
      console.log('Failed to fetch video', error);
    }
  }, [setVideoList, valueFilter]);

  useEffect(() => {
    setIsPageWatch(false);
    getListVideoHome();
  }, [getListVideoHome, setIsPageWatch]);
  return (
    <div className="home">
      <FilterTopic handleClickFilter={handleClickFilter} />
      {videoList.length !== 0 && (
        <InfiniteScroll
          dataLength={videoList.length}
          next={getListVideoHome}
          hasMore={true}
          loader={<Loader />}>
          <ListVideo data={videoList} listVideoId={getListVideoId} />
        </InfiniteScroll>
      )}
    </div>
  );
}

export default Home;
