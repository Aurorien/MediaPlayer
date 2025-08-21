import { useState } from "react";
import data from "../../../public/data.json";
import type { Song } from "../../types/Song";
import Header from "../molecules/Header";
import Playlist from "../molecules/Playlist";
import SongView from "../molecules/SongView";
import "./MusicPlayer.css";

function MusicPlayer() {
  const songs: Song[] = data.songs;

  const [song, setSong] = useState<Song | undefined>();

  const handleSongSelect = (selectedSong: Song) => {
    setSong(selectedSong);
  };

  return (
    <>
      <Header />
      <div className="music-player-ctn">
        <Playlist songs={songs} onClickPlay={handleSongSelect} />
        {song ? (
          <SongView song={song} />
        ) : (
          <p>Choose a song in the playlist.</p>
        )}
      </div>
    </>
  );
}

export default MusicPlayer;
