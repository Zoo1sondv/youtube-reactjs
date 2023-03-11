import Menu from '../screens/watch/Menu';
import React from 'react';
import moment from 'moment';
import { formatCount } from '@/utils/formatCount';

function Video({
  direction = 'column', // flex-direction
  isShow = false, // show menu & subscribe
  isDetail = false, // show VideoInfo detail
  isVideo = false, // show Video play
  videoId = '', // link video
  urlThumbnail = '', // link  thumbnail of video
  title = '', // title of video
  nameChannel = '', // name of channel
  urlAvt = '', //avt of channel
  viewCount = '', // view of video
  countLike = '2.3M', // count like
  description = '', // description of video
  publishedAt = '', // public at video
  onClick, // handle click card video
}) {
  const handleClick = (e) => {
    if (!onClick) return;
    onClick(e);
  };
  return (
    <div
      className="video"
      style={{ flexDirection: direction }}
      onClick={handleClick}>
      {isVideo ? (
        <iframe
          className="video__stream"
          width="420"
          height="315"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        />
      ) : (
        <img className="video__thumbnail" src={urlThumbnail} alt="thumbnail" />
      )}

      <div className="video__info">
        {isDetail ? (
          <div className="video__info-detail">
            <h3 className="video__info-detail__title">{title}</h3>
            <div className="video__info-detail__menu">
              <span className="video__info-detail__menu__view">
                {viewCount} views
                <span> • </span> {moment(publishedAt).format('MMM D, YYYY')}
              </span>
              <Menu
                className="video__info-detail__menu__list"
                disabled={!isShow}
                countLike={`${formatCount.convertNumberToSing(countLike)}`}
              />
            </div>

            <div className="video__info-detail__channel">
              <div className="channel-info">
                <div className="channel-info__name">
                  <img src={urlAvt} alt="avt" />
                  <div className="channel-info__name-channel">
                    <span className="channel-info__name-channel__title">
                      {nameChannel}
                    </span>
                    <span className="channel-info__name-channel__subscribers">
                      19.4K subscribers
                    </span>
                  </div>
                </div>
                <button className="channel-info__sub-btn" disabled={!isShow}>
                  subscribe
                </button>
              </div>

              <div
                className={
                  isShow
                    ? 'video__info-detail__channel__desc--detail'
                    : 'video__info-detail__channel__desc--short'
                }>
                {description}
              </div>
            </div>
          </div>
        ) : (
          <div className="video__info-short">
            <img
              alt="avt"
              src={urlAvt}
              disabled={isShow}
              className="video__info-short__avt-channel"
            />
            <div className="video__info-short__item">
              <span className="video__info-short__item__title">{title}</span>
              <span className="video__info-short__item__nameChannel">
                {nameChannel}
              </span>
              <span className="video__info-short__item__view">
                {viewCount} views <span> • </span> {publishedAt}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Video;
