import React, { Component } from 'react'
import 'video-react/dist/video-react.css'
import RestClient from "../RestAPI/RestClient";
import AppUrl from "../RestAPI/AppUrl";
import { Link } from 'react-router-dom';


class TopBanner extends Component {

    constructor(){
        super();
        this.state={
            title:"",
            subtitle:"",
            video_url:"",
            button: "",
            button_url: "",
            loaderClass:"text-center",
            mainDivClass:"d-none",
            show:false,
            loading:true,
            error: false
        }
    }

    componentDidMount(){
        RestClient.GetRequest(AppUrl.HomeTopTitle).then(result=>{
            this.setState({
                title:result[0]['home_title'],
                subtitle:result[0]['home_subtitle'],
                video_url:result[0]['video_url'],
                button:result[0]['button_text'],
                button_url:result[0]['button_url'],
                loaderClass:"d-none",
                mainDivClass: "text-center"
        })
        });

     
    }

  render() {
    const hero = {
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "top"
    };

    const video = {
        objectFit: "cover",
    };

    const mystyle = {
        backgroundImage: "url('assets/images/curve-bgcolor.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
    };
    return (
      <div>
            <div class="hero-bg-image position-relative overflow-hidden d-flex flex-column justify-content-center align-items-center"
                style={hero}>
                <video style={video} class="h-100 w-100 position-absolute" autoPlay loop muted
                    src={this.state.video_url} type="video/mp4"></video>
                <div
                    class="hero-heading px-3 px-lg-0 mb-0 pt-lg-0 container mx-auto  d-flex flex-column justify-content-center align-items-center">
                    <h1 class="heroHeading text-center">{this.state.title}</h1>
                    <p>{this.state.subtitle}</p>
                    <button class="hero-btn btn-rounded-shadow"><Link to={this.state.button_url}> {this.state.button}</Link></button>
                </div>
            </div>

            <div class="curve-image-hero position-relative overflow-hidden"
                style={mystyle}>
            </div>
      </div>
    )
  }
}

export default TopBanner