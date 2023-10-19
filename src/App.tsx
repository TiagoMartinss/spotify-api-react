import "./App.css";

import { FC, ReactElement, useState } from "react";
import { useSelector } from "react-redux";
import { authSelectors } from "./containers/auth/selectors";
import { useGetUserQuery, useGetPlaylistsQuery, useGetPlaylistTracksQuery, useGetSearchTrackResultQuery } from "./api/apiSlice";
import { SpotifyPlaylist, SpotifyPlaylists, SpotifyTracks } from "./types";

import Search from "./components/search/search";
import PlaylistContent from "./components/playlist-content/playlist-content";
import PlaylistItem from "./components/playlist-item/playlist-item";
import Header from "./components/header/header";

const App: FC = (): ReactElement => {
  // Fetch data //
  const accessToken = useSelector(authSelectors.getAccessToken);
  const { data: user } = useGetUserQuery(undefined, { skip: !accessToken });
  const { data: playlists } = useGetPlaylistsQuery(undefined, { skip: !accessToken });
  //
  //
  
  const [selectedPlaylist, setSelectedPlaylist] = useState<SpotifyPlaylist | undefined>(undefined);
  const handlePlaylistClick = (playlist: SpotifyPlaylist) => {
    setSelectedPlaylist(playlist);
  };

  return (
    <div className="App">
      <div className="background-container">
      </div>
      <div className="main-container">
        <Header displayName={user?.display_name} product={user?.product} />
        <div className="content">


          <div className="content-playlists">
            <div className="content-child content-child-50 content-playlists-showdiv">
              <div className="content-playlists-header">
                <svg className="content-playlists-header-svg" data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 24 24" ><path d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z"></path></svg>
                <h2 className="content-playlists-header-text">Bibliothèque</h2>
              </div>
              {
                playlists?.items.map((item, index) => (
                  <PlaylistItem key={item.id} item={item} onClick={() => {
                      handlePlaylistClick(item)
                    }
                  } />
                ))
              }
              
            </div>
            <div className="content-child content-child-50 content-search">
              <Search accessToken={accessToken} />
            </div>
          </div>


          <div className="content-tracks content-child">
              <PlaylistContent playlist={(selectedPlaylist ? selectedPlaylist : undefined)} accesstoken={accessToken} />
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default App;
