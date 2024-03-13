import ReactPlayer from "react-player/youtube";

function VideoPlayer({ url }) {
  return (
    <div className="vidPlay">
      <ReactPlayer url={url} controls={true} volume={0.5} />
    </div>
  );
}

export default VideoPlayer;
