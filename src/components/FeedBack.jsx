import React, { Component } from 'react'

class FeedBack extends Component {
  render() {
    return (
        <div>
            <div class="feedback-main-sec position-relative">
                <div
                    class="container mx-auto px-3 px-lg-0 feedback-sec d-flex flex-column flex-md-row justify-content-between align-items-center">
                    <div class="left-content">
                        <h2 class="section-title text-start">Feedback</h2>
                        <h1 class="text-gradient section-heading text-start text-uppercase">
                            Trusted by Thousands of Happy Customer
                        </h1>
                        <p class="desc-para py-2">As always
                            Jonas doesn't disappoint. He listens to your needs and
                            delivers the perfect product on point and ALWAYS on time. I can only recommend him and his
                            entire team. Looking forward to our next project.
                        </p>
                        <p class="text-gradient client-name ">John Dex | Design Agency</p>
                    </div>
                    <div class="right-content">
                        <div class="center-image-sec ">
                            <img class="centered-image position-absolute" src="./assets/images/circlemidimage.png"
                                alt="circle-mid-image" id="expandedImg"/>
                        </div>
                        <div
                            class="roundeded-circle circular_blue position-relative rounded-full border-2 h-[275px] md:h-[300px] xl:h-[540px] w-[275px] md:w-[300px] xl:w-[540px] border-[#28B560] d-flex align-items-center justify-center">
                            <img class="position-absolute" src="assets/images/usser1feedback.png" alt="user1"
                                onclick="myFunction(this);"/>
                            <img class="position-absolute" src="assets/images/user2feedback.png" alt="user2"
                                onclick="myFunction(this);"/>
                            <img class="position-absolute" src="assets/images/user3feedback.png" alt="user3"
                                onclick="myFunction(this);"/>
                            <img class="position-absolute" src="assets/images/user4feedback.png" alt="user4"
                                onclick="myFunction(this);"/>
                            <img class="position-absolute" src="assets/images/user5feedback.png" alt="user5"
                                onclick="myFunction(this);"/>
                        </div>
                        <img class="position-absolute round-slider-bg-curve" src="./assets/images/feedbackbg.png"
                            alt="feedback-image"/>
                    </div>
                </div>
            </div>
      </div>
    )
  }
}

export default FeedBack