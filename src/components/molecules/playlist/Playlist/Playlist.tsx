import PlaylistItem from "../PlaylistItem/PlaylistItem";
import type { Song } from "../../../../types/Song";
import "./Playlist.css";

interface PlaylistProps {
  songs: Song[];
  songPlayingId: string | null;
  onClickSong: (song: Song) => void;
  onClickPlay: (song: Song) => void;
}

function Playlist({
  songs,
  songPlayingId,
  onClickSong,
  onClickPlay,
}: PlaylistProps) {
  return (
    <section className="playlist">
      <ul>
        {songs.map((song) => (
          <PlaylistItem
            key={song.id}
            song={song}
            isPlaying={songPlayingId === song.id}
            onClickSong={onClickSong}
            onClickPlay={onClickPlay}
          />
        ))}
      </ul>
    </section>
  );
}

export default Playlist;
