import React from 'react';
import Link from 'next/link';

const Banner = ({image,data}) => {

// console.log(`assets/img/banner/{${image}}`)

  return (
    <>
    <div className="banner-area banner-inner-1 bg-black" id="banner">
        <div className="banner-inner pt-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="thumb after-left-top">
                            <img src={`/assets/img/${image}`} alt="img" />
                        </div>
                    </div>
                    <div className="col-lg-6 align-self-center">
                        <div className="banner-details mt-4 mt-lg-0">
                            <div className="post-meta-single">
                                <ul>
                                    <li><a className="tag-base tag-blue" href="#">BLOG</a></li>
                                    <li className="date"><i className="fa fa-clock-o"></i>20.03.2022</li>
                                </ul>
                            </div>
                            <h2>{data.title}</h2>
                            <p>{data.body}</p>
                            <Link href="/blog" className="btn btn-blue">Voir le Blog</Link><br />
                            <Link href="/utilisateurs" className="btn btn-blue">Voir les membres</Link>
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