import React from 'react'
import FeedCardButtons from './FeedCardButtons'

const FeedCard = ({data, deleteData, setManageData}) => {
    return (
        <div className="content">
    <div className="content__container" id="content__container-id">
      <div className="content__top">
        <div className="content__top-left">
          <a href="#"><img src="#" alt="women" /></a>
          <p>{data?data.name:'John Doe'}</p>
          <a href="#">Follow</a>
        </div>{data.length===0?'No data':data.map(el=>{
          <FeedCardButtons key={data.id} data={data} deleteData={deleteData} setManageData={setManageData}/>        

        })}
        <div className="ellipsis"><i className="fas fa-ellipsis-h" /></div>
      </div>
      <div className="content__block">
        <p className="content__block-text" >{data.content}</p>
      </div>
      
    </div>
    
  </div>
    )
}

export default FeedCard
