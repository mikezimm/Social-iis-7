import * as React from 'react';

export const VideoDetail = ({ video, width }) => {
  if (!video) {
    return <div>Please be sure that the web part is properly configured with a valid API key!</div>;
  }
  //console.log('Youtube Video: ', video);
  //If you use search api, then the video id is: video.id.videoId for Playlist or Channel, its: video.snippet.resourceId.videoId
  let videoId = '';
  let channelTitle = '';
  let playListTitle = '';
  let publishedAt = '';
  let videoTitle = '';

  if (video.kind === 'youtube#playlistItem') {
    videoId = video.snippet.resourceId.videoId;
    videoTitle = video.snippet.title;
    channelTitle = video.snippet.channelTitle;
    playListTitle = ''; //Not avaialable on this kind of item
    publishedAt = (new Date(video.snippet.publishedAt)).toLocaleDateString() + ' at ' +  (new Date(video.snippet.publishedAt)).toLocaleTimeString();

  } else if ( video.kind === 'youtube#video' ) {
    videoId = video.id;
    videoTitle = video.snippet.title;
    channelTitle = video.snippet.channelTitle;
    playListTitle = ''; //Not avaialable on this kind of item
    publishedAt = (new Date(video.snippet.publishedAt)).toLocaleDateString() + ' at ' +   (new Date(video.snippet.publishedAt)).toLocaleTimeString();

  }

  let description = ( videoTitle !== video.snippet.description ) ? video.snippet.description: '' ;
  const url = `https://www.youtube.com/embed/${videoId}`;
  //console.log('Youtube Video url: ', url);
  //console.log('Video width: ', width);
  let height = 9/16 * width;
  //style={{display: 'block'}}
  return (
    <div className="ms-Grid-col ms-lg8">

      <iframe src={url} frameBorder="0" width={width} height={height} allowFullScreen></iframe>
      <div><h2>{videoTitle}</h2></div>
      <div>
        <p>Published: {publishedAt}</p>
        <p><span className="label label-default">on Channel: {channelTitle}</span></p>
        <p>{description}</p>
      </div>
    </div>
  );
};
