import React from "react";
import "./faqs.css";
import Breadcrumbs from "../../Breadcrumbs/Breadcrumbs";
import FaqsData from "./FaqsData";
const Faqs = () => {
  return (
    <>
      <Breadcrumbs pageName={"Faqs"} />
      <div className="container mt-5">
        <div className="row mt-5">
          <h1 className="text-center">FAQS</h1>

         {
             FaqsData.map((faq,index)=>{
                 return(
                     <>
                     <FaqCard key={index} faq={faq}/>
                     </>
                 )
             })
         }
          {/* <div className="col-12 mt-5">
            <p>
              <div className="d-grid gap-2">
                <button
                  className="btn btn-dark"
                  width="100%"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseExample1"
                  aria-expanded="false"
                  aria-controls="collapseExample1"
                >
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </button>
              </div>
            </p>
            <div className="collapse mt-4" id="collapseExample1">
              <div className="card">
                <div className="card-body">
                  Modi pariatur ea dolorem cupiditate cum repellendus eligendi
                  animi in. Ex sequi itaque dolorum repellendus non? Inventore
                  eum quisquam ratione adipisci? Cumque?
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 mt-5">
            <p>
              <div className="d-grid gap-2">
                <button
                  className="btn btn-dark"
                  width="100%"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseExample"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </button>
              </div>
            </p>
            <div className="collapse mt-4" id="collapseExample">
              <div className="card">
                <div className="card-body">
                  Modi pariatur ea dolorem cupiditate cum repellendus eligendi
                  animi in. Ex sequi itaque dolorum repellendus non? Inventore
                  eum quisquam ratione adipisci? Cumque?
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 mt-5">
            <p>
              <div className="d-grid gap-2">
                <button
                  className="btn btn-dark"
                  width="100%"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseExample"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </button>
              </div>
            </p>
            <div className="collapse mt-4" id="collapseExample">
              <div className="card">
                <div className="card-body">
                  Modi pariatur ea dolorem cupiditate cum repellendus eligendi
                  animi in. Ex sequi itaque dolorum repellendus non? Inventore
                  eum quisquam ratione adipisci? Cumque?
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

const FaqCard = ({ faq }) => {
  return (
      <>
       <div className="col-12 mt-5">
            <p>
              <div className="d-grid gap-2">
                <button
                  className="btn btn-dark"
                  width="100%"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={faq.dataBsTarget}
                  aria-expanded="false"
                  aria-controls={faq.ariaControls}
                >
                  {faq.title}
                </button>
              </div>
            </p>
            <div className="collapse mt-4" id={faq.ariaControls}>
              <div className="card">
                <div className="card-body">
                  {faq.desc}
                </div>
              </div>
            </div>
          </div>
      </>
  );
};
export default Faqs;
