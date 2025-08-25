import SongInfoText from "../../SongInfoText/SongInfoText";
import "./SongInfo.css";

interface SongInfoProps {
  songName: string;
  artistName: string;
}

function SongInfo({ songName, artistName }: SongInfoProps) {
  return (
    <section className="song-info">
      <span className="material-symbols-outlined">add_circle</span>
      <SongInfoText
        size={"big"}
        center={true}
        songName={songName}
        artistName={artistName}
      />
      <span className="material-symbols-outlined">favorite</span>
    </section>
  );
}

export default SongInfo;
