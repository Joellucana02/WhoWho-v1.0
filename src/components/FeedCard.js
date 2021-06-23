import React from 'react'
import { useAuth } from '../context/authContext'
import FeedCardButtons from './FeedCardButtons'

const FeedCard = ({data, deleteData, setManageData}) => {
  let copy
    return (
        <div className="content">
        <hr/>
       {data.length===0?'No data':data.map(el=>
         <FeedCardButtons key={el.id} data={el} deleteData={deleteData} setManageData={setManageData}/>        
          )}
          
    {/* <div className="content__container" id="content__container-id">
      <div className="content__top">
        <div className="content__top-left">
          <a href="#"><img src="#" alt={data.name && data.name} /></a>
          <p>{ data.name && data.name}</p>
          <a href="#">Follow</a>
        </div>
        <div className="ellipsis"><i className="fas fa-ellipsis-h" /></div>
      </div>
    </div> */}
    
  </div>
    )
}

export default FeedCard
