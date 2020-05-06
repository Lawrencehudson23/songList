import React, { useState, useContext } from "react";
import Song from "./Song";
import { SongContext } from "./SongContext";
export default function SongList() {
  const [songs, setSongs] = useContext(SongContext);
  return (
    <div>
      {songs.map((song) => (
        <Song title={song.title} singer={song.singer} key={song.id} />
      ))}
    </div>
  );
}
