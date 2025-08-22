import PlayButton from "../../../atoms/generic/PlayButton/PlayButton";
import "./ControlButtons.css";

interface ControlButtonsProps<T> {
  mediaItem: T;
  onClickPlay: (mediaItem: T) => void;
}

function ControlButtons<T>({ mediaItem, onClickPlay }: ControlButtonsProps<T>) {
  return (
    <section className="control-buttons">
      <span className="material-symbols-outlined">repeat</span>
      <div className="playback-controls-ctn">
        <span className="material-symbols-outlined rew">fast_rewind</span>
        <PlayButton
          size="big"
          mediaItem={mediaItem}
          onClickPlay={onClickPlay}
        />
        <span className="material-symbols-outlined ffw">fast_forward</span>
      </div>
      <span className="material-symbols-outlined">shuffle</span>
    </section>
  );
}

export default ControlButtons;
