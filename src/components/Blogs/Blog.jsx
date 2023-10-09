import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Blog extends Component {
  render() {
    return (
        <div>
            <div class="blogs-main container mx-auto px-3 px-lg-0 ">
                <div
                    class="input-group d-block d-lg-none position-relative d-flex flex-wrap align-items-stretch mx-auto  mb-4 single-blog-content ">
                    <input type="search" class="form-control input-search-blog  position-relative " placeholder="Search Here"
                        aria-label="Search" aria-describedby="button-addon2"/>
                    <button class="position-absolute d-flex align-items-center" type="button" id="button-addon2">
                        Continue
                    </button>
                </div>

                <div class="blogs pb-5 d-flex flex-column flex-lg-row justify-content-between">
                    <div class="left-content">
                        <div class="singleBlog">
                            <img class="w-100" src="assets/images/blogs-hero-codeimage.png" alt="blog-images"/>

                            <div class="single-blog-content">
                                <p class="text-gradient mb-0">Sep 5. 2022 / James K.</p>
                                <h1>Maecenas
                                    ac nibh Maecenas ac nibh
                                    2022</h1>
                                <div class="d-flex justify-content-end">
                                    <a class="d-flex align-items-center text-gradient ">
                                        <Link to='/blogDetails'>
                                        Read More
                                        <i class="fa fa-arrow-circle-o-right right-circle ms-2" aria-hidden="true"></i>
                                        </Link>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="singleBlog ">
                            <img class="w-100 " src="assets/images/secondblogimage.png" alt="blog-images"/>

                            <div class="single-blog-content ">
                                <p class="text-gradient mb-0">Sep 5. 2022 / James K.</p>
                                <h1>Maecenas
                                    ac nibh Maecenas ac nibh
                                    2022</h1>
                                <div class="d-flex justify-content-end">
                                    <a href="#">
                                        <button class="d-flex align-items-center text-gradient">Read
                                            More <i class="fa fa-arrow-circle-o-right right-circle ms-2" aria-hidden="true"></i>
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="singleBlog ">
                            <img class="w-100 " src="assets/images/3blogimage.png" alt="blog-images"/>

                            <div class="single-blog-content ">
                                <p class="text-gradient mb-0">Sep 5. 2022 / James K.</p>
                                <h1>Maecenas
                                    ac nibh Maecenas ac nibh
                                    2022</h1>
                                <div class="d-flex justify-content-end">
                                    <a href="#">
                                        <button class="flex items-center text-gradient">Read
                                            More <i class="fa fa-arrow-circle-o-right right-circle ms-2"
                                                aria-hidden="true"></i></button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="singleBlog ">
                            <img class="w-100 " src="assets/images/4thblogimage.png" alt="blog-images"/>

                            <div class="single-blog-content ">
                                <p class="text-gradient mb-0">Sep 5. 2022 / James K.</p>
                                <h1>Maecenas
                                    ac nibh Maecenas ac nibh
                                    2022</h1>
                                <div class="d-flex justify-content-end">
                                    <a href="#">
                                        <button class="flex items-center text-gradient">Read
                                            More <i class="fa fa-arrow-circle-o-right right-circle ms-2"
                                                aria-hidden="true"></i></button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="singleBlog ">
                            <img class="w-100 " src="assets/images/5blogimage.png" alt="blog-images"/>

                            <div class="single-blog-content ">
                                <p class="text-gradient text-[16px] font-[500]">Sep 5. 2022 / James K.</p>
                                <h1>Maecenas
                                    ac nibh Maecenas ac nibh
                                    2022</h1>
                                <div class="d-flex justify-content-end">
                                    <a href="#">
                                        <button class="d-flex align-items-center text-gradient">Read
                                            More <i class="fa fa-arrow-circle-o-right right-circle ms-2"
                                                aria-hidden="true"></i></button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <nav class="d-flex justify-content-center justify-content-xl-end blog-pagination ">
                            <ul class="d-flex">
                                <li>
                                    <a class="mx-2 d-flex align-items-center justify-content-center" href="#">
                                        1
                                    </a>
                                </li>
                                <li>
                                    <a class="mx-2 d-flex align-items-center justify-content-center" href="#">
                                        2
                                    </a>
                                </li>

                                <li>
                                    <a class="mx-2 d-flex align-items-center justify-content-center" href="#" aria-label="Next">
                                        <i class="fa fa-angle-double-right pagination-next" aria-hidden="true"></i>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>


                    <div class="right-content ">
                        <div
                            class="input-group d-none d-lg-block desktop-blog-search position-relative d-flex flex-wrap align-items-stretch mx-auto  mb-4 single-blog-content ">
                            <input type="search" class="form-control search-bar position-relative flex-auto"
                                placeholder="Search tag name or blog title" aria-label="Search"
                                aria-describedby="button-addon2"/>
                            <button class="position-absolute d-flex align-items-center" type="button" id="button-addon2">
                                Continue
                            </button>
                        </div>
                        <div class="recent-post single-blog-content ">
                            <h1 class="text-gradient ">
                                Recent Posts</h1>

                            <div class="blog-heading pt-2">
                                <a href="#">
                                    <p>
                                        Maecenas ac nibh Maecenas ac nibh 2022</p>
                                </a>
                            </div>

                            <div class="blog-heading pt-2">
                                <a href="#">
                                    <p>
                                        Maecenas ac nibh Maecenas ac nibh 2022</p>
                                </a>
                            </div>

                            <div class="blog-heading pt-2">
                                <a href="#">
                                    <p>
                                        Maecenas ac nibh Maecenas ac nibh 2022</p>
                                </a>
                            </div>

                            <div class="blog-heading pt-2">
                                <a href="#">
                                    <p>
                                        Maecenas ac nibh Maecenas ac nibh 2022</p>
                                </a>
                            </div>
                        </div>

                        <div class="recent-post single-blog-content">
                            <h1 class="text-gradient">
                                Recent Comments</h1>
                            <div class="blog-heading pt-2">
                                <a href="#">
                                    <p>
                                        Maecenas ac nibh Maecenas ac nibh 2022</p>
                                </a>
                            </div>

                            <div class="blog-heading pt-2">
                                <a href="#">
                                    <p>
                                        Maecenas ac nibh Maecenas ac nibh 2022</p>
                                </a>
                            </div>

                            <div class="blog-heading pt-2">
                                <a href="#">
                                    <p>
                                        Maecenas ac nibh Maecenas ac nibh 2022</p>
                                </a>
                            </div>

                            <div class="blog-heading pt-2">
                                <a href="#">
                                    <p>
                                        Maecenas ac nibh Maecenas ac nibh 2022</p>
                                </a>
                            </div>

                            <div class="blog-heading pt-2">
                                <a href="#">
                                    <p>
                                        Maecenas ac nibh Maecenas ac nibh 2022</p>
                                </a>
                            </div>

                            <div class="blog-heading pt-2">
                                <a href="#">
                                    <p>
                                        Maecenas ac nibh Maecenas ac nibh 2022</p>
                                </a>
                            </div>

                            <div class="blog-heading pt-2">
                                <a href="#">
                                    <p>
                                        Maecenas ac nibh Maecenas ac nibh 2022</p>
                                </a>
                            </div>

                        </div>

                        <div class="recent-post single-blog-content">
                            <h1 class="text-gradient">
                                Archives</h1>

                            <div class="blog-heading pt-2">
                                <a href="#">
                                    <p>
                                        Maecenas ac nibh Maecenas ac nibh 2022</p>
                                </a>
                            </div>

                            <div class="blog-heading pt-2">
                                <a href="#">
                                    <p>
                                        Maecenas ac nibh Maecenas ac nibh 2022</p>
                                </a>
                            </div>

                            <div class="blog-heading pt-2">
                                <a href="#">
                                    <p>
                                        Maecenas ac nibh Maecenas ac nibh 2022</p>
                                </a>
                            </div>

                            <div class="blog-heading pt-2">
                                <a href="#">
                                    <p>
                                        Maecenas ac nibh Maecenas ac nibh 2022</p>
                                </a>
                            </div>

                            <div class="blog-heading pt-2">
                                <a href="#">
                                    <p>
                                        Maecenas ac nibh Maecenas ac nibh 2022</p>
                                </a>
                            </div>

                            <div class="blog-heading pt-2">
                                <a href="#">
                                    <p>
                                        Maecenas ac nibh Maecenas ac nibh 2022</p>
                                </a>
                            </div>

                            <div class="blog-heading pt-2">
                                <a href="#">
                                    <p>
                                        Maecenas ac nibh Maecenas ac nibh 2022</p>
                                </a>
                            </div>

                        </div>


                        <div class="recent-post single-blog-content">
                            <h1 class="text-gradient">
                                Categories</h1>

                            <div class="blog-heading pt-2">
                                <a href="#">
                                    <p>
                                        Maecenas ac nibh Maecenas ac nibh 2022</p>
                                </a>
                            </div>

                            <div class="blog-heading pt-2">
                                <a href="#">
                                    <p>
                                        Maecenas ac nibh Maecenas ac nibh 2022</p>
                                </a>
                            </div>

                            <div class="blog-heading pt-2">
                                <a href="#">
                                    <p>
                                        Maecenas ac nibh Maecenas ac nibh 2022</p>
                                </a>
                            </div>

                            <div class="blog-heading pt-2">
                                <a href="#">
                                    <p>
                                        Maecenas ac nibh Maecenas ac nibh 2022</p>
                                </a>
                            </div>

                        </div>

                        <div class="recent-post single-blog-content ">
                            <h1 class="text-gradient ">
                                Meta
                            </h1>

                            <div class="blog-heading pt-2">
                                <a href="#">
                                    <p>
                                        Maecenas ac nibh Maecenas ac nibh 2022</p>
                                </a>
                            </div>

                            <div class="blog-heading pt-2">
                                <a href="#">
                                    <p>
                                        Maecenas ac nibh Maecenas ac nibh 2022</p>
                                </a>
                            </div>

                            <div class="blog-heading pt-2">
                                <a href="#">
                                    <p>
                                        Maecenas ac nibh Maecenas ac nibh 2022</p>
                                </a>
                            </div>

                            <div class="blog-heading pt-2">
                                <a href="#">
                                    <p>
                                        Maecenas ac nibh Maecenas ac nibh 2022</p>
                                </a>
                            </div>

                        </div>
                        <div class="tags-post recent-post single-blog-content">
                            <h1 class="text-gradient">
                                Tags
                            </h1>

                            <div class="d-flex flex-wrap pb-2 pt-3 tags">
                                <p>
                                    <a href="#">
                                        Tech
                                    </a>
                                </p>
                                <p>
                                    <a href="#">
                                        Tech
                                    </a>
                                </p>
                                <p>
                                    <a href="#">
                                        Tech
                                    </a>
                                </p>
                                <p>
                                    <a href="#">
                                        Tech
                                    </a>
                                </p>
                                <p>
                                    <a href="#">
                                        Tech
                                    </a>
                                </p>
                                <p>
                                    <a href="#">
                                        Tech
                                    </a>
                                </p>
                                <p>
                                    <a href="#">
                                        Tech
                                    </a>
                                </p>
                                <p>
                                    <a href="#">
                                        Tech
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
  }
}

export default Blog