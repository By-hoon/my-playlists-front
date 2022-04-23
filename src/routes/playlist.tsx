import { useLocation } from "react-router-dom";
import EditBox from "../components/EditBox";
import PlayBox from "../components/PlayBox";
import PlaylistDetail from "../components/PlaylistDetail";
import SearchSongs from "../components/SearchSongs";
import Song from "../components/Song";
import SongResult from "../components/SongResult";
import YoutubeVideo from "../components/YoutubeVideo";
import { songs } from "../test/user";

interface StateProps {
  page: string;
  songId?: string;
}

const Playlist = () => {
  const { page, songId } = useLocation().state as StateProps;
  const Render = () => {
    switch (page) {
      // 선택 플레이리스트 상세화면
      case "showSongs": {
        return (
          <PlayBox
            top={
              <>
                <PlaylistDetail />
                <EditBox />
              </>
            }
            left={
              <>
                {songs?.map((song) => (
                  <Song key={song.id} song={song} />
                ))}
              </>
            }
            right={null}
          />
        );
      }

      // 선택 플레이리스트 노래 재생화면
      case "playSongs": {
        const song = songs.find((song) => song.id === songId);
        return (
          <PlayBox
            top={
              <>
                <PlaylistDetail />
                <EditBox />
              </>
            }
            left={
              <>
                {songs?.map((song) => (
                  <Song key={song.id} song={song} />
                ))}
              </>
            }
            right={<YoutubeVideo key={song.id} song={song} />}
          />
        );
      }

      // 선택 플레이리스트 노래 제목 검색화면
      case "searchSong": {
        return (
          <PlayBox
            top={
              <>
                <PlaylistDetail />
                <EditBox />
              </>
            }
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
              </>
            }
          />
        );
      }
    }
    return null;
  };
  return Render();
};

export default Playlist;
