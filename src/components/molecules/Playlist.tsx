import PlaylistItem from "./PlaylistItem";
import type { Song } from "../../types/Song";
import "./Playlist.css";

interface PlaylistProps {
  songs: Song[];
  onClickPlay: (song: Song) => void;
}

function Playlist({ songs, onClickPlay }: PlaylistProps) {
  return (
    <section>
      <ul className="playlist">
        {songs.map((song) => (
          <PlaylistItem key={song.id} song={song} onClickPlay={onClickPlay} />
        ))}
      </ul>
    </section>
  );
}

export default Playlist;
