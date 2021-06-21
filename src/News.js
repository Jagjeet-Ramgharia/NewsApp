import React from "react";
import Avatar from "@material-ui/core/Avatar";
import "./News.css";
import { useList } from "./Context";

const News = () => {
  const { apiData } = useList();
  // console.log(apiData.data[2]);
  const removeList = () =>{
    
  }
  return (
    <>
      <div className="news">
        <Avatar
          className="post_avatar"
          alt="Jagjeet"
          src="/static/images/avatar/1.jpg"
        />
        <div className="news_content">
          <h1>{apiData[0].title}</h1>
        </div>
        <button onClick={removeList}><img src="/icons/close.png" alt="close"/></button>
      </div>
    </>
  );
};

export default News;
