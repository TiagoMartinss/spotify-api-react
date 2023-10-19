import "./track-item.css";
import React from 'react';

type TrackItemProps = {
  index: number;
  image: string;
  title: string;
  author: string;
  album: string;
  date: string;
  duration: number
};

const TrackItem: React.FC<TrackItemProps> = ({ index, image, title, author, album, date, duration }) => {

  const convertMsToTime = (ms : number) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = ((ms % 60000) / 1000).toFixed(0);
    return `${minutes}m${seconds}s`;
  };

  return (
    <div className="track-item">
      <p className="track-item-number">{index}</p>
      <img className="track-item-img" src={image} alt="track_image" />
      <div className="track-item-tt track-item-child">
        <p className="track-item-child track-item-tt-title">{title}</p>
        <p className="track-item-child track-item-tt-author">{author}</p>
      </div>
      <p className="track-item-child track-item-album">{album}</p>
      <p className="track-item-child track-item-date">{date}</p>
      <p className="track-item-child track-item-duration">{convertMsToTime(duration)}</p>
    </div>
  );
};

export default TrackItem;