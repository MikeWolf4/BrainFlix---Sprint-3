import React, { Component } from 'react';
import axios from "axios"

class Upload extends Component {
    // constructor with state data
     constructor(props){
         super(props)
         this.state = {
            title: null,
            description: null,
         }
        
     }

    // changes state with input text
    handleInputChange = (event) =>{
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value,
        })
    }
    
    // posts the state and redirects to new video when on publish click
    postIt = (event) =>{
        const { history } = this.props;
        event.preventDefault();
        const {title} = this.state
        const {description} = this.state
        if(title !== null || description !== null){
        axios.post('http://localhost:5000/api/videos', {
            title,
            description
        }).then(function (response) {
            history.push('/main/' + response.data.id)
        })
        }else
        return;
    }
    
    // clears input value when on cancel click
    sendThru = (event) => {
        this.refs.descriptionInput.value = "";
        this.refs.titleInput.value = "";
    }

    // rendures upload component
    render() { 
        return ( <div className="upload-main-container">
            
            <h1 className="upload-main__title">Upload Video</h1>
            {/* IMG / INPUT CONTAINER */}
            <div className="upload-main__box-borders">
                {/* IMAGE */}
                <div className="upload-main__image-container">
                    <label className="upload-main__label-title" htmlFor="id">VIDEO THUMBNAIL</label>
                    <img id="img" className="upload-main__image" src={require("../assets/Images/Upload-video-preview.jpg")} alt=""/>
                </div>
                {/* IMAGE */}   
                {/* INPUT */}
    
                  
                <form onSubmit={this.handleSubmit} className="upload-main__input-container">
                    <label className="upload-main__label-title" htmlFor="name">TITLE YOUR VIDEO</label>
                    <input onChange={this.handleInputChange} placeholder="Add a title to your video"  name="title" className="upload-main__input-title" id="name" ref={this.titleInput} type="text"/>
                    
                    <label className="upload-main__label-description" htmlFor="description">ADD A VIDEO DESCRIPTION</label>
                    <input onChange={this.handleInputChange} placeholder="Add a description of your video"  name="description" className="upload-main__input-description" id="description" ref={this.descriptionInput} type="text"/>
                </form>
                
                
                {/* INPUT */}
            </div>
            {/* IMG / INPUT CONTAINER */}
            {/* BUTTON CONTAINER */}
            <div className="upload-main__button-container">
                {/* BUTTONS */}
                <a className="upload-main__button-cancel" onClick={this.sendThru} href="">CANCEL</a>
                <a className="upload-main__button-publish" onClick={this.postIt} href="">PUBLISH</a>
                {/* BUTTONS */}
            </div>
            {/* BUTTON CONTAINER */}
            </div>);
    }
}
 
export default Upload;