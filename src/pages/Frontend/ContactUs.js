import React from 'react'

export default function ContactUs() {
  const handlesubmits = (e) => {
    e.preventDefault();
   
} 
  return (
    <div id='contact-section' className='py-5'>
    <div className="container bg-white py-5">
    <div className="row">
      <div className="col text-center text-dark mb-5">
        <span className="border border-start-0 fs-1 border-end-0 border-top-0 border-bottom border-danger">Contact
          Us</span>
      </div>
    </div>

    <div className="row">
     
      <div className="col-12 col-md-6 col-lg-6">
        <form className="row g-6" onSubmit={handlesubmits}>


          <div className="row">
          <div className="col-auto mb-3">
            <input type="text" className="form-control" id="inputPassword2" placeholder="Full Name..." />
          </div>

          <div className="col-auto mb-3">
            <input type="email" className="form-control w-100" id="inputPassword3" placeholder="Email..." />
          </div>

          </div>

         <div className="row">
         <div className="col-auto mb-3 w-75">
            <input type="text" className="form-control" id="inputPassword4" placeholder="Phone No" />
          </div>
         </div>

         <div className="row">
         <div className="col-auto mb-3 w-75">


        <select id="inputState" className="form-select sel-w">
          <option selected>Your Department</option>
          <option>Computing</option>
          <option>HND</option>
          <option>Urdu</option>
        </select>
        </div>
         </div>

         <div className="row">
         <div className="input-group w-75 tex-a mb-3 g-6">

          <textarea className="form-control " placeholder="Your requirements... "
            aria-label="With textarea"></textarea>
          </div>
         </div>
            <div className="row">

          <div className="col-auto ">
            <button type="submit" className="btn btn-primary mb-3">Send Message</button>
          </div>
            </div>
        </form>

      </div>
      
      <div className="col-12 col-md-6 col-lg-6">
        <div className="cc-profile-image h-100"><a href="https://goo.gl/maps/XRTmqGGqnvFMZgnw5">
            <iframe className='w-100 h-100'
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217898.05622262493!2d73.08930095!3d31.423571499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392242a895a55ca9%3A0xdec58f88932671c6!2sFaisalabad%2C%20Punjab!5e0!3m2!1sen!2s!4v1666597951885!5m2!1sen!2s"
               allowfullscreen="" loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"></iframe>
          </a></div>
      </div>
    </div>



  </div>
  </div>
  )
}
