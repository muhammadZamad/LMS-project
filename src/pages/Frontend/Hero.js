import React from 'react'
import "../../App.scss"
import About from "./AboutUs";
import Contact from "./ContactUs"
import { FloatButton } from 'antd';
import { Pagination } from 'antd';
// image
import Zamad from "../../images/zamad.jpeg"
import Shahwan from "../../images/shahwan.jpeg"
import Talha from "../../images/talha.jpeg"
import Amin from "../../images/amin.jpeg"
const itemRender = (_, type, originalElement) => {
  if (type === 'prev') {
    return <a>Previous</a>;
  }
  if (type === 'next') {
    return <a>Next</a>;
  }
  return originalElement;
};
export default function Hero() {
  return (
    <>
 <div style={{margin: "0",padding: "0"}} className="container-fluid ">
  <div className="row">
    <div className="col">
    {/* <div className='py-3'> */}
     <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="https://source.unsplash.com/1920x900/?books" className="d-block w-100" alt="Books" />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>The Books</h5>
                      <p>Some representative placeholder content for the first slide.</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img src="https://source.unsplash.com/1920x900/?library." className="d-block w-100" alt="Library" />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>The Library</h5>
                      <p>Some representative placeholder content for the second slide.</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img src="https://source.unsplash.com/1920x899/?library" className="d-block w-100" alt="lab" />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>The Computer Lab</h5>
                      <p>Some representative placeholder content for the third slide.</p>
                    </div>
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
</div>
</div>
  </div>
  <About />
<div className="row px-5">
  
  {/* start */}
  <div className="row mt-4">
            <div className="col-12 col-md-6 col-lg-3">
              <div className="card mb-3 mb-lg-0 border-0">
                <img
                  src={ Zamad }
                  alt="Team Member"
                  className="img-fluid rounded-5 menTem"
                />
                <h3 className="mt-3">Muhammad Zamad</h3>
                <p className="text-secondary">CEO & Founder</p>
                <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                <button className="btn btn-light">Contact</button>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="card mb-3 mb-lg-0 border-0">
                <img
                  src={ Shahwan }
                  alt="Team Member"
                  className="img-fluid rounded-5 menTem"
                />
                <h3 className="mt-3">Shahwan Babar</h3>
                <p className="text-secondary">Architect</p>
                <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                <button className="btn btn-light">Contact</button>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="card mb-3 mb-lg-0 border-0">
                <img
                  src={ Talha }
                  alt="Team Member"
                  className="img-fluid rounded-5 menTem"
                />
                <h3 className="mt-3">Talha Naeem</h3>
                <p className="text-secondary">Architect</p>
                <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                <button className="btn btn-light">Contact</button>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="card mb-3 mb-lg-0 border-0">
                <img
                  src={ Amin }
                  alt="Team Member"
                  className="img-fluid rounded-5 menTem"
                />
                <h3 className="mt-3">Muhammad Amin</h3>
                <p className="text-secondary">Architect</p>
                <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                <button className="btn btn-light">Contact</button>
              </div>
            </div>


        </div>
  {/* end */}
  <div className="col text-center">
  <Pagination total={500} itemRender={itemRender} />
  </div>

</div>
<Contact />
{/* </div> */}

<FloatButton.BackTop />
    </>
  )
}
