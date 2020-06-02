import React, { Component } from 'react';
import MainVideoDetails from './MainVideoDetails';
import VideoComments from './VideoComments';
import axios from "axios"
import VideoList from "./VideoList";


class MainVideo extends Component {
  constructor(props){
    super(props)
    this.stateComment = {
      comments: null
    }
  }
  
  // fills array of new comment with input 
  handleInputChange = (event) =>{
    event.preventDefault();
    this.stateComment = ({
        [event.target.name]: event.target.value,
    })
  }
 
  // posts a new comment then calls to update comments
  postIt = (event) =>{
    event.preventDefault();
    const {comment} = this.stateComment

    axios.post('http://localhost:5000/api/'+ this.props.match.params.id +'/comments', {
      comments: comment
    }).then((response) => {
      this.commmentUpdate();
    })
  }

  state = {
    // Main Video Object
    mainVideo: {
    id: null,
    title: null,
    description:  null,
    channel: null,
    image: null,
    views: null,
    likes: null,
    duration: null,
    video: null,
    timestamp: null,
    comments: [
      {
        "name": null,
        "comment": null,
        "id": null,
        "likes": null,
        "timestamp": null
        },
    ]
    },

    // Side Video Objects
    sideVideo: [],
  }
  // axios get for initial states
  componentDidMount(){
    
    // gets side videos
    axios.get("http://localhost:5000/api/videos")
    .then(res => {
      this.setState({sideVideo: res.data})
    })
    // gets main video
    axios.get("http://localhost:5000/api/videos/" + this.props.match.params.id)
    .then(res => {
      this.setState({mainVideo: res.data})
    })
  }

  // axios get for state mainVideo
  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id === this.props.match.params.id) {
    } else {
      axios.get("http://localhost:5000/api/videos/" + this.props.match.params.id)
    .then(res => {
      this.setState({mainVideo: res.data})
    })
    }
  }
  // gets comments after new comment is added
  commmentUpdate(){
    axios.get("http://localhost:5000/api/videos/" + this.props.match.params.id)
    .then(res => {
      this.setState({mainVideo: res.data})
    })
  }
  
  // filters video list of video in state mainVideo 
  arrayFilter(array){
    return( array.filter(x => x.id !== this.state.mainVideo.id
    ))
  }

  // sorts comments by date
  dateSortArray(arr) {
    var sortedArr = arr.slice().sort((a, b) => b.timestamp - a.timestamp);
    
    return sortedArr; 
  }
  
    render() { 
        return (<div>
                    <div className="mainvideo-container">
                    <div className="mainvideo">
                      <video   src={"https://project-2-api.herokuapp.com/"} type="video/mp4" className="video" poster={(this.state.mainVideo.image)}>
                      </video>
                        <div className="video-player__controls">
                          <div className="video-player__btn">
                            <img src={require("../assets/Icons/SVG/Icon-play.svg")} alt=""/>
                          </div>
                          <div className="video-player__progress-bar">
                            <div className="video-player__progress-timeline">
                              <div className="video-player__progress-scrubber"></div>
                            </div>
                            
                            <div className="video-player__progress-text">0:00 / {this.state.mainVideo.duration}</div>
                          </div>
                          <div className="video-player__btn-group">
                            <button className="video-player__btn">
                              <img className="fas fa-expand" src={require("../assets/Icons/SVG/Icon-fullscreen.svg")} alt=""/>
                            </button>
                            <button className="video-player__btn"> 
                              <img className="fas fa-expand" src={require("../assets/Icons/SVG/Icon-volume.svg")} alt=""/>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <MainVideoDetails videoDetails={this.state.mainVideo} />
              <div className="comment__section">
                  <div className="test__group">
                      <h3 className="h1sect">Comments {Object.keys(this.state.mainVideo.comments).length}</h3>
        
                      <form id="comment-form" className="comment-form">
                        <span className="input__pic"></span>
                        
                        <label className="input2" htmlFor="input">JOIN THE CONVERSATION</label>
                        
                        <input
                        onChange={this.handleInputChange}
                        type="text"
                        id="input-comment"
                        className="input__comment"
                        name="comment"
                        placeholder="Add a new comment"
                        maxLength="210"
                        >
                        </input>
                        
                        <button onClick={this.postIt} className="input__button" type="submit">COMMENT</button>
                    </form>
                  </div>

                    {this.dateSortArray(this.state.mainVideo.comments).map(videoComments => <VideoComments key={videoComments.id} userName={videoComments.name} date={videoComments.timestamp} comment={videoComments.comment}/>)}
                    <VideoList sideVideoList={this.arrayFilter(this.state.sideVideo)} />
            </div>
        </div>);
    }
}

export default MainVideo;
