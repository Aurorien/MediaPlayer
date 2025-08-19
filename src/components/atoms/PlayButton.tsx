interface PlayButtonProps<T> {
  size: "small" | "big";
  mediaItem: T;
  onClickPlay: (mediaItem: T) => void;
}

function PlayButton<T>({ size, mediaItem, onClickPlay }: PlayButtonProps<T>) {
  return (
    <span
      className={`material-symbols-outlined play-button ${size}`}
      onClick={() => onClickPlay(mediaItem)}
    >
      play_circle
    </span>
  );
}

export default PlayButton;
