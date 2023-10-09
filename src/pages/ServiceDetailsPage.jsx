import React, { Component } from 'react'
import { Fragment } from 'react'
import TopNavigation from '../components/TopNavigation'
import OtherTopBanner from '../components/OtherTopBanner'
import Footer from '../components/Footer'
import ServicesDetails from '../components/ServicesDetails'


export class ServiceDetailsPage extends Component {
  constructor({match}){
    super();
    this.state={
      ServicePassedID:match.params.serviceID,
      ServicePassedName:match.params.serviceName
    }
  }

  componentDidMount(){
    window.scroll(0,0)
  }
  render() {
    return (
      <Fragment>
        <TopNavigation></TopNavigation>
        <OtherTopBanner pagetitle={this.state.ServicePassedName}></OtherTopBanner>
        <ServicesDetails id={this.state.ServicePassedID}></ServicesDetails>
        <Footer></Footer>
      </Fragment>
    )
  }
}

export default ServiceDetailsPage