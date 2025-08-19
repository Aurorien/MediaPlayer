import { useState } from "react";
import data from "../../../data.json";
import type { Song } from "../../types/Song";
import Header from "../molecules/Header";
import Playlist from "../molecules/Playlist";
import SongView from "../molecules/SongView";

function MusicPlayer() {
  const songs: Song[] = data.songs;

  const [song, setSong] = useState<Song | undefined>();

  const handleSongSelect = (selectedSong: Song) => {
    setSong(selectedSong);
  };
  return (
    <>
      <Header />
      <Playlist songs={songs} onSongSelect={handleSongSelect} />
      {song ? <SongView song={song} /> : <p>Choose a song in the playlist.</p>}
    </>
  );
}

export default MusicPlayer;
