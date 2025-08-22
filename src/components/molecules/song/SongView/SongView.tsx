import type { Song } from "../../../../types/Song";
import SongInfo from "../SongInfo/SongInfo";
import SongImage from "../../../atoms/SongImage/SongImage";
import Timeline from "../Timeline/Timeline";
import ControlButtons from "../../generic/ControlButtons/ControlButtons";
import "./SongView.css";
import { playSong } from "../../../../services/playSong";

interface SongViewProps {
  song: Song;
}

function SongView({ song }: SongViewProps) {
  return (
    <section className="song-view">
      <SongImage size="big" image={song.image} />
      <SongInfo songName={song.name} artistName={song.artist} />
      <Timeline />
      <ControlButtons mediaItem={song} onClickPlay={() => playSong(song)} />
    </section>
  );
}

export default SongView;
