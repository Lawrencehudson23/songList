import React, { useContext } from "react";
import "./Nav.css";
import { SongContext } from "./SongContext";
export default function Nav() {
  const [songs, setSongs] = useContext(SongContext);
  return (
    <div className="nav">
      <h3>Lawrence Hudson</h3>
      <p>List of Songs: {songs.length}</p>
    </div>
  );
}
