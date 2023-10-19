// USER //

export type ExternalUrls = {
    spotify: string;
};
  
export type Follower = {
    href: string;
    total: number;
};
  
export type Image = {
    url: string;
    height: number;
    width: number;
};
  
export type ExplicitContent = {
    filter_enabled: boolean;
    filter_locked: boolean;
};

export type User = {
    country: string;
    display_name: string;
    email: string;
    explicit_content: ExplicitContent;
    external_urls: ExternalUrls;
    followers: Follower;
    href: string;
    id: string;
    images: Image[];
    product: string;
    type: string;
    uri: string;
};

// // //


// SPOTIFY PLAYLIST //
  
export type Owner = {
    external_urls: ExternalUrls;
    followers: Follower;
    href: string;
    id: string;
    type: string;
    uri: string;
    display_name: string;
};
  
export type Tracks = {
    href: string;
    total: number;
};
  
export type SpotifyPlaylist = {
    collaborative: boolean;
    description: string;
    external_urls: ExternalUrls;
    href: string;
    id: string;
    images: Image[];
    name: string;
    owner: Owner;
    public: boolean;
    snapshot_id: string;
    tracks: Tracks;
    type: string;
    uri: string;
};

export type SpotifyPlaylists = {
    href: string;
    limit: number;
    next: string;
    offset: number;
    previous: string;
    total: number;
    items: SpotifyPlaylist[];
};

// SPOTIFY TRACK //
export type SpotifyTracks = {
    href: string;
    limit: number;
    next: string;
    offset: number;
    previous: string;
    total: number;
    items: Array<{
      added_at: string;
      added_by: {
        external_urls: ExternalUrls;
        followers: Follower;
        href: string;
        id: string;
        type: string;
        uri: string;
      };
      is_local: boolean;
      track: {
        album: {
          album_type: string;
          total_tracks: number;
          available_markets: string[];
          external_urls: ExternalUrls;
          href: string;
          id: string;
          images: Image[];
          name: string;
          release_date: string;
          release_date_precision: string;
          restrictions: {
            reason: string;
          };
          type: string;
          uri: string;
          artists: Array<{
            external_urls: ExternalUrls;
            href: string;
            id: string;
            name: string;
            type: string;
            uri: string;
          }>;
        };
        artists: Array<{
          external_urls: ExternalUrls;
          followers: Follower;
          genres: string[];
          href: string;
          id: string;
          images: Image[];
          name: string;
          popularity: number;
          type: string;
          uri: string;
        }>;
        available_markets: string[];
        disc_number: number;
        duration_ms: number;
        explicit: boolean;
        external_ids: {
          isrc: string;
          ean: string;
          upc: string;
        };
        external_urls: ExternalUrls;
        href: string;
        id: string;
        is_playable: boolean;
        linked_from: {};
        restrictions: {
          reason: string;
        };
        name: string;
        popularity: number;
        preview_url: string;
        track_number: number;
        type: string;
        uri: string;
        is_local: boolean;
      };
    }>;
  };

// Spotify search //

export type SpotifyTrackItem = {
    album: {
      album_type: string;
      total_tracks: number;
      available_markets: string[];
      external_urls: ExternalUrls;
      href: string;
      id: string;
      images: Image[];
      name: string;
      release_date: string;
      release_date_precision: string;
      restrictions: {
        reason: string;
      };
      type: string;
      uri: string;
      artists: Array<{
        external_urls: ExternalUrls;
        href: string;
        id: string;
        name: string;
        type: string;
        uri: string;
      }>;
    };
    artists: Array<{
      external_urls: ExternalUrls;
      followers: Follower;
      genres: string[];
      href: string;
      id: string;
      images: Image[];
      name: string;
      popularity: number;
      type: string;
      uri: string;
    }>;
    available_markets: string[];
    disc_number: number;
    duration_ms: number;
    explicit: boolean;
    external_ids: {
      isrc: string;
      ean: string;
      upc: string;
    };
    external_urls: ExternalUrls;
    href: string;
    id: string;
    name: string;
    popularity: number;
    preview_url: string;
    track_number: number;
    type: string;
    uri: string;
};