import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import RestClient from "../RestAPI/RestClient";
import AppUrl from "../RestAPI/AppUrl";

export class TopPageSocialIcons extends Component {
    constructor(){
        super();
        this.state={
            facebook:"",
            instagram:"",
            whatsapp:"",
            linkedin:"",
            error: false
        }
    }

    componentDidMount(){
        RestClient.GetRequest(AppUrl.HomeSocialIcon).then(result=>{
            this.setState({
                facebook:result[0]['facebook_url'],
                instagram:result[0]['instagram_url'],
                whatsapp:result[0]['whatsapp_no'],
                linkedin:result[0]['linkedin_url'],
        })
        });

     
    }

  render() {
    return (
      <div>
        {/* <div id="loader" class="lds-dual-ring"></div> */}
        <div class="social-floating-icon position-fixed ">
            <div class="d-flex flex-column align-items-center">
                <a class="mb-3 facebook">
                    <Link to={this.state.facebook} target='_blank'>
                        <img src="assets/images/facebook.svg" alt="facebook"/>
                    </Link>
                </a>
                <a class="mb-3">
                    <Link to={this.state.whatsapp} target='_blank'>
                        <img src="assets/images/whatsapp.svg" alt="whatsapp"/>
                    </Link>
                </a>
                <a class=" mb-3 instagram">
                    <Link to={this.state.instagram} target='_blank'>
                        <img src="assets/images/instagram.svg" alt="instagram"/>
                    </Link>
                </a>
                <a class="mb-3 linkedin">
                    <Link to={this.state.linkedin} target='_blank'>
                        <img src="assets/images/linkedin.svg" alt="linkedin"/>
                    </Link>
                </a>
            </div>
        </div>
      </div>
    )
  }
}

export default TopPageSocialIcons