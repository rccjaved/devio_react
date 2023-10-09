import React, { Component } from 'react'

export class CEO extends Component {
  render() {
    return (
        <div>
            <div class="who-we-are container mx-auto px-3 px-lg-0">
                <div class="we-are-box d-flex flex-column flex-lg-row justify-content-between">
                    <div class="position-relative about-us-image">
                        <img class="w-100 curve-team-bg " src="assets/images/curveteamsection.png" alt="teams-image"/>
                        <img class="position-absolute team-curve-front-img " src="assets/images/man.png" alt="man-image"/>
                    </div>
                    <div class="about-us-content ">
                        <h2 class="section-title">About Us</h2>
                        <h1 class="green-main-heading text-gradient pb-3">WHO WE
                            ARE?</h1>
                        <p class="desc-para">Lorem ipsum dolor sit amet consectetur. Mattis
                            et lectus diam
                            tortor nibh. Non sed mattis platea facilisi augue dolor. Lorem ipsum dolor sit amet consectetur.
                            Mattis et lectus.</p>
                        <p class="desc-para">Lorem ipsum dolor sit amet consectetur. Mattis et
                            lectus diam
                            tortor nibh. Non sed mattis platea facilisi augue dolor. </p>
                        <div class="footer-socials d-flex justify-content-end pt-2 pt-lg-3">
                            <a href="#">
                                <div class="team-social ">
                                    <i class="fa fa-facebook text-white" aria-hidden="true"></i>
                                </div>
                            </a>
                            <a href="#">
                                <div class="team-social">
                                    <i class="fa fa-instagram" aria-hidden="true"></i>
                                </div>
                            </a>
                            <a href="#">
                                <div class="team-social">
                                    <i class="fa fa-linkedin" aria-hidden="true"></i>
                                </div>
                            </a>
                            <a href="#">
                                <div class="team-social">
                                    <i class="fa fa-twitter" aria-hidden="true"></i>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}

export default CEO