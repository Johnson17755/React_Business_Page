import React from 'react';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBusinessTime, faChartPie, faTruckFast, faUserClock, faHouseLaptop, faPhone } from '@fortawesome/free-solid-svg-icons';
import AboutImage from '../../assets/about/about.jpg'


export default function About() {

     //FontAwesomeIcon
  const faBusinessIcon =<FontAwesomeIcon icon= { faBusinessTime }  />
  const faChartPieIcon =<FontAwesomeIcon icon= { faChartPie }  />
  const faTruckIcon =<FontAwesomeIcon icon= { faTruckFast }  />
  const faUserIcon =<FontAwesomeIcon icon= { faUserClock }  />
  const faHouseIcon =<FontAwesomeIcon icon= { faHouseLaptop }  />
  const faPhoneIcon =<FontAwesomeIcon icon= { faPhone }  />


  return (
    <>
        <section id="about">
            <div className="cointainer">
                <div className="title_headling">
                    <h3>We Provide Shortage Remarkable Ideal!</h3>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                </div>
            </div>
            <div className="about_box_wrapper">
                <div className="about_box">
                    <div className="about_icon">
                        { faBusinessIcon }
                    </div>
                    <div className="about_content">
                        <h5>Development</h5>
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                    </div>
                </div>
                <div className="about_box">
                    <div className="about_icon green-icon">
                        { faChartPieIcon }
                    </div>
                    <div className="about_content">
                        <h5>Integration</h5>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                    </div>
                </div>
                <div className="about_box">
                    <div className="about_icon blue_icon">
                        { faTruckIcon }
                    </div>
                    <div className="about_content">
                        <h5>Branding</h5>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                    </div>
                </div>
            </div>

            <div className="about_box_detail">
                <div className="about_col">
                    <div className="about_image">
                        <img src={AboutImage} alt="about"/>
                    </div>
                    <div className="img_info_box"> 
                        <h6 className="img_info_title">GET A PRICE QUOTE TODAY!</h6>
                            <p>metus habitasse leo lacus mus phasellus aliquam nec, <br/> fermentum scelerisque </p>
                            <a href="/"> {faPhoneIcon} <span>+234 800 000 000</span></a>
                    </div>
                </div>
                <div className="about_col more_space">
                    <h3>We have business skill that will increase your earnings</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit etiam ornare vulputate, praesent mus facilisis consequat cubilia ante id et aliquet. </p>

                    <div className="grid_info">
                        <div className="icon"> {faUserIcon} </div>
                        <div className="detail">
                            <h4>Start your own business in a minutes</h4>
                            <p>Ad penatibus metus magnis ornare iaculis fusce lectus et dictumst mi fames nascetur senectus sagittis posuere, natoque primis aliquam integer lacinia montes elementum congue tristique quis magna nisl suscipit praesent. </p>
                        </div>
                    </div>
                    <div className="grid_info">
                        <div className="icon green_icon"> {faHouseIcon} </div>
                        <div className="detail">
                            <h4>Open a business account online</h4>
                            <p>Ad penatibus metus magnis ornare iaculis fusce lectus et dictumst mi fames nascetur senectus sagittis posuere, natoque primis aliquam integer lacinia montes elementum congue tristique quis magna nisl suscipit praesent. </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}


