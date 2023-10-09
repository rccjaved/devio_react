import React, { Component, Fragment } from 'react'
import TopNavigation from '../components/TopNavigation'
import OtherTopBanner from '../components/OtherTopBanner'
import HomeContact from '../components/HomeContact'
import Footer from '../components/Footer'

export class ContactPage extends Component {
  componentDidMount(){
    window.scroll(0,0)
  }
  render() {
    return (
      <Fragment>
        <TopNavigation></TopNavigation>
        <OtherTopBanner pagetitle="Contact"></OtherTopBanner>
        <HomeContact></HomeContact>
        <Footer></Footer>
      </Fragment>
    )
  }
}

export default ContactPage