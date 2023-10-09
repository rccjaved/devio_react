import React, { Component } from 'react'
import { Fragment } from 'react'
import TopNavigation from '../components/TopNavigation'
import MainPage from '../components/MainPage'

export class HomePage extends Component {

  componentDidMount(){
    window.scroll(0,0)
  }

  render() {
    return (
      <Fragment>
        <TopNavigation title="RC Learning"></TopNavigation>
        <MainPage></MainPage>
      </Fragment>
    )
  }
}

export default HomePage