import "./playlist-content.css";
import React from 'react';
import { useGetUserQuery, useGetPlaylistsQuery, useGetPlaylistTracksQuery } from "../../api/apiSlice";
import { SpotifyPlaylist, SpotifyPlaylists, SpotifyTracks } from "../../types";
import TrackItem from "../track-item/track-item";

type PlaylistContentProps = {
    playlist?: SpotifyPlaylist;
    accesstoken?: string;
};
  
const PlaylistContent : React.FC<PlaylistContentProps> = ({ playlist, accesstoken }) => {
    const href = playlist ? playlist.tracks.href : "";
    const { data: trueplaylist } = useGetPlaylistTracksQuery(href, { skip: !accesstoken });

    if (playlist) {
        return (
            <div className="playlist-content-main_div no_justcenter">
                <div className="playlist-content">
                    <img className="playlist-content-img" src={playlist.images.length != 0 ? playlist.images[0].url : "https://i.pinimg.com/originals/cd/90/15/cd9015a9ca56bb73e0aa65d931be1fd8.jpg"} alt="playlist-image" />
                    <div className="playlist-content-text">
                        <p className="playlist-content-text-author">Playlist publique</p>
                        <h2 className="playlist-content-text-title">{playlist.name}</h2>
                        <p className="playlist-content-text-desc">{playlist.description}</p>
                        <p className="playlist-content-text-author"> {playlist.owner.display_name}</p>
                    </div>
                </div>

                {
                trueplaylist?.items.map((item, index) => (
                    <TrackItem key={index} index={index} image={item.track.album.images[0].url} title={item.track.name} author={item.track.artists[0].name} album={item.track.album.name} date={item.track.album.release_date} duration={item.track.duration_ms} />
                ))
                }
            </div>
        );
    } else {
        return (
            <div className="playlist-content-main_div content-tracks-noplaylist">
                <h3 className="content-tracks-noplaylist-text">🏋🏻‍♂️Aucune Playlist Sélectionnée🏋🏽‍♂️</h3>
            </div>
        );
    }
};
  
export default PlaylistContent;