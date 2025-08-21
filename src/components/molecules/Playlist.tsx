import PlaylistItem from "./PlaylistItem";
import type { Song } from "../../types/Song";
import "./Playlist.css";

interface PlaylistProps {
  songs: Song[];
  onClickSong: (song: Song) => void;
  onClickPlay: (song: Song) => void;
}

function Playlist({ songs, onClickSong, onClickPlay }: PlaylistProps) {
  return (
    <section className="playlist">
      <ul>
        {songs.map((song) => (
          <PlaylistItem
            key={song.id}
            song={song}
            onClickSong={onClickSong}
            onClickPlay={onClickPlay}
          />
        ))}
      </ul>
    </section>
  );
}

export default Playlist;
