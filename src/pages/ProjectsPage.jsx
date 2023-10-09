import React, { Component } from 'react'
import { Fragment } from 'react'
import TopNavigation from '../components/TopNavigation'
import OtherTopBanner from '../components/OtherTopBanner'
import Portfolio from '../components/Portfolio'
import Footer from '../components/Footer'

export class ProjectsPage extends Component {
  componentDidMount(){
    window.scroll(0,0)
  }
  render() {
    return (
      <Fragment>
        <TopNavigation></TopNavigation>
        <OtherTopBanner pagetitle="Portfolio"></OtherTopBanner>
        <Portfolio></Portfolio>
        <Footer></Footer>
      </Fragment>
    )
  }
}

export default ProjectsPage