import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import RestClient from "../RestAPI/RestClient";
import AppUrl from "../RestAPI/AppUrl";


class Services extends Component {

    constructor(){
        super();
        this.state={
            myData:[],
            loading:true,
            error: false
        }
    }


    componentDidMount(){
        RestClient.GetRequest(AppUrl.ServiceName).then(result=>{

            if(result == null){
                this.setState({error:true, loading:false})
            }else{
            this.setState({myData:result, loading:false});
            }
        }).catch(error=>{
            this.setState({error:true})
          })
    }

  render() {
    const MyList = this.state.myData;
    const MyView = MyList.map(MyList=>{

            return <Link class="singleService cursor-pointer d-flex justify-content-between align-items-center " to={"/service/"+MyList.id+"/"+MyList.service_url}>
                        <div class="d-flex justify-content-between align-items-center w-100">
                            <div class=" icon-circle">
                                <i class={MyList.icon} aria-hidden="true"></i>
                            </div>
                            <h3 class="single-service-name mb-0">
                                {MyList.service_name}
                            </h3>
                            <i class="fa fa-arrow-circle-o-right right-circle" aria-hidden="true"></i>
                        </div>
                    </Link>


    })

    return (
        <div>
            <div class="ourservice services-us container mx-auto px-3 px-lg-0">
                <img class="position-absolute star-imge-right d-none d-lg-block " src="./assets/images/blackleft.png"
                    alt=""/>
                <h2 class="section-title text-center">Our Services</h2>
                <h1 class="text-gradient section-heading text-center">
                    TAKE A LOOK AT OUR SERVICES</h1>
                <p class="desc-para text-center px-4">
                We Are IT Company With Extensive Experience And Specialization In Creating Custom Software Applications Designed To Suit Your Business Requirements In USA And UK. Services Include Website Design And Development, Shopify Store Design, SEO And Social Media Services, Web Dashboards In USA And UK, Restful API Integration, Google Or Web Forms, Microsoft Excel And Google Sheets.</p><br />
                <div class="ourservices-box d-flex flex-wrap">
                {MyView}
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

export default Services