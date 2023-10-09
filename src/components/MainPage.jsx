import React, { Component } from 'react'
import TopBanner from './TopBanner'
import About from './About'
import Services from './Services'
import Portfolio from './Portfolio'
import Achievements from './Achievements'
import Summary from './Summary'
import FeedBack from './FeedBack'
import HomeContact from './HomeContact'
import Footer from './Footer'
import TopPageSocialIcons from './TopPageSocialIcons'
import TopNavigation from './TopNavigation'


class MainPage extends Component {
  render() {
    return (
        <div>
            {/* Top Icons Section */}
            <TopPageSocialIcons></TopPageSocialIcons>

            {/* Top Navigation Section */}
            <TopNavigation></TopNavigation>
            <div class="overflow-visible">
                <div class="overflow-hidden  ">
                    {/* Top Banner Section */}
                    <TopBanner></TopBanner>

                    {/* About Us Section */}
                    <About></About>

                    {/* Services Section */}

                    <Services></Services>

                    {/* Portfolio Section */}

                    <Portfolio></Portfolio>

                    {/* Achievments Section */}

                    <Achievements></Achievements>

                    {/* Summary Section */}

                    <Summary></Summary>

                    {/* Feedback Section */}

                    <FeedBack></FeedBack>

                    {/* Contact Us Section */}
                    <HomeContact></HomeContact>

                    {/* Footer Section */}

                    <Footer></Footer>
                </div>
            </div>
        </div>
    )
  }
}

export default MainPage