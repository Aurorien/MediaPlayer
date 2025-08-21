import type { Song } from "../../types/Song";
import SongInfo from "./SongInfo";
import SongImage from "../atoms/SongImage";
import Timeline from "./Timeline";
import ControllButtons from "./ControllButtons";
import "./SongView.css";
import { playSong } from "../../shared/playSong";

interface SongViewProps {
  song: Song;
}

function SongView({ song }: SongViewProps) {
  return (
    <section className="song-view">
      <SongImage size="big" image={song.image} />
      <SongInfo songName={song.name} artistName={song.artist} />
      <Timeline />
      <ControllButtons mediaItem={song} onClickPlay={() => playSong(song)} />
    </section>
  );
}

export default SongView;
