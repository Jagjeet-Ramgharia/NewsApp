import React, { useEffect } from "react";
import SideBar from "./SideBar";
import NewsFeed from "./NewsFeed";
import { useList } from "./Context";
import "./App.css";
const App = () => {
  const { apiData, setApiData } = useList();
  useEffect(() => {
    const getApi = async (e) => {
      try {
        const response = await fetch("https://api.first.org/data/v1/news");
        const data = await response.json();
        // console.log(data)
        // console.log(data.data[0]);
        setApiData(data.data);
        console.log(apiData);
      } catch (err) {
        console.log(err);
      }
    };
    getApi();
  }, []);
  return (
    <>
      <div className="app">
        <SideBar />
        <NewsFeed />
      </div>
    </>
  );
};

export default App;
