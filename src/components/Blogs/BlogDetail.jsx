import React, { Component } from 'react'

export class BlogDetail extends Component {
  render() {
    return (
        <div>
            <div class="blogs-main container mx-auto px-3 px-lg-0">
                <div
                    class="input-group d-block d-lg-none position-relative d-flex flex-wrap align-items-stretch mx-auto  mb-4 single-blog-content ">
                    <input type="search" class="form-control input-search-blog  position-relative " placeholder="Search Here"
                        aria-label="Search" aria-describedby="button-addon2"/>
                    <button class="position-absolute d-flex align-items-center" type="button" id="button-addon2">
                        Continue
                    </button>
                </div>
                <div class="blogs blogs-details d-flex flex-column flex-lg-row justify-content-between">
                    <div class="left-content">
                        <div class="details pb-3 starting-para">
                            <div class="starting-para">
                                <p>Lorem ipsum dolor sit amet consectetur.
                                    Mattis et lectus diam tortor nibh. Non sed mattis platea facilisi augue dolor. Lorem ipsum
                                    dolor sit amet consectetur. Mattis et lectus.</p>
                            </div>
                            <p> Lorem ipsum dolor sit amet consectetur. Mattis et
                                lectus diam tortor nibh. Non sed mattis platea facilisi augue dolor. </p>
                            <img class="pb-3 w-100 blog-detail-main-image" src="assets/images/blogsimagedetails.png"
                                alt="blog-image"/>
                            <p> Suspendisse facilisis nisl lectus, sit amet
                                convallis velit fringilla bibendum. Nam sed erat sed nisl faucibus blandit. Curabitur</p>
                            <p> at rutrum metus, quis tempus orci. Praesent
                                vel libero maximus, dapibus nisi vel, mollis arcu. Donec tempus tortor non felis faucibus, eu
                                pulvinar lorem semper.</p>
                            <p>Pellentesque ultrices leo eu aliquam placerat.
                                Sed euismod, purus et semper imperdiet, justo orci eleifend ex, id gravida ligula libero ac
                                quam. Nullam vel nisl rhoncus risus tincidunt tempus.</p>
                            <p>Maecenas vitae eleifend enim. Etiam eget
                                elementum tellus. Suspendisse eu nunc molestie, consectetur est sit amet, vulputate urna.
                                Vestibulum ut dapibus nibh. Fusce eu rutrum nisi.</p>
                            <div class="footer-socials d-flex justify-content-end pt-2">
                                <a href="#">
                                    <div class="">
                                        <i class="fa fa-facebook"></i>
                                    </div>
                                </a>
                                <a href="#">
                                    <div class="">
                                        <i class="fa fa-twitter" aria-hidden="true"></i>
                                    </div>
                                </a>
                                <a href="#">
                                    <div class="">
                                        <i class="fa fa-linkedin" aria-hidden="true"></i>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <button class="text-gradient read-more-details ">Read
                            More
                        </button>

                        <div class="similar-blogs pt-5">
                            <div class="singleBlog">
                                <img class="w-100" src="assets/images/blogdetails-2.png" alt="blog-images"/>

                                <div class="single-blog-content">
                                    <p class="text-gradient mb-0">Sep 5. 2022 / James K.</p>
                                    <h1>Maecenas
                                        ac nibh Maecenas ac nibh
                                        2022</h1>
                                    <div class="d-flex justify-content-end">
                                        <button class="d-flex align-items-center text-gradient "><a href="#">Read
                                                More
                                                <i class="fa fa-arrow-circle-o-right right-circle ms-2" aria-hidden="true"></i>
                                            </a>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="singleBlog">
                                <img class=" w-100 " src="assets/images/blogdetails1.png" alt="blog-images"/>

                                <div class="single-blog-content ">
                                    <p class="text-gradient">Sep 5. 2022 / James K.</p>
                                    <h1>
                                        Maecenas
                                        ac nibh Maecenas ac nibh
                                        2022</h1>
                                    <div class="d-flex justify-content-end">
                                        <button class="d-flex align-items-center text-gradient "><a href="#">Read
                                                More
                                                <i class="fa fa-arrow-circle-o-right right-circle ms-2" aria-hidden="true"></i>
                                            </a>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
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

export default BlogDetail