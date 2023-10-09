import React, { Component } from 'react'
import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor'
import RestClient from "../RestAPI/RestClient";
import AppUrl from "../RestAPI/AppUrl";

class Summary extends Component {
    constructor(){
        super();
        this.state={
            projects:"",
            countries:"",
            workers:"",
            window_users:"",
            error: false
        }
    }

    componentDidMount(){
        RestClient.GetRequest(AppUrl.HomeSummary).then(result=>{
            this.setState({
                projects:result[0]['total_projects'],
                countries:result[0]['total_countries'],
                workers:result[0]['total_workers'],
                window_users:result[0]['total_window_users'],
        })
        });

     
    }

  render() {
    return (
      <div>
            <div class="projects-main position-relative container mx-auto px-3 px-lg-0">
                <img class="globalmap position-absolute m-auto"
                    src="assets/images/globe-world-map-dot-distribution-map-.png" alt="global-map"/>
                <h1 class="map-sec-title ">
                    We have Completed 3000 Plus Projects in 3 Years.
                </h1>
                <div class="d-flex counter-main flex-column flex-md-row justify-content-between pt-5">
                    <div class=" text-center pb-4 pb-md-0">
                        <CountUp start={0} end={this.state.projects}>
                            {({ countUpRef, start }) => (
                                <VisibilitySensor onChange={start} delayedCall>
                                <h1 class="text-gradient">
                                    <span id="counter2" ref={countUpRef}></span>+
                                </h1>
                                </VisibilitySensor>   
                            )}
                        </CountUp>
                        
                        <p>Completed
                            Projects</p>
                    </div>
                    <div class=" text-center pb-4 pb-md-0">
                        <CountUp start={0} end={this.state.countries}>
                            {({ countUpRef, start }) => (
                                <VisibilitySensor onChange={start} delayedCall>
                                <h1 class="text-gradient">
                                    <span id="counter2" ref={countUpRef}></span>+
                                </h1>
                                </VisibilitySensor>   
                            )}
                        </CountUp>
                        <p>Available Country
                        </p>
                    </div>
                    <div class=" text-center pb-4 pb-md-0">
                        <CountUp start={0} end={this.state.workers}>
                            {({ countUpRef, start }) => (
                                <VisibilitySensor onChange={start} delayedCall>
                                <h1 class="text-gradient">
                                    <span id="counter2" ref={countUpRef}></span>+
                                </h1>
                                </VisibilitySensor>   
                            )}
                        </CountUp>
                        <p>Worker</p>
                    </div>
                    <div class=" d-flex flex-column text-center justify-content-end pb-4 pb-md-0">
                        <CountUp start={0} end={this.state.window_users}>
                            {({ countUpRef, start }) => (
                                <VisibilitySensor onChange={start} delayedCall>
                                <h1 class="text-gradient">
                                    <span id="counter2" ref={countUpRef}></span>M
                                </h1>
                                </VisibilitySensor>   
                            )}
                        </CountUp>
                        <p>
                            Window User
                        </p>
                    </div>
                </div>
            </div>
      </div>
    )
  }
}

export default Summary