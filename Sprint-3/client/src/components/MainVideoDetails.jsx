import React, { Component } from 'react';

class MainVideoDetails extends Component {

    // renders out the details component of the page
    render() { 
        var date = new Date(this.props.videoDetails.timestamp).toLocaleDateString("en-US")
        return <div className="main-video-details">
            {/* video title */}
            <h1 className="main-video-details__title">{this.props.videoDetails.title}</h1>
            
        <div className="main-video-details__divider">
            {/* channel name and date posted */}
            <div className="main-video-details__chan-date-container">
                <p className="main-video-details__chan-date--channel">By {this.props.videoDetails.channel}</p>
                <p className="main-video-details__chan-date--date">{date}</p>
            </div>
            {/* likes and views count */}
            <div className="main-video-details__views-likes-container">
                <div className="main-video-details__views-container">
                    <img className="main-video-details__views-img" src={require("../assets/Icons/SVG/Icon-views.svg")} alt="views"/>
                    <p className="main-video-details__views">{this.props.videoDetails.views}</p>
                </div>
                <div className="main-video-details__likes-container">
                    <img className="main-video-details__likes-img" src={require("../assets/Icons/SVG/Icon-likes.svg")} alt="likes"/>
                    <p className="main-video-details__likes">{this.props.videoDetails.likes}</p>
                </div>
            </div>
           {/* video description box */}
        </div>
            <div className="main-video-details__desc-container">
                <p className="main-video-details__description">{this.props.videoDetails.description}</p>
            </div>
        </div>;
    }
}
 
export default MainVideoDetails;
