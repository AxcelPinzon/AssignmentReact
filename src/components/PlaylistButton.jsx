import React, { useState } from 'react';
import Vite from '/franco.jpg'; // path

function PlaylistButton() {
  const [currentTrack, setCurrentTrack] = useState(null);

  const tracks = [
    { title: 'The Fool', artist: 'Franco' },
    { title: 'Aurora Sunrise', artist: 'Franco' },
    { title: 'Breaking for the Weekend', artist: 'Franco' },
    { title: 'Elevate', artist: 'Franco' },
  ];

  function handleSelectTrack(track) {
    setCurrentTrack(track);
  }

  return (
    <div className="flex flex-col gap-4 w-full min-h-screen justify-center items-center">
      <h1>
        {currentTrack ? `Now Playing: ${currentTrack.title}` : 'Select a music'}
      </h1>
      {tracks.map((track) => (
        <button
          key={track.title}
          onClick={() => handleSelectTrack(track)}
          className="flex items-center min-w-80 p-4 gap-4 rounded-md border border-neutral-700 hover:bg-neutral-800 duration-300"
        >
          <img src={Vite} alt="icon" className="w-14 aspect-square h-auto rounded-md bg-white" />
          <div className="flex flex-col items-start">
            <h4>{track.title}</h4>
            <p className="text-neutral-400">{track.artist}</p>
          </div>
        </button>
      ))}
    </div>
  );
}

export default PlaylistButton;