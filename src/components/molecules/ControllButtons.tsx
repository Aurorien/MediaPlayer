import PlayButton from "../atoms/PlayButton";

function ControllButtons() {
  return (
    <section>
      <span className="material-symbols-outlined">repeat</span>
      <span className="material-symbols-outlined">fast_rewind</span>
      <PlayButton size="big" />
      <span className="material-symbols-outlined">fast_forward</span>
      <span className="material-symbols-outlined">shuffle</span>
    </section>
  );
}

export default ControllButtons;
