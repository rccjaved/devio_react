import React, { Component } from 'react'

class Portfolio extends Component {
  render() {
    return (
        <div>
            <div class="Portfolio container mx-auto px-3 px-lg-0">
                <h2 class="section-title text-center">Portfolio</h2>
                <h1 class="text-gradient section-heading text-center">Our Latest
                    Projects
                </h1>
                <p class="desc-para text-center px-3 px-lg-5">
                    Curabitur quis
                    interdum dolor, et tempus urna.
                    Vestibulum id dolor euismod, mattis orci eget, imperdiet nisl. Vivamus mollis est eu consectetur
                    lobortis.
                </p>

                <div class="product-mian">
                    <div class="productsimage d-flex flex-column flex-md-row justify-content-between">
                        <a href="#" class="products prod-img1">
                            <img class="h-100 w-100 products-image" src="./assets/images/1product.png"
                                alt="productimage"/>
                        </a>
                        <div class="d-flex justify-content-between products-first-row-2ndimgs flex-wrap ">
                            <a href="#" class="products prod-img2">
                                <img class="products-image h-100 w-100" src="./assets/images/2product.png"
                                    alt="productimage"/>
                            </a>
                            <a href="#" class="products prod-img3">
                                <img class="products-image h-100 w-100" src="./assets/images/3product.png"
                                    alt="productimage"/>
                            </a>
                            <a href="#" class="products prod-img4">
                                <img class="products-image h-100 w-100 " src="./assets/images/4product.png"
                                    alt="productimage"/>
                            </a>
                            <a href="#" class="products prod-img5">
                                <img class="products-image h-100 w-100 " src="./assets/images/5product.png"
                                    alt="productimage"/>
                            </a>
                        </div>
                    </div>
                    <div class="productsimage d-flex flex-column flex-md-row justify-content-between">
                        <div class="second-row d-flex justify-content-between flex-wrap ">
                            <a href="#" class="products prod-img6">
                                <img class="products-image h-100 w-100  " src="./assets/images/8product.png"
                                    alt="productimage"/>
                            </a>
                            <a href="#" class="products prod-img7">
                                <img class="products-image h-100 w-100" src="./assets/images/6product.png"
                                    alt="productimage"/>
                            </a>
                        </div>
                        <a href="#" class="products prod-img8">
                            <img class="products-image h-100 w-100 " src="./assets/images/7product.png"
                                alt="productimage"/>
                        </a>
                    </div>
                </div>
                <div class="d-flex justify-content-center">
                    <button class="green-btn btn-bg-color-shadow">Read
                        More
                    </button>
                </div>
            </div>
        </div>
    )
  }
}

export default Portfolio