import * as React from 'react';

export const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Please be sure that the web part is properly configured with a valid API key!</div>;
  }
  console.log('Youtube Video: ', video);
  //If you use search api, then the video id is: video.id.videoId for Playlist or Channel, its: video.snippet.resourceId.videoId
  const videoId = video.snippet.resourceId ? video.snippet.resourceId.videoId : video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;
  console.log('Youtube Video url: ', url);

  return (
    <div className="ms-Grid-col ms-lg8">
      <p><span className="label label-default">Channel: {video.snippet.channelTitle}</span></p>
      <iframe src={url} frameBorder="0" allowFullScreen></iframe>
      <div><h2>{video.snippet.title}</h2></div>
      <div>{video.snippet.description}</div>
    </div>
  );
};
