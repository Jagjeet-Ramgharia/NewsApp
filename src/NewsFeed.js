import React, { useState } from "react";
import News from "./News";
import CardView from "./CardView";
import "./NewsFeed.css";
import Pagination from "./Pagination";
import { useList } from "./Context";

const NewsFeed = () => {
  const { isList, apiData ,setApiData} = useList();
  const[currentPage,setCurrentPage] = useState(1);
  const[postPerPage,setPostPerPage] = useState(8);

  const indexOfLastPost = currentPage*postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPost = apiData?.slice(indexOfFirstPost,indexOfLastPost);
  console.log(currentPost);
  // console.log(isList);

  const paginate = (pageNumber) => setCurrentPage(pageNumber)
  const onDelete = (id) =>{
        setApiData((oldData) =>
            oldData.filter((curdata,index) =>{
                return index !== id
            })
        )
  }
  return (
    <>
    <div className="news_feed_parent">
      <div className="news_feed">
        {isList
          ? currentPost?.map((item) => {
              return (
                <News
                  title={item?.title}
                  summary={item?.summary}
                  published={item?.published}
                  id={item?.id}
                  deleteitem={onDelete}
                />
              );
            })
          : currentPost?.map((item) => {
              return (
                <CardView
                  title={item?.title}
                  summary={item?.summary}
                  published={item?.published}
                  id={item?.id}
                />
              );
            })}
      </div>
      <div className="pagination_div">
      <Pagination postPerPage={postPerPage} totalPost={apiData?.length} paginate = {paginate} />
      </div>
      </div>
    </>
  );
};

export default NewsFeed;
