import React from 'react';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import ContentCutOutlinedIcon from '@mui/icons-material/ContentCutOutlined';
import PlaylistAddOutlinedIcon from '@mui/icons-material/PlaylistAddOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import { Button } from '@mui/material';

function Menu({ countLike }) {
  return (
    <div className="menu">
      <Button
        variant="outlined"
        startIcon={<ThumbUpOutlinedIcon />}
        style={{ border: 'none', color: '#030303' }}>
        {countLike}
      </Button>
      <Button
        variant="outlined"
        startIcon={<ThumbDownAltOutlinedIcon />}
        style={{ border: 'none', color: '#030303' }}>
        DISLIKE
      </Button>
      <Button
        variant="outlined"
        startIcon={<ShareOutlinedIcon />}
        style={{ border: 'none', color: '#030303' }}>
        SHARE
      </Button>
      <Button
        variant="outlined"
        startIcon={<ContentCutOutlinedIcon />}
        style={{ border: 'none', color: '#030303' }}>
        CLIP
      </Button>
      <Button
        variant="outlined"
        startIcon={<PlaylistAddOutlinedIcon />}
        style={{ border: 'none', color: '#030303' }}>
        SAVE
      </Button>
      <Button
        variant="outlined"
        startIcon={<MoreHorizOutlinedIcon />}
        style={{ border: 'none', color: '#030303' }}></Button>
    </div>
  );
}

export default Menu;
