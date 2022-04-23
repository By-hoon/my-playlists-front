import PlayBox from "../components/PlayBox";
import PlaylistDetail from "../components/PlaylistDetail";
import SearchSongs from "../components/SearchSongs";
import Song from "../components/Song";
import SongResult from "../components/SongResult";
import { songs } from "../test/user";

const seaerchSongResult = () => {
  return (
    <PlayBox
      top={<PlaylistDetail />}
      left={
        <>
          {songs?.map((song) => (
            <Song key={song.id} song={song} />
          ))}
        </>
      }
      right={
        <>
          <SearchSongs />
          {songs?.map((song) => (
            <SongResult key={song.id} song={song} />
          ))}
        </>
      }
    />
  );
};

export default seaerchSongResult;
