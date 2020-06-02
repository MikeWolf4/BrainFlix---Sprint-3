import React, { Component } from 'react';
import VideoList from './VideoList';
import {Link} from "react-router-dom";

class VideoCard extends Component {

    // scrolls screen to top when video card selected
    eventHandle = (event) =>{
        window.scrollTo(0, 0)
    }

    // renders single video card layout
    render() { 
        return <Link  to={"/main/"  + (this.props.id)} onClick={this.eventHandle} >
            <div className="videocard">
                <div className="videocard__img-container">
                <img className="videocard__img" src={this.props.videoImage} alt="video thumbnail"/>
                </div>
                <div className="videocard__channel-title-container">
                    <h4 className="videocard__title">{this.props.videoTitle}</h4>
                    <h4 className="videocard__channel">{this.props.videoChannel}</h4>
                </div>
            </div>
                
        </Link>;
    }
}
 
export default VideoCard ;
