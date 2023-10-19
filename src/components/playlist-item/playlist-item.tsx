import "./playlist-item.css";
import React from 'react';
import { SpotifyPlaylist, SpotifyPlaylists, SpotifyTracks } from "../../types";

type PlaylistItemProps = {
  item: SpotifyPlaylist;
  onClick: () => void;
};

const PlaylistItem : React.FC<PlaylistItemProps> = ({ item, onClick }) => {
  return (
    <div className="playlist-item" onClick={onClick}>
      <img className="playlist-item-img" src={item.images.length != 0 ? item.images[0].url : "https://i.pinimg.com/originals/cd/90/15/cd9015a9ca56bb73e0aa65d931be1fd8.jpg"} alt="playlist-image" />
      <div className="playlist-item-text">
        <h3 className="playlist-item-text-title">{item.name}</h3>
        <p className="playlist-item-text-author">{item.owner.display_name}</p>
      </div>
    </div>
  );
};

export default PlaylistItem;