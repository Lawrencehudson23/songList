import React, { useState, useContext } from "react";
import { SongContext } from "./SongContext";

const AddSong = () => {
  const [title, setTitle] = useState("");
  const [singer, setSinger] = useState("");
  const [songs, setSongs] = useContext(SongContext);
  const changeTitle = (e) => {
    setTitle(e.target.value);
  };
  const changeSinger = (e) => {
    setSinger(e.target.value);
  };

  const addSong = (e) => {
    e.preventDefault();
    setSongs((prevSongs) => [
      ...prevSongs,
      {
        title: title,
        singer: singer,
      },
    ]);
    setTitle("");
    setSinger("");
  };
  return (
    <form onSubmit={addSong}>
      <input type="text" name="title" value={title} onChange={changeTitle} />
      <input type="text" name="singer" value={singer} onChange={changeSinger} />
      <button>submit</button>
    </form>
  );
};

export default AddSong;
