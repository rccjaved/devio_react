import React, { Component } from 'react'
import { Fragment } from 'react'
import TopNavigation from '../components/TopNavigation'
import TopBanner from '../components/TopBanner'
import About from '../components/About'
import Footer from '../components/Footer'
import TopPageSocialIcons from '../components/TopPageSocialIcons'

export class AboutPage extends Component {
  componentDidMount(){
    window.scroll(0,0)
  }
  
  render() {
    const servicestyle = {
      backgroundImage: "url('assets/images/ourservices-hero-bg.png')",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      marginBottom: "150px"
    };
   
    return (
      <Fragment>
        <TopPageSocialIcons></TopPageSocialIcons>
        <TopNavigation ></TopNavigation>
        <TopBanner></TopBanner>
        <About></About>
        <Footer></Footer>

      </Fragment>
    )
  }
}

export default AboutPage