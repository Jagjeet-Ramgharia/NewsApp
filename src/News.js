import React from "react";
import Avatar from "@material-ui/core/Avatar";
import "./News.css";
import { useList } from "./Context";

const News = ({title, summary,published,id,deleteitem}) => {
  const { apiData } = useList();
  const removeList = () =>{
      deleteitem(id);
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
            <h1>{title}</h1>
            <h3>{summary}</h3>

            <p>{published}</p>
        </div>
        {/* <button onClick={removeList}><img src="/icons/close.png" alt="close"/></button> */}
      </div>
    </>
  );
};

export default News;
