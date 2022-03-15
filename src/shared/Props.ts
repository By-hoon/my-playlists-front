export interface PlayBoxProps {
  children: React.ReactNode;
}

export interface PlaylistResponseProps {
  author: string;
  bookmark: boolean;
  description: string;
  playlistId: number;
  songs: Array<SongProps>;
  title: string;
  updatedDate: string;
  visibility: boolean;
}

export interface PlaylistProp {
  playlistProps: PlaylistResponseProps;
}

export interface SongProps {
  createdDate: string;
  description: string;
  title: string;
  videoId: string;
}
