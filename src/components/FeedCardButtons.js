import React from 'react'

const FeedCardButtons = ({data, deleteData, setManageData}) => {
    return (
        <>
        <div className="content__buttons">
          <button className="edit" onClick={()=>setManageData(data)}>Edit</button>
          <button className="delete" onClick={()=>deleteData(data.id)}>Delete</button>
        </div>
        <div className="content__bottom">
        <p>{data?data.view:'1'} views</p>
        <p>Last update {data?data.date.toLocaleDateString():'01/01/21'}
        {data?time.toLocaleTimeString():'00:00:00'}</p>
        <div className="content__bottom-icon">
          <div><i className="far fa-paper-plane"/>{data?data.plane:'00'}</div>
          <div><i className="fas fa-retweet" />{data?data.share:'00'}</div>
          <div><i className="far fa-heart" />{data?data.heart:'00'}</div>
        </div>
      </div>
        </>
    )
}

export default FeedCardButtons
