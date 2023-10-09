import React, { Component } from 'react'


class Footer extends Component {
  render() {
    const mystyle = {
        backgroundImage: "url('assets/images/dt-footer-bg\ \(1\).png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
    };
    return (
        <div>
            <div class="footer-bg w-100"
                style={mystyle}>
                <div
                    class="footer-content container mx-auto px-3 px-lg-0 d-flex flex-column flex-md-row justify-content-between">
                    <div class="footer-logo">
                        <img class="w-[200px] " src="assets/images/footer-logo.png" alt="footer-logo"/>
                        <p class="footer-para pt-3">Lorem Ipsum is simply dummy text of
                            the printing and typesetting industry.
                        </p>
                    </div>
                    <div class="footer-Contact-us">
                        <h2>Contact us</h2>
                        <ul class="pt-2 ps-0">
                            <a href="#">
                                <li class=" mt-3 d-flex align-items-center">
                                    <i class="fa fa-map-marker me-3" aria-hidden="true"></i>
                                    DevioTech DHA phase 1 c sector
                                </li>
                            </a>
                            <a href="#">
                                <li class="text-[15px] font-[300] text-[#FFFFFF] mt-3 flex items-center">
                                    <i class="fa fa-envelope me-3" aria-hidden="true"></i>
                                    deviotech@gmail.com
                                </li>
                            </a>
                            <a href="#">
                                <li class="text-[15px] font-[300] text-[#FFFFFF] mt-3 flex items-center">
                                    <i class="fa fa-phone-square me-3" aria-hidden="true"></i>
                                    +9000 0000 000
                                </li>
                            </a>
                        </ul>
                    </div>
                    <div
                        class="footer-socials d-flex flex-row flex-md-column flex-lg-row justify-content-between align-items-end ">
                        <a href="#">
                            <div class="d-flex footer-social-icon justify-content-center align-items-center ">
                                <i class="fa fa-facebook"></i>
                            </div>
                        </a>
                        <a href="#">
                            <div class="d-flex footer-social-icon justify-content-center align-items-center ">
                                <i class="fa fa-instagram " aria-hidden="true"></i>
                            </div>
                        </a>
                        <a href="#">
                            <div class="d-flex footer-social-icon justify-content-center align-items-center ">
                                <i class="fa fa-twitter" aria-hidden="true"></i>
                            </div>
                        </a>
                        <a href="#">
                            <div class="d-flex footer-social-icon justify-content-center align-items-center ">
                                <i class="fa fa-linkedin" aria-hidden="true"></i>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="copyright ">
                    <p>Copyright ® 2023 Company
                        All
                        rights Rcerved
                    </p>
                </div>
            </div>
        </div>
    )
  }
}

export default Footer