import ReactPlayer from "react-player/youtube";

function VideoPlayer({ url }) {
  return (
    <div>
      <ReactPlayer 
      url={url} 
      controls={true} 
      volume={0.5}
      width={"100%"}
      height={"100%"}
       />
    </div>
  );
}

export default VideoPlayer;
