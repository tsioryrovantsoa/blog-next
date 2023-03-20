import React from 'react'

const Banner = () => {
  return (
    <>
    <div className="banner-area banner-inner-1 bg-black" id="banner">
        <div className="banner-inner pt-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="thumb after-left-top">
                            <img src="assets/img/banner/1.png" alt="img" />
                        </div>
                    </div>
                    <div className="col-lg-6 align-self-center">
                        <div className="banner-details mt-4 mt-lg-0">
                            <div className="post-meta-single">
                                <ul>
                                    <li><a className="tag-base tag-blue" href="#">Tech</a></li>
                                    <li className="date"><i className="fa fa-clock-o"></i>08.22.2020</li>
                                </ul>
                            </div>
                            <h2>ReZoom outage left some people locked out.</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            <a className="btn btn-blue" href="#">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Banner