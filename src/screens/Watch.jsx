import WatchVideo from '@/components/screens/watch/WatchVideo';
import Sidebar from '@/components/_share/Sidebar';
import videoApi from '@/services/videoApi';
import { useMyContext } from '@/store/context/store';
import { Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Watch() {
  const { setIsPageWatch, drawer, setDrawer } = useMyContext();
  const { videoId } = useParams();
  const [videoWatch, setVideoWatch] = useState();

  const getVideo = useCallback(async () => {
    try {
      const { data } = await videoApi.getInfoVideo(videoId);
      setVideoWatch(data.items[0]);
    } catch (error) {
      console.log('Failed to fetch video', error);
    }
  }, [videoId]);

  useEffect(() => {
    setIsPageWatch(true);
    getVideo();
  }, [getVideo, setIsPageWatch, videoId]);

  return (
    <div className="watch">
      <Drawer
        anchor={'left'}
        open={drawer}
        onClose={() => {
          setDrawer(false);
        }}>
        <div className="watch__drawer">
          <div className="watch__drawer__wrapper">
            <MenuIcon sx={{ marginRight: '24px' }} />

            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
              alt="logo youtube"
              width="92px"
              height="24px"
            />
          </div>
        </div>
        <Sidebar />
      </Drawer>
      <WatchVideo data={videoWatch} />
    </div>
  );
}

export default Watch;
