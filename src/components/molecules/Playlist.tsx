import PlaylistItem from "./PlaylistItem";
import type { Song } from "../../types/Song";

interface PlaylistProps {
  songs: Song[];
  onSongSelect: (song: Song) => void;
}

function Playlist({ songs }: PlaylistProps) {
  return (
    <section>
      <ul className="playlist">
        {songs.map((song) => (
          <PlaylistItem key={song.id} song={song} />
        ))}
      </ul>
    </section>
  );
}

export default Playlist;
