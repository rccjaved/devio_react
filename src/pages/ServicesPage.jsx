import React, { Component, Fragment } from 'react'
import TopNavigation from '../components/TopNavigation'
import Services from '../components/Services'
import Footer from '../components/Footer'
import OtherTopBanner from '../components/OtherTopBanner'
import TopBanner from '../components/TopBanner'

export class ServicesPage extends Component {
  componentDidMount(){
    window.scroll(0,0)
  }
  render() {
    return (
      <Fragment>
        <TopNavigation></TopNavigation>
        {/* <TopBanner pagetitle="Our Services"></TopBanner> */}
        <OtherTopBanner pagetitle="Our Services"></OtherTopBanner>
        <Services></Services>
        <Footer></Footer>
      </Fragment>
    )
  }
}

export default ServicesPage