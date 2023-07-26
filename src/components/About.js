
import React from 'react'

export default function About(props) {
  
let MyStyle ={
  color : props.mode==='dark'?'white':'#042743',
  backgroundColor : props.mode==='dark'?'rgb(4, 39, 67)':'white',
}

   
  return (
    <div className='mt-0 container' style={{ color :props.mode==='dark'?'white':'#042743'}}>
        <h3 >About Us</h3>
      <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={MyStyle}>
       <strong> Tell a Great Story</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body"style={MyStyle}>
        Telling a great story with words, video production, or even a timeline helps evoke an emotional response in the customer, which is proven to increase their intent to buy.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={MyStyle}>
       <strong> Build Trust Through Photos</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={MyStyle}>
        Showing photos of the founders or team members helps convey that the company is full of real, relatable people that you can trust with your business.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={MyStyle}>
      <strong>  Establish Credibility</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={MyStyle}>
        To appear credible in the eyes of your customers, you can show off reviews, testimonials, or if you are a web design site, showcase your skills on the page itself.
      </div>
    </div>
  </div>
</div>

    </div>
  )
}
