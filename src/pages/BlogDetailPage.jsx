import React, { Component } from 'react'
import { Fragment } from 'react'
import TopNavigation from '../components/TopNavigation'
import OtherTopBanner from '../components/OtherTopBanner'
import Footer from '../components/Footer'
import BlogDetail from '../components/Blogs/BlogDetail'

export class BlogDetailPage extends Component {
  componentDidMount(){
    window.scroll(0,0)
  }
  render() {
    return (
      <Fragment>
        <TopNavigation></TopNavigation>
        <OtherTopBanner pagetitle="Blog Page"></OtherTopBanner>
        <BlogDetail></BlogDetail>
        <Footer></Footer>
      </Fragment>
    )
  }
}

export default BlogDetailPage