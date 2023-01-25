import React from 'react'
import workspace from "../../images/labrary9.jpg";
import lab from "../../images/labrary7.jpg"
import lab1 from "../../images/labrary4.jpg"
import lab2 from "../../images/labrary8.jpg"
import lab3 from "../../images/labrary5.jpg"
import lab4 from "../../images/labrary4.jpg"
import lab5 from "../../images/labrary9.jpg"
import lab6 from "../../images/labrary3.jpg"
import lab7 from "../../images/library1.jpg"
import { FloatButton } from 'antd';
import { Alert, Space, Spin } from 'antd';

export default function Blog() {
  return (
    <>
   <div className="container py-5">
    <div className="row">
      <div className="col text-center mb-5">
        <span className="border border-start-0 fs-1 border-end-0 border-top-0 border-bottom border-danger">Our
          Blog</span>
      </div>
    </div>
    {/* <div className="row overlay">
      <div className="col"> */}
      <div className="overlay1 rounded-2 py-5"><div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-9 col-lg-6 text-center">
            <h1 className="text-secondary mb-1">Library</h1>
            <form className=' bg-transparent'><div className="input-group input-group-lg ">
              <input type="text" className="form-control no-focus bg-transparent  text-white mb-4" placeholder="Find book" />
              <div className="input-group-append">
                <button className="btn btn-secondary p-3 mb-4 no-focus">
                  <i className="fas fa-search mr-2" aria-hidden="true"></i>Search
      </button>
      </div></div></form></div></div></div></div>
      {/* </div>
    </div> */}
    <div className="row py-3">
      <div className="col-12 col-md-6 col-lg-6">
        <div className="card shadow mb-3 w-100">
          <div className="row g-0">
            <div className="col-lg-4">
              <img src={ workspace } className="img-fluid img-cover rounded-start" alt="kichen" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <p className="card-text"><small className="text-danger">Last updated 3 mins ago</small></p>
                <h5 className="card-title">HND Department</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.</p>
                <button className="btn btn-light border-0 rounded-5">Borrow Book</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-6 col-lg-6">
        <div className="card shadow mb-3 w-100">
          <div className="row g-0">
            <div className="col-lg-4">
              <img src={ lab } className="img-fluid img-cover rounded-start"
                alt="book image" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <p className="card-text"><small className="text-danger">Last updated 3 mins ago</small></p>
                <h5 className="card-title">Zoology Department</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer. <br />This content is a little bit longer.</p>
                <button className="btn btn-light border-0 rounded-5">Borrow Book</button>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>

    <div className="row">
      <div className="col-12 col-md-6 col-lg-6">
        <div className="card shadow mb-3 w-100" >
          <div className="row g-0">
            <div className="col-lg-4">
              <img src={ lab1 } className="img-custom img-cover img-fluid  rounded-start"
                alt="fashion image" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <p className="card-text text-dander"><small id="last-text">Last updated 3 mins ago</small></p>
                <h5 className="card-title">Physics Department</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.</p>
                <button className="btn btn-light border-0 rounded-5">Borrow Book</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-6 col-lg-6">
        <div className="card shadow mb-3 w-100" >
          <div className="row g-0">
            <div className="col-lg-4">
              <img src={ lab2 } className="img-fluid img-cover rounded-start"
                alt="trend image" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <p className="card-text"><small className="text-danger">Last updated 3 mins ago</small></p>
                <h5 className="card-title">Chemistry Department</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.</p>
                <button className="btn btn-light border-0 rounded-5">Borrow Book</button>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div> 
    <Space>
    <Spin tip="Loading...">
    <div className="row">
      <div className="col-12 col-md-6 col-lg-6">
        <div className="card shadow mb-3 w-100" >
          <div className="row g-0">
            <div className="col-lg-4">
              <img src={ lab3 } className="img-custom img-cover img-fluid  rounded-start"
                alt="fashion image" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <p className="card-text text-dander"><small id="last-text">Last updated 3 mins ago</small></p>
                <h5 className="card-title">Math Department</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.</p>
                <button className="btn btn-light border-0 rounded-5">Borrow Book</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-6 col-lg-6">
        <div className="card shadow mb-3 w-100" >
          <div className="row g-0">
            <div className="col-lg-4">
              <img src={ lab4 }  className="img-fluid img-cover rounded-start"
                alt="trend image" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <p className="card-text"><small className="text-danger">Last updated 3 mins ago</small></p>
                <h5 className="card-title">Urdu Department</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.</p>
                <button className="btn btn-light border-0 rounded-5">Borrow Book</button>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div> 
    </Spin>
    </Space>
    <div className="row">
      <div className="col-12 col-md-6 col-lg-6">
        <div className="card shadow mb-3 w-100" >
          <div className="row g-0">
            <div className="col-lg-4">
              <img src={ lab5 }  className="img-custom img-fluid img-cover  rounded-start"
                alt="fashion image" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <p className="card-text text-dander"><small id="last-text">Last updated 3 mins ago</small></p>
                <h5 className="card-title">Botany Department</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.</p>
                <button className="btn btn-light border-0 rounded-5">Borrow Book</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-6 col-lg-6">
        <div className="card shadow mb-3 w-100" >
          <div className="row g-0">
            <div className="col-lg-4">
              <img src={ lab6 }  className="img-fluid img-cover rounded-start"
                alt="trend image" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <p className="card-text"><small className="text-danger">Last updated 3 mins ago</small></p>
                <h5 className="card-title">Computing Department</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.</p>
                <button className="btn btn-light border-0 rounded-5">Borrow Book</button>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div> 
    <div className="row">
      <div className="col-12 col-md-6 col-lg-6">
        <div className="card shadow mb-3 w-100" >
          <div className="row g-0">
            <div className="col-lg-4">
              <img src={ lab2 }  className="img-custom img-cover img-fluid  rounded-start"
                alt="fashion image" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <p className="card-text text-dander"><small id="last-text">Last updated 3 mins ago</small></p>
                <h5 className="card-title">MIT Department</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.</p>
                <button className="btn btn-light border-0 rounded-5">Borrow Book</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-6 col-lg-6">
        <div className="card shadow mb-3 w-100" >
          <div className="row g-0">
            <div className="col-lg-4">
              <img src={ lab7 }  className="img-fluid img-cover rounded-start"
                alt="trend image" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <p className="card-text"><small className="text-danger">Last updated 3 mins ago</small></p>
                <h5 className="card-title">Pakistan Study Department</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.</p>
                <button className="btn btn-light border-0 rounded-5">Borrow Book</button>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div> 
    <FloatButton.BackTop />
  </div>
    </>
  )
}
