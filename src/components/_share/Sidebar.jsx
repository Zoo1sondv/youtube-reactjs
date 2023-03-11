import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import OnlinePredictionOutlinedIcon from '@mui/icons-material/OnlinePredictionOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';
import { Link } from 'react-router-dom';
import { useMyContext } from '@/store/context/store';

function Sidebar() {
  const { menuToggle } = useMyContext();

  return menuToggle ? (
    <div className="sidebarMini">
      <Link to="/" className="sidebarMini__home sidebarMini__nav">
        <HomeIcon />
        <span>Home</span>
      </Link>

      <Link to="/" className="sidebarMini__explore sidebarMini__nav">
        <ExploreOutlinedIcon />
        <span>Explore</span>
      </Link>

      <Link to="/" className="sidebarMini__short sidebarMini__nav">
        <TimelineOutlinedIcon />
        <span>Shorts</span>
      </Link>

      <Link to="/" className="sidebarMini__subscription sidebarMini__nav">
        <SubscriptionsOutlinedIcon />
        <span>SubScriptions</span>
      </Link>

      <Link to="/" className="sidebarMini__library sidebarMini__nav">
        <VideoLibraryOutlinedIcon />
        <span>Library</span>
      </Link>
    </div>
  ) : (
    <div className="sidebar">
      <div className="sidebar__child">
        <Link
          to="/"
          className="sidebar__child__nav sidebar__child__nav--active ">
          <HomeIcon />
          <span>Home</span>
        </Link>
        <Link to="/" className="sidebar__child__nav">
          <ExploreOutlinedIcon />
          <span>Explore</span>
        </Link>
        <Link to="/" className="sidebar__child__nav">
          <TimelineOutlinedIcon />
          <span>Shorts</span>
        </Link>
        <Link to="/" className="sidebar__child__nav">
          <SubscriptionsOutlinedIcon />
          <span>SubScriptions</span>
        </Link>
      </div>
      <div className="sidebar__child">
        <Link to="/" className="sidebar__library sidebar__child__nav">
          <VideoLibraryOutlinedIcon />
          <span>Library</span>
        </Link>
        <Link to="/" className="sidebar__video sidebar__child__nav">
          <HistoryOutlinedIcon />
          <span>History</span>
        </Link>
        <Link to="/" className="sidebar__yourVideo sidebar__child__nav">
          <OndemandVideoOutlinedIcon />
          <span>Your videos</span>
        </Link>
        <Link to="/" className="sidebar__watchLater sidebar__child__nav">
          <WatchLaterOutlinedIcon />
          <span>Watch later </span>
        </Link>
        <Link to="/" className="sidebar__likeVideo sidebar__child__nav">
          <ThumbUpOutlinedIcon />
          <span>Liked videos </span>
        </Link>
      </div>
      <div className="sidebar__child">
        <Link to="/" className="sidebar__child__nav sidebar__child__nav--dots">
          <img
            src="https://yt3.ggpht.com/ytc/AKedOLRwjFr7ljzmtF-lRtLcnUv6NmmkH7ud-vdgMpO6KA=s88-c-k-c0x00ffffff-no-rj"
            className=""
            alt="Mixigamming"
          />
          <span>Mixigamming </span>
          <div className="sidebar__child__nav__statusDot"></div>
        </Link>
        <Link to="/" className="sidebar__child__nav">
          <img
            src="https://yt3.ggpht.com/ytc/AKedOLS0_8Eb99PwVL_DhysKXBT5zKiqbIhC5x2DnaaJmWQ=s88-c-k-c0x00ffffff-no-rj"
            alt="Easy FrontEnd"
          />
          <span>Easy FrontEnd </span>
        </Link>
        <Link to="/" className="sidebar__child__nav sidebar__child__nav--dots">
          <img
            src="https://yt3.ggpht.com/ytc/AKedOLQBuXEEw0JAoH3qRaQIUDX_swZYayVI9symGBAvXg=s88-c-k-c0x00ffffff-no-rj"
            alt="Optimus"
          />
          <span>Optimus </span>
          <div className="sidebar__child__nav__statusDot"></div>
        </Link>
        <Link to="/" className="sidebar__child__nav">
          <img
            src="https://yt3.ggpht.com/ytc/AKedOLTxiU05Tl0IIyXgg8FF3lxx9oRBmQYwdW_XjCqn=s88-c-k-c0x00ffffff-no-rj"
            alt="Brian Design"
          />
          <span>Brian Design </span>
        </Link>
      </div>
      <div className="sidebar__child">
        <Link to="/" className="sidebar__child__nav">
          <SportsEsportsOutlinedIcon />
          <span>Gaming</span>
        </Link>
        <Link to="/" className="sidebar__child__nav">
          <OnlinePredictionOutlinedIcon />
          <span>Live</span>
        </Link>
        <Link to="/" className="sidebar__child__nav">
          <EmojiEventsOutlinedIcon />
          <span>Sports</span>
        </Link>
      </div>
      <div className="sidebar__child">
        <Link to="/" className="sidebar__child__nav">
          <SettingsOutlinedIcon />
          <span>Setting</span>
        </Link>
        <Link to="/" className="sidebar__child__nav">
          <FlagOutlinedIcon />
          <span>Report history</span>
        </Link>
        <Link to="/" className="sidebar__child__nav">
          <HelpOutlineOutlinedIcon />
          <span>Help</span>
        </Link>
        <Link to="/" className="sidebar__child__nav">
          <FeedbackOutlinedIcon />
          <span>Feedback</span>
        </Link>
      </div>
      <div className="sidebar__child">
        <div className="sidebar__child__about">
          <div className="sidebar__child__about__items">
            <a href="/">About</a>
            <a href="/">Press</a>
            <a href="/">Copyright</a>
          </div>
          <div className="sidebar__child__about__items">
            <a href="/">Contact Us</a>
            <a href="/">Creator</a>
            <a href="/">Advertise</a>
          </div>
          <div className="sidebar__child__about__items">
            <a href="/">Developer</a>
          </div>
        </div>

        <div className="sidebar__child__about">
          <div className="sidebar__child__about__items">
            <a href="/">Team</a>
            <a href="/">Privacy</a>
            <a href="/">Policy & Safety</a>
          </div>
          <div className="sidebar__child__about__items">
            <a href="/">How Youtube works</a>
          </div>
          <div className="sidebar__child__about__items">
            <a href="/">Test new features</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
