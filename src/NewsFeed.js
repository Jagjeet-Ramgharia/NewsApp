import React from 'react';
import News from './News';
import CardView from './CardView';
import './NewsFeed.css';
import { useList } from './Context';


const NewsFeed = () => {
    const {isList} = useList();
    // console.log(isList);
    return (
        <>
            <div className="news_feed">
            {
                isList? <News/> : <CardView/> 
            }
            

            </div>
        </>
    )
}

export default NewsFeed
