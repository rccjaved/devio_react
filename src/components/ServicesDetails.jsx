import React, { Component } from 'react'
import RestClient from "../RestAPI/RestClient";
import AppUrl from "../RestAPI/AppUrl";
import { Link } from 'react-router-dom';
import HtmlReactParser from 'html-react-parser';

export class ServicesDetails extends Component {
    constructor(props){
        super();
        this.state={
             MyServiceId:props.id,
             servicename:"...",
             service_heading_one:"...",
             service_heading_two:"...",
             image_one: "...",
             image_two: "...",
             para_one:"...", 
             para_two:"..."
        }
   }


   componentDidMount(){          
        RestClient.GetRequest(AppUrl.ServiceDetails+this.state.MyServiceId).then(result=>{
            this.setState({
            servicename:result[0]['service_name'],
            service_heading_one:result[0]['service_page_heading_one'],
            service_heading_two:result[0]['service_page_heading_two'],
            image_one:result[0]['service_page_image_one'],
            image_two:result[0]['service_page_image_two'],
            para_one:result[0]['service_page_para_one'],
            para_two:result[0]['service_page_para_two'],
                 
             });
       }) 
  }
  render() {
    return (
        <div>

            <div class="services-us container mx-auto px-3 px-lg-0 ">
                <div class="sliders d-flex flex-column flex-lg-row align-items-center w-100 pt-0">
                    <div class="firstTwo-slids w-100 slider-img-boxshadow ">
                        <div class="swiper mySwiper">
                            <div class="swiper-wrapper w-full ourservices-box bg-transparent">
                                <div class="swiper-slide d-flex flex-column flex-md-row justify-content-between ">
                                    <a class="singleService bg-white cursor-pointer d-flex justify-content-between align-items-center "
                                        href="./pages/web-design.html">
                                        <div class="d-flex justify-content-between align-items-center w-100">
                                            <div class=" icon-circle">
                                                <i class="fa fa-file-code-o" aria-hidden="true"></i>
                                            </div>
                                            <h3 class="single-service-name mb-0">
                                                Web Design
                                            </h3>
                                            <i class="fa fa-arrow-circle-o-right right-circle" aria-hidden="true"></i>
                                        </div>
                                    </a>
                                    <a class="singleService bg-white cursor-pointer d-flex justify-content-between align-items-center "
                                        href="./pages/web-design.html">
                                        <div class="d-flex justify-content-between align-items-center w-100">
                                            <div class=" icon-circle">
                                                <i class="fa fa-file-code-o" aria-hidden="true"></i>
                                            </div>
                                            <h3 class="single-service-name mb-0">
                                                Web Design
                                            </h3>
                                            <i class="fa fa-arrow-circle-o-right right-circle" aria-hidden="true"></i>
                                        </div>
                                    </a>
                                    <a class="singleService bg-white cursor-pointer d-flex justify-content-between align-items-center "
                                        href="./pages/web-design.html">
                                        <div class="d-flex justify-content-between align-items-center w-100">
                                            <div class=" icon-circle">
                                                <i class="fa fa-file-code-o" aria-hidden="true"></i>
                                            </div>
                                            <h3 class="single-service-name mb-0">
                                                Web Design
                                            </h3>
                                            <i class="fa fa-arrow-circle-o-right right-circle" aria-hidden="true"></i>
                                        </div>
                                    </a>
                                </div>
                                <div class="swiper-slide d-flex flex-column flex-md-row justify-content-between">
                                    <a class="singleService bg-white cursor-pointer d-flex justify-content-between align-items-center "
                                        href="./pages/web-design.html">
                                        <div class="d-flex justify-content-between align-items-center w-100">
                                            <div class=" icon-circle">
                                                <i class="fa fa-file-code-o" aria-hidden="true"></i>
                                            </div>
                                            <h3 class="single-service-name mb-0">
                                                Web Design
                                            </h3>
                                            <i class="fa fa-arrow-circle-o-right right-circle" aria-hidden="true"></i>
                                        </div>
                                    </a>
                                    <a class="singleService bg-white cursor-pointer d-flex justify-content-between align-items-center "
                                        href="./pages/web-design.html">
                                        <div class="d-flex justify-content-between align-items-center w-100">
                                            <div class=" icon-circle">
                                                <i class="fa fa-file-code-o" aria-hidden="true"></i>
                                            </div>
                                            <h3 class="single-service-name mb-0">
                                                Web Design
                                            </h3>
                                            <i class="fa fa-arrow-circle-o-right right-circle" aria-hidden="true"></i>
                                        </div>
                                    </a>
                                    <a class="singleService bg-white cursor-pointer d-flex justify-content-between align-items-center "
                                        href="./pages/web-design.html">
                                        <div class="d-flex justify-content-between align-items-center w-100">
                                            <div class=" icon-circle">
                                                <i class="fa fa-file-code-o" aria-hidden="true"></i>
                                            </div>
                                            <h3 class="single-service-name mb-0">
                                                Web Design
                                            </h3>
                                            <i class="fa fa-arrow-circle-o-right right-circle" aria-hidden="true"></i>
                                        </div>
                                    </a>
                                </div>
                                <div class="swiper-slide d-flex flex-column flex-md-row justify-content-between">
                                    <a class="singleService bg-white cursor-pointer d-flex justify-content-between align-items-center "
                                        href="./pages/web-design.html">
                                        <div class="d-flex justify-content-between align-items-center w-100">
                                            <div class=" icon-circle">
                                                <i class="fa fa-file-code-o" aria-hidden="true"></i>
                                            </div>
                                            <h3 class="single-service-name mb-0">
                                                Web Design
                                            </h3>
                                            <i class="fa fa-arrow-circle-o-right right-circle" aria-hidden="true"></i>
                                        </div>
                                    </a>
                                    <a class="singleService bg-white cursor-pointer d-flex justify-content-between align-items-center "
                                        href="./pages/web-design.html">
                                        <div class="d-flex justify-content-between align-items-center w-100">
                                            <div class=" icon-circle">
                                                <i class="fa fa-file-code-o" aria-hidden="true"></i>
                                            </div>
                                            <h3 class="single-service-name mb-0">
                                                Web Design
                                            </h3>
                                            <i class="fa fa-arrow-circle-o-right right-circle" aria-hidden="true"></i>
                                        </div>
                                    </a>
                                    <a class="singleService bg-white cursor-pointer d-flex justify-content-between align-items-center "
                                        href="./pages/web-design.html">
                                        <div class="d-flex justify-content-between align-items-center w-100">
                                            <div class=" icon-circle">
                                                <i class="fa fa-file-code-o" aria-hidden="true"></i>
                                            </div>
                                            <h3 class="single-service-name mb-0">
                                                Web Design
                                            </h3>
                                            <i class="fa fa-arrow-circle-o-right right-circle" aria-hidden="true"></i>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div class="pt-2">
                                <div class="swiper-pagination "></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                class="container services-second-sec mx-auto px-3 px-lg-0 d-flex flex-column flex-md-row align-items-center justify-content-between">
                <div class="left-content">
                    <div class="m-auto services-style-image">
                        <img class="w-100 h-100" src={this.state.image_one} alt="services-image"/>
                    </div>
                </div>
                <img class="position-absolute services-black-left d-none d-lg-inline-block "
                    src="assets/images/blackleft.png" alt="bg-tech-image"/>
                <div class="right-content pt-5 pt-md-0">

                    <h2 class="section-title">Our Services</h2>
                    <h1 class="green-main-heading text-gradient pb-3">
                        {this.state.service_heading_one}</h1>
                    <p class="desc-para"> { HtmlReactParser(this.state.para_one) }</p>
                </div>
            </div>

            <div
                class="container mx-auto services-third-sec px-3 px-lg-0  pb-4 d-flex flex-column-reverse flex-md-row align-items-center justify-content-between">
                <div class="right-content ">
                    <h2 class="section-title">Our Services</h2>
                    <h1 class="green-main-heading text-gradient pb-3">
                    {this.state.service_heading_two}</h1>
                    <p class="desc-para">Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Sed vel
                        diam luctus, molestie metus sed, faucibus leo. In euismod nunc elit, eu sodales</p>
                    <p class="desc-para"> { HtmlReactParser(this.state.para_two) }</p>

                </div>
                <div class="left-content ">
                    <div class="relative m-auto service-style-image">
                        <img class="w-100 h-100" src={this.state.image_two} alt="seervices image"/>
                    </div>
                </div>
            </div>
            
        </div>
    )
  }
}

export default ServicesDetails