import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { PlaylistProp } from "../shared/Props";

const Playlist = (playlistObj: PlaylistProp) => {
  return (
    <Link
      to={`/playlist`}
      state={{
        path: "/playlistDetail",
        pid: `${playlistObj.playlistProps.playlistId}`,
      }}
      className="playlist__link"
    >
      <div className="playlist__container">
        <div className="playlist__container--left">
          <span className="playlist__span--title">
            {playlistObj.playlistProps.title}
          </span>
          <span className="playlist__span--author">
            {playlistObj.playlistProps.author}
          </span>
          <span className="playlist__span--updatedDate">
            {playlistObj.playlistProps.updatedDate}
          </span>
        </div>
        <div className="playlist__container--right">
          <span className="playlist__span--amount">
            {playlistObj.playlistProps.songs.length}
          </span>
          <div className="playlist-icon__container">
            <Icon icon="bxs:playlist" />
          </div>
        </div>
        <div className="hidden-background__container">
          <span className="hidden-background__containe__span">
            <Icon icon="codicon:debug-start" />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Playlist;
