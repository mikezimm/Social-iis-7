import * as React from 'react';
import VideoListItem from '../VideoListItem/VideoListItem';

export const VideoList = (props) => {
    const videoItems = props.videos.map((video, index) => {
        return (
            <VideoListItem
                key={index}
                video={video}
                onVideoSelect={props.onVideoSelect} />
        );
    });
    //console.log('List width: ', props.listWidth);

    if ( props.videos.length < 2 ) { return (<div></div>); } else {
        return (
            // <ul className="ms-Grid-col ms-lg4 ms-xl4">
            //   {videoItems}
            // </ul>
            //<div style={{width: props.listWidth}}>
            <ul className="ms-Grid-col ms-lg4 ms-xl4">
                {videoItems}
            </ul>
            //</div>
        );
    }

};

// export default VideoList;
