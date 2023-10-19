import "./search-content.css";
import React from 'react';
import { useGetUserQuery, useGetPlaylistsQuery, useGetPlaylistTracksQuery, useGetSearchTrackResultQuery } from "../../api/apiSlice";
import { SpotifyPlaylist, SpotifyPlaylists, SpotifyTracks } from "../../types";
import TrackItem from "../track-item/track-item";

type SearchContentProps = {
    searchSTR: string;
    accessToken?: string;
};
  
const SearchContent : React.FC<SearchContentProps> = ({ searchSTR, accessToken }) => {
    const { data: searching } = useGetSearchTrackResultQuery(searchSTR, { skip: !accessToken });
    console.log(searching);

    if (searchSTR) {
        return (
            <div className="playlist-content-main_div no_justcenter">
                {
                    searching?.map((item, index) => (
                        <TrackItem key={index} index={index} image={item.album.images[0].url} title={item.name} author={item.artists[0].name} album={item.album.name} date={item.album.release_date} duration={item.duration_ms} />
                    ))
                }
            </div>
        );
    } else {
        return (
            <div className="playlist-content-main_div content-tracks-noplaylist">
                <h3 className="content-tracks-noplaylist-text">💪🏼Aucune musique n'a été trouvée💪🏽</h3>
            </div>
        );
    }
};
  
export default SearchContent;