import { useState } from "react";
import data from "../../../src/data.json";
import type { Song } from "../../types/Song";
import Header from "../molecules/Header";
import Playlist from "../molecules/Playlist";
import SongView from "../molecules/SongView";
import "./MusicPlayer.css";
import { playSong } from "../../shared/playSong";

function MusicPlayer() {
  const songs: Song[] = data.songs;

  const [song, setSong] = useState<Song | undefined>();

  const handleSongSelect = (selectedSong: Song) => {
    if (selectedSong !== song) {
      setSong(selectedSong);
    } else {
      return null;
    }
  };

  const handleSongPlay = (selectedSong: Song) => {
    playSong(selectedSong);
  };

  return (
    <>
      <Header />
      <div className="music-player-ctn">
        <Playlist
          songs={songs}
          onClickSong={handleSongSelect}
          onClickPlay={handleSongPlay}
        />
        {song && <SongView song={song} />}
      </div>
    </>
  );
}

export default MusicPlayer;
