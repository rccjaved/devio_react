import React, { Component } from 'react'

class HomeContact extends Component {
  render() {
    return (
        <div>
            <div
                class="container homepage-contact-us mx-auto px-3 px-lg-0 d-flex flex-column-reverse flex-md-row justify-content-between">
                <form action="" class="form-main">
                    <div class="contact-form position-relative">
                        <h2>Contact Us</h2>
                        <div class="d-flex flex-column input-main-sec ">
                            <label for="name" class="pb-2">Your Name</label>
                            <input type="text" placeholder="Your Name Here" required class="contact-input-field px-2"/>
                        </div>
                        <div class="d-flex flex-column input-main-sec ">
                            <label for="name" class="pb-2">Your Email</label>
                            <input type="email" placeholder="Your Email Here" required class="contact-input-field px-2"/>
                        </div>
                        <div class="d-flex flex-column input-main-sec ">
                            <label for="name" class="pb-2">Your Message</label>
                            <input type="text" placeholder="Your Message Here" required
                                class="contact-input-field px-2 w-100"/>
                        </div>
                        <div class="contact-form g-map p-0">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.4683253959333!2d74.39261381500745!3d31.483808656097104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391907c2664939b7%3A0x17182119a19b3210!2sDevioTech-%20New%20Horizon%20of%20Soft%20Solution!5e0!3m2!1sen!2s!4v1675532841731!5m2!1sen!2s"
                                width="100%" height="100%" allowfullscreen="" loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                    </div>
                    <button class="green-btn btn-bg-color-shadow">Send
                        Email
                    </button>
                </form>

                <div class="contact-form-right-content">
                    <h2 class="section-title text-start">Contact Us</h2>
                    <h1 class="text-gradient section-heading text-start">Let’s Get Started
                    </h1>
                    <p class="desc-para py-2">Curabitur quis interdum dolor, et
                        tempus urna. Vestibulum id dolor euismod, mattis orci eget, imperdiet nisl.
                    </p>
                    <div class="call d-flex align-items-center mt-4">
                        <i class="fa fa-phone" aria-hidden="true"></i>
                        <a href="tel:+1-202-555-0115">
                            <p class="mb-0 ms-3">+1-202-555-0115</p>
                        </a>
                    </div>
                    <div class="mail d-flex align-items-center mt-4">
                        <i class="fa fa-envelope" aria-hidden="true"></i>
                        <a href="mailto:Admin@.co.gmail.com">
                            <p class="text-[13px] mb-0 ms-3">Admin@.co.gmail.com</p>
                        </a>
                    </div>
                </div>
                <img class="position-absolute d-none footer-star-left d-lg-block  " src="./assets/images/blackleft.png"
                    alt="bg-tech-image"/>
                <img class="position-absolute d-none d-lg-block footer-right-star " src="./assets/images/blackleft.png"
                    alt="bg-tech-image"/>
            </div>
      </div>
    )
  }
}

export default HomeContact