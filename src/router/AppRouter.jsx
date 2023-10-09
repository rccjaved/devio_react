import React, { Component } from 'react'
import { Fragment } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'
import ServicesPage from '../pages/ServicesPage';
import ProjectsPage from '../pages/ProjectsPage';
import AchievementsPage from '../pages/AchievementsPage';
import TeamPage from '../pages/TeamPage';
import BlogPage from '../pages/BlogPage';
import BlogDetailPage from '../pages/BlogDetailPage';
import ContactPage from '../pages/ContactPage';
import ServiceDetailsPage from '../pages/ServiceDetailsPage';

export class AppRouter extends Component {
  render() {
    return (
      <Fragment>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path="/about" element={<AboutPage/>} />
            <Route path="/services" element={<ServicesPage/>} />
            <Route path="/service/:serviceID/:serviceUrl" element={<ServiceDetailsPage/>} />
            <Route path="/portfolio" element={<ProjectsPage/>} />
            <Route path="/achievements" element={<AchievementsPage/>} />
            <Route path="/teams" element={<TeamPage/>} />
            <Route path="/blogs" element={<BlogPage/>} />
            <Route path="/blogDetails" element={<BlogDetailPage/>} />
            <Route path="/contact" element={<ContactPage/>} />
        </Routes>
      </Fragment>
    )
  }
}

export default AppRouter