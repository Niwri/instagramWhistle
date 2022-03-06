import React from 'react';
import './postPage.css';

import { postData } from '../../data/postData.js';
import weeklyPostGraph from './images/weeklyPostGraph.png';

const index = () => {
  return (
    <div className="page">
        <h1>Posts</h1>
        <div className="postPageContainer">
            <div>
                
                <h3>Information Collected by Instagram between...<br/>
                    {postData.initialDate} to {postData.lastDate}.</h3> 
                <p><span style={{fontWeight: 'bold'}}>Total Number of Posts: </span>{postData.totalPost}</p>
            <p><span style={{fontWeight: 'bold'}}>Average Number of Weekly Posts: </span>{postData.averageWeeklyPost}</p>
            </div>
            <img src={weeklyPostGraph} alt=""/>
        </div>
    </div>
  )
}

export default index