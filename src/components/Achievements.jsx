import React, { Component } from 'react'
import Slider from "react-slick";


class Achievements extends Component {
  render() {

    const settings = {
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
      };

    return (
        <div>
        <div class="Achievements container mx-auto px-3 px-lg-0">
            <h2 class="section-title text-center">Achievements</h2>
            <h1 class="text-gradient section-heading text-center">Our Latest
                Projects
            </h1>
            <p class="desc-para text-center px-3 px-lg-5">
                Curabitur quis
                interdum dolor, et tempus urna.
                Vestibulum id dolor euismod, mattis orci eget, imperdiet nisl. Vivamus mollis .
            </p>
            <div>
          
            <Slider className='scale_slick' {...settings}>

                <div>
                    <img class="w-100 h-100" src="./assets/images/Img_4.png" alt="img"/>
                </div>
                <div>
                    <img class="w-100 h-100" src="./assets/images/Img_3.png" alt="img"/>
                </div>
                <div>
                    <img class="w-100 h-100" src="./assets/images/Img_2.png" alt="img"/>
                </div>
                <div>
                    <img class="w-100 h-100" src="./assets/images/Img_4.png" alt="img"/>
                </div>
                <div>
                    <img class="w-100 h-100" src="./assets/images/Img_1.png" alt="img"/>
                </div>
                
            </Slider>
            
        </div>
            <div class="d-flex justify-content-center pt-4">
                <button class="green-btn btn-bg-color-shadow">Read
                    More
                </button>
            </div>
        </div>
  </div>
    )
  }
}

export default Achievements