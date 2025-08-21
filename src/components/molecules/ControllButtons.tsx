import PlayButton from "../atoms/PlayButton";

interface ControllButtonsProps<T> {
  mediaItem: T;
  onClickPlay: (mediaItem: T) => void;
}

function ControllButtons<T>({
  mediaItem,
  onClickPlay,
}: ControllButtonsProps<T>) {
  return (
    <section>
      <span className="material-symbols-outlined">repeat</span>
      <span className="material-symbols-outlined">fast_rewind</span>
      <PlayButton size="big" mediaItem={mediaItem} onClickPlay={onClickPlay} />
      <span className="material-symbols-outlined">fast_forward</span>
      <span className="material-symbols-outlined">shuffle</span>
    </section>
  );
}

export default ControllButtons;
