import React, { Component } from 'react';
import MainVideoDetails from './MainVideoDetails';

class VideoComments extends Component {

    // renders single comment layout
    render() { 
        let date = new Date(this.props.date).toLocaleDateString("en-US")
        return <div className="comment__container">
                    <span className="comment__pic"></span>
                    <h3 className="comment__username">{this.props.userName}</h3>
                    <div className="date-fix">
                    <p className="comment__date">{date}</p>
                    </div>
                    <p className="comment__message">{this.props.comment}</p>
               </div>;
    }
}
 
export default VideoComments;


