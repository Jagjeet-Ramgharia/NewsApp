import React, { useState } from "react";
import Feedback from "./Feedback";
import Avatar from "@material-ui/core/Avatar";
import NewsFeed from "./NewsFeed";
import "./SideBar.css";
import { useList } from "./Context";

const SideBar = () => {
  const { isList, setIsList } = useList();
  const hideNShow = () => {
    const main_div = document.querySelector(".main_div");
    const feedback_form = document.querySelector(".feedback_form");
    const feed = document.querySelector('.news_feed')
    feed.classList.add('opacity');
    main_div.classList.add("hide");
    feedback_form.classList.remove("hide"); 
  };

  return (
    <>
      <div className="main_div">
      {/* <button id="btn" className="hide" onClick={showSideBarOptions}>Show</button> */}
        <div className="side_bar display_none">
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

          <div className="toggle">
            <div className="toggle_heading">
              <h2>View Toggle</h2>
            </div>

            <div className="toggle_options">
              <button
                className="toggle_button"
                onClick={() => setIsList(true)}
                disabled={isList}
              >
                <img src="/icons/list.png" alt="" />
              </button>
              <button
                className="toggle_button"
                onClick={() => setIsList(false)}
                disabled={!isList}
              >
                <img src="/icons/id-card.png" alt="" />
              </button>
            </div>
          </div>
          <div className="feedback">
            <h2>Have a Feedback</h2>
            <button onClick={hideNShow}>We're Listening!</button>
          </div>
        </div>
      </div>

      {/* feedback form */}

      <div className="feedback_form hide">
        <Feedback />
      </div>
    </>
  );
};

export default SideBar;
