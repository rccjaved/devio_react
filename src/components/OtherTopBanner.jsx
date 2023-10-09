import React, { Component } from 'react'

export class OtherTopBanner extends Component {
  render() {
    const servicestyle = {
        backgroundImage: "url('assets/images/ourservices-hero-bg.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        marginBottom: "50px",
    };
    return (
        <div>
            <div class="position-relative services-hero-bg d-flex flex-column justify-content-center align-items-center"
                style={servicestyle}>
                <h1 class="text-center">
                    {this.props.pagetitle}
                </h1>
                <div class="position-absolute services-herobtn  d-flex align-items-center justify-content-center ">
                    <a href="/">
                        <button class="border-0 bg-transparent ">Home</button>
                    </a>
                    <i class="fa fa-angle-right  cursor-pointer greaterthan-icon px-2" aria-hidden="true"></i>
                    <span class="text-gradient">
                    {this.props.pagetitle}
                    </span>
                </div>
            </div>
        </div>
    )
  }
}

export default OtherTopBanner