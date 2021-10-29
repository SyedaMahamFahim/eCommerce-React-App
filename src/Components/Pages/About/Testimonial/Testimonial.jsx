import React from 'react'
import './testimonial.css'
const Testimonial = ({testimonial}) => {
    return (
        <>
          
             
            <div className={testimonial.classN}>
              <div className="container testi-cont">
                <div className="row main-sq" style={{width: '80%', margin: 'auto'}}>
                  <div className="col-lg-12 ">
                    <div className="row ">
                      <div className="col-3 my-auto text-center pt-5">
                        <div className="inner-testimonial">
                          <img src={testimonial.img} alt={testimonial.name}/>
                        </div>
                        <div className="clearfix">
                        </div>
                        <p className="name-anna">{testimonial.name}</p>
                      </div>
                      <div className="col-md-9">
                        <div className="row Verified-people">
                          <div className="col-md-9 text-center">
                            <p>{testimonial.position}</p>
                          </div>
                          <div className="col-md-3">
                            <p className="date">{testimonial.date}</p>
                          </div>
                          <div className="col-md-12">
                            <h3>{testimonial.h3}</h3>
                            <h6>{testimonial.h6}.
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        
 
        </>
    )
}

export default Testimonial
