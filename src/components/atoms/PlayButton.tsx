interface PlayButtonProps {
  size: "small" | "big";
}

function PlayButton({ size }: PlayButtonProps) {
  return (
    <span className={`material-symbols-outlined play-button ${size}`}>
      play_circle
    </span>
  );
}

export default PlayButton;
