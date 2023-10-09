import React, { Component } from 'react'
import {Modal, Button } from 'react-bootstrap'
import 'video-react/dist/video-react.css'
import { Player, BigPlayButton } from 'video-react'
import RestClient from "../RestAPI/RestClient";
import AppUrl from "../RestAPI/AppUrl";
import { Link } from 'react-router-dom';

class About extends Component {

    constructor(){
        super();
        this.state={
            title:"",
            subtitle:"",
            video_url:"",
            button: "",
            button_url: "",
            description: "",
            bold_description: "",
            loaderClass:"text-center",
            mainDivClass:"d-none",
            show:false,
            loading:true,
            error: false
        }
    }

    componentDidMount(){
        RestClient.GetRequest(AppUrl.AboutTitle).then(result=>{
            this.setState({
                title:result[0]['about_title'],
                subtitle:result[0]['about_subtitle'],
                video_url:result[0]['video_url'],
                button:result[0]['button_text'],
                button_url:result[0]['button_url'],
                description:result[0]['description'],
                bold_description:result[0]['bold_description'],
                loaderClass:"d-none",
                mainDivClass: "text-center"
        })
        });

     
    }

    modalClose=()=>this.setState({show:false})
    modalOpen=()=>this.setState({show:true})

  render() {
    return (
      <div>
            <div class="about-us-section">
                <div
                    class="about-us container mx-auto px-3 px-lg-0 d-flex flex-column flex-md-row justify-content-between align-items-center">

                    <div class="left-content">
                        <div class="w-100 position-relative hero-aboutus-shap" onclick="play1();" id="vidwrap1">

                            <div class="about-shap-content position-absolute">
                                <h1 class="text-white ">{this.state.title}</h1>
                                
                                <Button className="pt-2 border-0 bg-transparent cursor-pointer" onClick={this.modalOpen}>
                                    <img src="assets/images/Play Button.png" alt="button"/>
                                </Button>
                            </div>
                            <Modal size="lg" show={this.state.show} onHide={this.modalClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>

          <Modal.Body>

          <Player src={this.state.video_url}>
              <BigPlayButton position="center" />
          </Player>

            </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.modalClose}>
              Close
            </Button>
            
          </Modal.Footer>
        </Modal>
                        </div>
                    </div>

                    <div class="right-content ">
                        <h2 class="section-title">{this.state.title}</h2>
                        <h1 class="text-gradient">{this.state.subtitle}</h1>
                        <p>{this.state.description}</p>
                        <p class="text-bold"> {this.state.bold_description}</p>
                        <button class="green-btn btn-bg-color-shadow"><Link to={this.state.button_url}>{this.state.button}</Link></button>

                    </div>
                </div>
            </div>
            <img class="position-absolute left-star-image d-none d-lg-block" src="assets/images/blackleft.png"
            alt="bg-image"/>


        </div>
    )
  }
}

export default About