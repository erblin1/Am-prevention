import React, { useEffect } from "react";
import "./faq.scss";
import { Link, withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getFaqs } from "../../redux/faq/faq-actions";
import SideNav from "../dashborad/SideNav";

const FAQ = ({ history }) => {
  const _faqs = useSelector((state) => state._faqs.faqs);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFaqs());
  }, []);
  return (
    <>
      <SideNav />

      <div className="wrapper">
        <div className="main_content">
          <div className="info">
          <div className="row gutters">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="card h-100">
                  <div className="card-body">
                    <div className="row gutters">
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <h6 className="text-right">FAQ's</h6>
                      </div>
                      <div className="form-group">
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      {_faqs.map((faq) => (
                        <div>
                          <label>Question</label>
                          <input className="form-control" value={faq.faq_question}/>
                          <label>Answer</label>
                           <label className="form-control" >{faq.faq_answer}</label>
                           <br></br>
                        </div>
                      ))}
                      </div>
                      </div>
       
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
    </>
  );
};

export default withRouter(FAQ);
