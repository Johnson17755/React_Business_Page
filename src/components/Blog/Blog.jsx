import React from 'react';
import './Blog.css';
import BlogImage from '../../assets/blog/blog.jpg';


export default function Blog() {
  return (
    <>
      <section id="blog">
        <div className="container">
          <div className="row">
            <div className="blog_wrapper">
              <div className="blog_col">
                <h3>WE HELP BUSINESSES LAUNCH, GROW AND SUCCEED</h3>
                <p>Justo phasellus ultrices erat tempor aptent pretium semper sociosqu nisl, conubia praesent dictumst at fusce nibh donec nullam, massa varius suspendisse placerat eros malesuada purus ornare.</p>
                <div className="btn_wrapper">
                  <a className='btn' href="/">Get Started</a>
                </div>
              </div>
              <div className="blog_col">
                <div className="blog_image">
                    <img src={ BlogImage } alt="Blog" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>  
    </>
  )
}

