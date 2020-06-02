import React, { Component } from 'react';
import VideoCard from './VideoCard';

class VideoList extends Component {
    
    // renders out a list of VideoCard components
    render() { 
        return <div className="videolist-container">
            <h3 className="video-list-title">NEXT VIDEO</h3>
            {this.props.sideVideoList.map(sideVideoList => <VideoCard key={sideVideoList.id} id={sideVideoList.id} videoTitle={sideVideoList.title} videoChannel={sideVideoList.channel} videoImage={sideVideoList.image}/>)}
        </div>;
    }
   
}

export default VideoList;



