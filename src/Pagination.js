import React from 'react';
import './Pagination.css';

const Pagination = ({postPerPage,totalPost,paginate}) => {

    const pageNumbers = [];
    for(let i=1; i<= Math.ceil(totalPost/postPerPage); i++){
        pageNumbers.push(i);
    }
    return (
        <>
          <nav>
              
                  {
                      pageNumbers?.map(number => (
                          <div key={number} className="list">
                              <a onClick={()=> paginate(number)} href="!#">
                                  {number}
                              </a>
                          </div>
                      ))
                  }
              
          </nav>  
        </>
    )
}

export default Pagination
