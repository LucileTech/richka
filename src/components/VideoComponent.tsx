// VideoComponent.tsx
import React, { useRef } from "react";
import { getAssetPath } from "../utils/getAssetPath";

const VideoComponent: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  return (
    <div className="video-container">
      <video ref={videoRef} className="video-element" controls>
        <source
          src={getAssetPath("/videos/runway-field.mp4")}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="controls">
        <button className="control-button" onClick={handlePlayPause}>
          &#9658;/&#10074;&#10074;
        </button>
      </div>
    </div>
  );
};

export default VideoComponent;
