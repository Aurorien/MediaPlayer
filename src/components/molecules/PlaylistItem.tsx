import type { Song } from "../../types/Song";
import PlayButton from "../atoms/PlayButton";
import SongImage from "../atoms/SongImage";
import SongInfo from "./SongInfoText";

interface PlaylistItemProps {
  song: Song;
  onClickPlay: (song: Song) => void;
}

function PlaylistItem({ song, onClickPlay }: PlaylistItemProps) {
  return (
    <li>
      <SongImage size="small" image={song.image} />
      <SongInfo
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
