import type { Song } from "../../types/Song";
import PlayButton from "../atoms/PlayButton";
import SongImage from "../atoms/SongImage";
import SongInfoText from "./SongInfoText";
import "./PlaylistItem.css";

interface PlaylistItemProps {
  song: Song;
  onClickPlay: (song: Song) => void;
}

function PlaylistItem({ song, onClickPlay }: PlaylistItemProps) {
  return (
    <li className="playlist-item">
      <SongImage size="small" image={song.image} />
      <SongInfoText
        size={"small"}
        center={false}
        songName={song.name}
        artistName={song.artist}
      />
      <PlayButton size="small" mediaItem={song} onClickPlay={onClickPlay} />
    </li>
  );
}

export default PlaylistItem;
