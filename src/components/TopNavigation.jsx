import React, { Component } from 'react'
import { Link } from 'react-router-dom';



class TopNavigation extends Component {

    
  render() {
    return (
      <div>
        
        <div class="position-absolute mobile-header">
            <header class="d-block d-lg-none position-fixed mobilenavbar-mian">
                <div class=" d-flex justify-content-between align-items-center w-100 py-4 px-3 ">
                    <div class="mobile-header-logo ">
                        <Link to="/">
                            <img class="w-100" src="assets/images/deviotechlogo.png" alt="header-logo"/>
                        </Link>
                    </div>
                    <div class=" nav-container open">
                        <input class="checkbox" onclick="myFunctionmenu()" type="checkbox" name="" id="" />
                        <div class="hamburger-lines">
                            <span class="line line1"></span>
                            <span class="line line2"></span>
                            <span class="line line3"></span>
                        </div>
                    </div>
                </div>
            </header>
        </div>
        <div id="myDIV" class="custom-nav-sec d-block d-lg-none  menuOpenSec position-fixed contactInfo w-100 ">
            <div class="slide-nav d-flex justify-content-center menu-container pt-5 pb-5 text-white">
                <ul class="d-flex flex-column justify-content-center  align-items-center w-100 flex-wrap">
                    <a>
                        <Link to="/">
                            <li class="cursor-pointer hover-underline-animation mt-4">Home</li>
                        </Link>
                    </a>
                    <a>
                        <Link to="/about">
                            <li class="cursor-pointer hover-underline-animation mt-4">About</li>
                        </Link>
                    </a>
                    <a>
                        <Link class="cursor-pointer hover-underline-animation mt-4" to="/services">Services</Link>
                    </a>
                    <a>
                        <Link to="/teams">
                            <li class="cursor-pointer hover-underline-animation mt-4">
                                Team</li>
                        </Link>
                    </a>
                    <a>
                        <Link to="/blogs">
                            <li class="cursor-pointer hover-underline-animation mt-4">
                                Blog</li>
                        </Link>
                    </a>
                </ul>
            </div>
        </div>

        <header class="disktop-header scrolled  w-100">
            <div class="d-none d-lg-block">
                <nav className="container mx-auto d-flex justify-content-between" >
                    <div class="header-logo h-100">
                        <Link to="/">
                            <img class="w-100 h-100" src="assets/images/deviotechlogo.png" alt="header-logo"/>
                        </Link>
                    </div>
                    <ul class="d-flex align-items-center disktop-header-links m-0">
                        
                        <a>
                            <Link to="/">
                                <li class="active-link">Home</li>
                            </Link>
                        </a>

                        <a>
                            <Link to="/about">
                                <li class="hover-underline-animation">About</li>
                            </Link>
                        </a>
                        
                        <div class="dropdown">
                            <a ><li class="hover-underline-animation">Features</li></a>
                            <div class="dropdown-content">
                                <a><Link to="/services">Services</Link></a>
                                <a><Link to="/portfolio">Projects</Link></a>
                                <a><Link to="/achievements">Achievements</Link></a>
                            </div>
                        </div>

                        <a>
                            <Link to="/teams">
                                <li class="hover-underline-animation">
                                    Team</li>
                            </Link>
                        </a>
                        <a>
                            <Link to="/blogs">
                                <li class="hover-underline-animation">
                                    Blog</li>
                            </Link>
                        </a>
                        <li class="me-0">
                            <button class="header-qoute-btn hover-btn-color  btn-rounded-shadow">
                                <Link to="/contact">
                                    Get a Qoute
                                </Link>
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
        
      </div>
    )
  }
}

export default TopNavigation