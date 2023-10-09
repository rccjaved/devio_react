import React, { Component } from 'react'
import { Fragment } from 'react'
import TopNavigation from '../components/TopNavigation'
import OtherTopBanner from '../components/OtherTopBanner'
import Blog from '../components/Blogs/Blog'
import Footer from '../components/Footer'

export class BlogPage extends Component {
  componentDidMount(){
    window.scroll(0,0)
  }
  render() {
    return (
      <Fragment>
        <TopNavigation></TopNavigation>
        <OtherTopBanner pagetitle="Blogs"></OtherTopBanner>
        <Blog></Blog>
        <Footer></Footer>
      </Fragment>
    )
  }
}

export default BlogPage