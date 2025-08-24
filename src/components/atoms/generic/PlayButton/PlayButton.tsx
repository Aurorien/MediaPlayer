import "./PlayButton.css";
interface PlayButtonProps<T> {
  size: "small" | "big";
  mediaItem: T;
  isPlaying: boolean;
  onClickPlay: (mediaItem: T) => void;
}

function PlayButton<T>({
  size,
  mediaItem,
  isPlaying,
  onClickPlay,
}: PlayButtonProps<T>) {
  return (
    <div
      className={`material-symbols-outlined play-button ${size}`}
      onClick={() => onClickPlay(mediaItem)}
    >
      {isPlaying ? "pause_circle" : "play_circle"}
    </div>
  );
}

export default PlayButton;
