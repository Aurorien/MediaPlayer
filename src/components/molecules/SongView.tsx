import type { Song } from "../../types/Song";
import SongInfo from "./SongInfo";
import SongImage from "../atoms/SongImage";
import Timeline from "./Timeline";
import ControllButtons from "./ControllButtons";
import "./SongView.css";

interface SongViewProps {
  song: Song;
}

function SongView({ song }: SongViewProps) {
  return (
    <section className="song-view">
      <SongImage size="big" image={song.image} />
      <SongInfo songName={song.name} artistName={song.artist} />
      <Timeline />
      <ControllButtons />
    </section>
  );
}

export default SongView;
