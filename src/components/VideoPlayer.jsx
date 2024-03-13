import ReactPlayer from "react-player/youtube";

function VideoPlayer({ url }) {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <ReactPlayer url={url} controls={true} volume={0.5} />
    </div>
  );
}

export default VideoPlayer;
