import React from 'react'
import FeedCardButtons from './FeedCardButtons'

const FeedCard = ({data, deleteData, setManageData}) => {
    return (
        <div className="content">
    <div className="content__container" id="content__container-id">
      <div className="content__top">
        <div className="content__top-left">
          <a href="#"><img src="#" alt="women" /></a>
          <p>John Doe</p>
          <a href="#">Follow</a>
        </div>
        {data.length===0?'No data':data.map(el=>
          <FeedCardButtons key={el.id} data={el} deleteData={deleteData} setManageData={setManageData}/>        

        )}
        <div className="ellipsis"><i className="fas fa-ellipsis-h" /></div>
      </div>
      
      
    </div>
    
  </div>
    )
}

export default FeedCard
