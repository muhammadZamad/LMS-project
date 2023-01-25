import React from 'react'
import { Progress, Space } from 'antd';
export default function AboutUs() {
  return (
    <>
   <div id="about-section" className="py-5">

<div className="container py-5">
  <div className="row">
    <div className="col-12 col-md-4 col-lg-4">
      <h1>
        <span className="border border-start-0 border-end-0 border-top-0 border-bottom border-danger">Let </span> us
        introduce
      </h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est maxime, quos recusandae ipsa perferendis
        nisi vero id pariatur quidem blanditiis tenetur nam,
      </p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est maxime, quos recusandae ipsa perferendis
      </p>
    </div>
    <div className="col-12 col-md-4 col-lg-4">
      <span>Web design Books</span>
      <div className="mb-3 ">
      <Progress
      percent={90}
      status="active"
      strokeColor={{
        from: '#108ee9',
        to: '#87d068',
      }}
    />
      </div>
      <span>Photography Books</span>
      <div className="mb-3 ">
      <Progress
      percent={99.9}
      status="active"
      strokeColor={{
        from: '#108ee9',
        to: '#ef233c',
      }}
    />
      </div>
      <span>Zoology Books</span>
      <div className="mb-3 ">
      <Progress
      percent={60}
      status="active"
      strokeColor={{
        from: '#7209b7',
        to: '#87d068',
      }}
    />
      </div>
      <span>Math Books</span>
      <div className="mb-3 ">
      <Progress
      percent={70}
      status="active"
      strokeColor={{
        from: '#023e8a',
        to: '#87d068',
      }}
    />
      </div>
      <span>Computer Books</span>
      <div className="mb-3 ">
      <Progress
      percent={89.9}
      status="active"
      strokeColor={{
        from: '#108ee9',
        to: '#2dc653',
      }}
    />
      </div>

    </div>
    <div className="col-12 col-md-4 col-lg-4">
      <img src="https://source.unsplash.com/255x300/?library" alt="Books image" />
    </div>


  </div>
</div>


</div>

    </>
  )
}
