import type { Song } from "../../../../types/Song";
import SongInfo from "../SongInfo/SongInfo";
import SongImage from "../../../atoms/SongImage/SongImage";
import Timeline from "../Timeline/Timeline";
import ControlButtons from "../../generic/ControlButtons/ControlButtons";
import "./SongView.css";

interface SongViewProps {
  song: Song;
  isPlaying: boolean;
  onClickPlay: (song: Song) => void;
}

function SongView({ song, isPlaying, onClickPlay }: SongViewProps) {
  return (
    <section className="song-view">
      <SongImage size="big" image={song.image} />
      <SongInfo songName={song.name} artistName={song.artist} />
      <Timeline />
      <ControlButtons
        mediaItem={song}
        isPlaying={isPlaying}
        onClickPlay={onClickPlay}
      />
    </section>
  );
}

export default SongView;
