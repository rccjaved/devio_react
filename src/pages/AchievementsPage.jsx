import React, { Component } from 'react'
import { Fragment } from 'react'
import TopNavigation from '../components/TopNavigation'
import OtherTopBanner from '../components/OtherTopBanner'
import Achievements from '../components/Achievements'
import Footer from '../components/Footer'

export class AchievementsPage extends Component {
  componentDidMount(){
    window.scroll(0,0)
  }
  render() {
    return (
      <Fragment>
        <TopNavigation></TopNavigation>
        <OtherTopBanner pagetitle="Achievements"></OtherTopBanner>
        <Achievements></Achievements>
        <Footer></Footer>
      </Fragment>
    )
  }
}

export default AchievementsPage