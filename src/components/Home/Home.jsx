import React from 'react';
import './Home.css';
import BannerImage from '../../assets/banner/business.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faShieldHalved, faChartArea } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
      //FontAwesomeIcon
  const faChartIcon =<FontAwesomeIcon icon= { faChartLine }  />
  const faShieldIcon =<FontAwesomeIcon icon= { faShieldHalved }  />
  const faChartAreaIcon =<FontAwesomeIcon icon= { faChartArea }  />


  return (
    <>
    <section id="home">
        <div className="banner_image"></div>
        <div className="container">
            <div className="banner_outer">
                <div className="col">
                    <h3 className="title">
                        WE PROMOTE YOUR <span>BUSINESS</span>
                    </h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    <div className="btn_wrapper">
                        <a className="btn" href="/">Get Started</a>
                    </div>
                </div>
                <div className="col">
                    <div className="sub_banner_image">
                        <img src={BannerImage} alt="Banner_image" />
                    </div>
                    <div className="banner_style_1">
                        {faChartIcon}
                        <h4>Bubsiness Analysis</h4>
                    </div>
                    <div className="banner_style_1 banner_style_2">
                        {faShieldIcon}
                        <h4>99.9% Success</h4>
                    </div>
                    <div className="banner_style_1 banner_style_3">
                        {faChartAreaIcon}
                        <h4>Strategy</h4>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
