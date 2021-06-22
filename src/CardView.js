import React from 'react';
import './Card.css';

const CardView = ({title, summary,published}) => {
    return (
        <>
          <div className="card">
              <div className="heading">
                  <h2>{title}</h2>
                  {/* <p>{summary}</p> */}
                  <p>{published}</p>
              </div>
              <figure>
                  <img src="https://www.whatsappimages.in/wp-content/uploads/2021/01/Boys-Feeling-Very-Sad-Images-Pics-Downlaod.jpg" alt="News_img"/>
              </figure>
          </div>  
        </>
    )
}

export default CardView
