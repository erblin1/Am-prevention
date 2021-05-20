import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router";
import { createFaq } from "../../redux/faq/faq-actions";
import SideNav from "../dashborad/SideNav";

const CreateFaq = ({ history }) => {
  const dispatch = useDispatch();
  const [faq, setFaq] = useState();
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFaq({ ...faq, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await dispatch(createFaq(faq));
    if (response) history.push("/Profile/Faq");
  };
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
                      <h6 className="text-right">Create Course</h6>
                      </div>
                      <div className="form-group">
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
          <form onSubmit={handleSubmit}>
          <label>Question</label>
          <input
            className="form-control"
            name="faq_question"
            placeholder="faq_question"
            onChange={onChangeHandler}
          ></input>
          <label>Answer</label>
          <input
            className="form-control"
            name="faq_answer"
            placeholder="faq_answer"
            onChange={onChangeHandler}
          ></input>
          <br></br>
          <button  className="btn btn-primary" type="submit">Add Question</button>
        </form>
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

export default withRouter(CreateFaq);
