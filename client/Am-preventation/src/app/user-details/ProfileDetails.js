import { useSelector } from "react-redux";
import "./ProfileDetails.scss";
import SideNav from "../dashborad/SideNav";
import Chatbot from "react-chatbot-kit";
import config from "../chatbot/config";
import ActionProvider from "../chatbot/actionProvider";
import MessageParser from "../chatbot/messageParser";
import { useState } from "react";
// client\am-preventation\src\assets\robot.svg
import { ReactComponent as Robot } from "../../assets/robot.svg";
function Profile() {
  const _user = useSelector((state) => state._user);

  const [showChatBot, setShowChatBot] = useState(false);
  return (
    <>
      <SideNav />
      <div className="wrapper">
        <div className="main_content">
          <div className="info">
            <div className="row gutters">
              <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                <div className="card h-100">
                  <div className="card-body">
                    <div className="account-settings">
                      <div className="user-profile">
                        <div className="user-avatar">
                          <img
                            src="https://bootdey.com/img/Content/avatar/avatar7.png"
                            alt="Maxwell Admin"
                          />
                        </div>
                        <h5 className="user-name">
                          {_user.currentUser
                            ? _user.currentUser.name
                            : "You Didn't Sign Up"}
                        </h5>
                        <h6 className="user-email">
                          {_user.currentUser
                            ? _user.currentUser.email
                            : "You Didn't Sign Up"}
                        </h6>
                      </div>
                      <div className="about">
                        <h5>About</h5>
                        <p>
                          I'm{" "}
                          {_user.currentUser
                            ? _user.currentUser.name
                            : "you didn't signed up"}
                          . Self Learner I enjoy Studying and casual quizes for
                          better learning.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                <div className="card h-100">
                  <div className="card-body">
                    <div className="row gutters">
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <h6 className="mb-2 text-primary">Personal Details</h6>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                          <label for="fullName">Full Name</label>
                          <input
                            type="text"
                            className="form-control"
                            id="fullName"
                            placeholder="Enter full name"
                            value={
                              _user.currentUser
                                ? _user.currentUser.name
                                : "You Didn't Sign Up"
                            }
                            readOnly
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                          <label for="eMail">Email</label>
                          <input
                            type="email"
                            className="form-control"
                            id="eMail"
                            placeholder="Enter email ID"
                            value={
                              _user.currentUser
                                ? _user.currentUser.email
                                : "You Didn't Sign Up"
                            }
                            readOnly
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                          <label for="phone">Phone</label>
                          <input
                            type="text"
                            className="form-control"
                            id="phone"
                            placeholder="Enter phone number"
                            value={
                              _user.currentUser
                                ? _user.currentUser.phoneNumber
                                : "You Didn't Sign Up"
                            }
                            readOnly
                          />
                        </div>
                      </div>
                    </div>
                    {showChatBot ? (
                      <div className="app-chatbot-container">
                        <Chatbot
                          config={config}
                          actionProvider={ActionProvider}
                          messageParser={MessageParser}
                        />
                      </div>
                    ) : null}
                    <button
                      className="app-chatbot-button"
                      onClick={() => setShowChatBot(!showChatBot)}
                    >
                      <Robot className="app-chatbot-button-icon" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
