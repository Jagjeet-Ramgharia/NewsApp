import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import "./Feedback.css";
import './SideBar.css'
import { useList } from "./Context";
import SideBar from "./SideBar";

const Feedback = () => {
  const{showSideBar,setShowSideBar} = useList();
  const [userDetails, setUserDetails] = useState([
    {
      firstName: "",
      lastname: "",
      address: "",
      email: "",
      code: "",
      number: "",
    },
  ]);
  const handleInput= () =>{
    
    setUserDetails([...userDetails])
  }
  const hideFeedback = () =>{
    const main_div = document.querySelector(".main_div");
    const feedback_form = document.querySelector(".feedback_form");
    main_div.classList.remove("hide");
    feedback_form.classList.add("hide");
  }
  return (
    <>
      
        <div className="left_div">
          <div className="">
            <div className="reader">
              <Avatar
                className="post_avatar"
                alt="Jagjeet"
                src="/static/images/avatar/1.jpg"
              />
              <div className="reader_content">
                <h1>Hi Reader,</h1>
                <p>Here's your News</p>
              </div>
            </div>
          </div>
          <div className="sidebar_feedback">
            <h2>Have a Feedback</h2>
            <button onClick={hideFeedback}>We're Listening!</button>
          </div>
        </div>
        <div className="right_div">
          <form>
            <div className="details">
              <h1>Thank you so much for taking the time!</h1>
              <p>Please provide the below details!</p>
            </div>

            <label>First Name:</label>
            <input
              type="text"
              placeholder="Jhon"
              autoComplete="off"
              value={userDetails.firstName}
              onChange={handleInput}
            />
            <label>Last Name:</label>
            <input
              type="text"
              placeholder="Snow"
              autoComplete="off"
              value={userDetails.lastname}
              onChange={handleInput}
            />
            <label>Address:</label>
            <textarea
              placeholder="Enter your full postal address"
              autoComplete="off"
              value={userDetails.address}
              onChange={handleInput}
            />
            <label>Country:</label>
            <input type="text" placeholder="india" autoComplete="off" />
            <label>Email:</label>
            <input
              type="email"
              placeholder="exapmle@sample.com"
              autoComplete="off"
              value={userDetails.email}
              onChange={handleInput}
            />
            <label>Phone:</label>
            <input type="number" placeholder="Jhon" autoComplete="off" />
            <button type="submit" >Submit feedback</button>
           
          </form>
        </div>
      
    </>
  );
};

export default Feedback;
