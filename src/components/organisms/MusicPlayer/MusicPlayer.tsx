import { useState } from "react";
import data from "../../../data.json";
import type { Song } from "../../../types/Song";
import Header from "../../molecules/Header/Header";
import Playlist from "../../molecules/playlist/Playlist/Playlist";
import SongView from "../../molecules/song/SongView/SongView";
import "./MusicPlayer.css";
import { playSong } from "../../../services/playSong";

function MusicPlayer() {
  const songs: Song[] = data.songs;

  const [song, setSong] = useState<Song | undefined>();
  const [songPlayingId, setSongPlayingId] = useState<string | null>(null);

  const handleSongSelect = (selectedSong: Song) => {
    if (selectedSong !== song) {
      setSong(selectedSong);
    } else {
      return null;
    }
  };

  const handleSongPlay = (selectedSong: Song) => {
    setSongPlayingId(
      selectedSong.id === songPlayingId ? null : selectedSong.id
    );
    playSong(selectedSong);
  };

  return (
    <>
      <Header />
      <div className="music-player-ctn">
        <Playlist
          songs={songs}
          songPlayingId={songPlayingId}
          onClickSong={handleSongSelect}
          onClickPlay={handleSongPlay}
        />
        {song && (
          <SongView
            song={song}
            isPlaying={song.id === songPlayingId}
            onClickPlay={handleSongPlay}
          />
        )}
      </div>
    </>
  );
}

export default MusicPlayer;
