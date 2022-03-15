import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { PlaylistProp } from "../shared/Props";
import tempThum from "../test/tempThum.jpg";

const Playlist = (playlistObj: PlaylistProp) => {
  return (
    <div className="playlist__container">
      <Link
        to={`/playlist/${playlistObj.playlistProps.playlistId}`}
        className="link"
      >
        <img src={tempThum} alt="crew-logo" className="playlist__image" />
        <div className="playlist__container--forward">
          <span className="playlist__span--amount">
            {playlistObj.playlistProps.songs.length}
          </span>
          <div className="playlist-icon__container">
            <Icon icon="bxs:playlist" />
          </div>
        </div>
        <div className="playlist__container--backward">
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
      </Link>
    </div>
  );
};

export default Playlist;
