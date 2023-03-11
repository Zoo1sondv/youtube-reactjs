import React, { useEffect } from 'react';
import Badge from '@mui/material/Badge';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import MicIcon from '@mui/icons-material/Mic';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { useMyContext } from '@/store/context/store';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

function Header() {
  const {
    search,
    isSearch,
    setSearch,
    menuToggle,
    setMenuToggle,
    setValueFilter,
    setActive,
    setIsSearch,
    isPageWatch,
    drawer,
    setDrawer,
  } = useMyContext();
  const [progress, setProgress] = React.useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);
  const handleToggle = () => {
    if (isPageWatch) {
      setDrawer(!drawer);
    } else {
      setMenuToggle(!menuToggle);
    }
  };

  const navigate = useNavigate();

  const handleClickHome = () => {
    setValueFilter('All');
    setActive('All');
  };
  const handleValueInput = (e) => {
    if (e.key === 'Enter') {
      handleClick();
    }
  };

  const handleClick = () => {
    if (search.length > 0) {
      setIsSearch(true);
      navigate(`/results/search_query=${search}`);
    }
  };

  return (
    <>
      {isSearch ? (
        <Box sx={{ width: '100%' }}>
          <LinearProgress variant="determinate" value={progress} />
        </Box>
      ) : (
        ''
      )}
      <div className="header">
        <div className="header__left">
          <button className="header__left__menu">
            <MenuIcon onClick={handleToggle} />
          </button>
          <Link to="/" className="header__left__logo">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
              alt="logo youtube"
              width="92px"
              height="24px"
              onClick={handleClickHome}
            />
          </Link>
        </div>
        <div className="header__center">
          <input
            onKeyPress={handleValueInput}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            className="header__center__searchInput"
            placeholder="Search"
          />
          <button className="header__center__searchBtn" onClick={handleClick}>
            <SearchIcon />
          </button>
          <div className="header__center__mic">
            <MicIcon />
          </div>
        </div>
        <div className="header__right">
          <VideoCallOutlinedIcon className="header__right__icon" />
          <AppsOutlinedIcon className="header__right__icon" />
          <Badge
            badgeContent={4}
            color="primary"
            className="header__right__icon">
            <NotificationsNoneOutlinedIcon color="action" />
          </Badge>
          <div className="header__right__user">
            <AccountCircleIcon className="header__right__user__icon" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
