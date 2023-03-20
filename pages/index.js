import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Banner from '@/components/Banner'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
        <Banner/> 
      {/* <div className="pd-top-80 pd-bottom-50" id="grid">
        <div className="container">
            <div className="section-title">
                <h6 className="title">Accueil</h6>
            </div>
            <div className="row">
                <div className="col-lg-3 col-sm-6">
                    <div className="single-post-wrap style-white">
                        <div className="thumb">
                            <img src="assets/img/post/1.png" alt="img" />
                            <a className="tag-base tag-blue" href="#">Tech</a>
                        </div>
                        <div className="details">
                            <h6 className="title"><a href="#">The FAA will test drone detecting technologies in airports this year</a></h6>
                            <div className="post-meta-single mt-3">
                                <ul>
                                    <li><i className="fa fa-clock-o"></i>08.22.2020</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="single-post-wrap style-white">
                        <div className="thumb">
                            <img src="assets/img/post/2.png" alt="img" />
                            <a className="tag-base tag-orange" href="#">Food</a>
                        </div>
                        <div className="details">
                            <h6 className="title"><a href="#">Rocket Lab will resume launches no sooner than August 27th</a></h6>
                            <div className="post-meta-single mt-3">
                                <ul>
                                    <li><i className="fa fa-clock-o"></i>08.22.2020</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="single-post-wrap style-white">
                        <div className="thumb">
                            <img src="assets/img/post/3.png" alt="img" />
                            <a className="tag-base tag-blue" href="#">Tech</a>
                        </div>
                        <div className="details">
                            <h6 className="title"><a href="#">Google Drive flaw may attackers fool you into install malware</a></h6>
                            <div className="post-meta-single mt-3">
                                <ul>
                                    <li><i className="fa fa-clock-o"></i>08.22.2020</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="single-post-wrap style-white">
                        <div className="thumb">
                            <img src="assets/img/post/4.png" alt="img" />
                            <a className="tag-base tag-orange" href="#">Food</a>
                        </div>
                        <div className="details">
                            <h6 className="title"><a href="#">TikTok will sue the US over threatened ban</a></h6>
                            <div className="post-meta-single mt-3">
                                <ul>
                                    <li><i className="fa fa-clock-o"></i>08.22.2020</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> */}
    </>
  )
}
