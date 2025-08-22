import type { Song } from "../../../../types/Song";
import PlayButton from "../../../atoms/generic/PlayButton/PlayButton";
import SongImage from "../../../atoms/SongImage/SongImage";
import SongInfoText from "../../shared/SongInfoText/SongInfoText";
import "./PlaylistItem.css";

interface PlaylistItemProps {
  song: Song;
  onClickSong: (song: Song) => void;
  onClickPlay: (song: Song) => void;
}

function PlaylistItem({ song, onClickSong, onClickPlay }: PlaylistItemProps) {
  return (
    <li className="playlist-item" onClick={() => onClickSong(song)}>
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
