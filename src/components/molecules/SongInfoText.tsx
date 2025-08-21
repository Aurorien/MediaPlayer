import "./SongInfoText.css";

interface SongInfoTextProps {
  size: "small" | "big";
  center: boolean;
  songName: string;
  artistName: string;
}

function SongInfoText({
  size,
  center,
  songName,
  artistName,
}: SongInfoTextProps) {
  return (
    <div className={`song-info-text ${size} ${center ? "center" : ""}`}>
      <h2>{songName}</h2>
      <p>{artistName}</p>
    </div>
  );
}

export default SongInfoText;
