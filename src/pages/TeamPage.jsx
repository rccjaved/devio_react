import React, { Component } from 'react'
import { Fragment } from 'react'
import TopNavigation from '../components/TopNavigation'
import OtherTopBanner from '../components/OtherTopBanner'
import CEO from '../components/Team/CEO'
import Directors from '../components/Team/Directors'
import Footer from '../components/Footer'
import FeedBack from '../components/FeedBack'

export class TeamPage extends Component {
  componentDidMount(){
    window.scroll(0,0)
  }
  render() {
    return (
      <Fragment>
        <TopNavigation></TopNavigation>
        <OtherTopBanner pagetitle="Our Team"></OtherTopBanner>
        <CEO></CEO>
        <Directors></Directors>
        <FeedBack></FeedBack>
        <Footer></Footer>
      </Fragment>
    )
  }
}

export default TeamPage