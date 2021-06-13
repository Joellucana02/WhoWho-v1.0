import React from 'react'

const FeedCardButtons = ({data, deleteData, setManageData}) => {
    //console.log(data)
    
    return (
        <>
        <div className="content__buttons">
          <button className="edit" onClick={()=>setManageData(data)}>Edit</button>
          <button className="delete" onClick={()=>deleteData(data.id)}>Delete</button>
        </div>
        <div className="content__block">
        <p className="content__block-text" >{data.content}</p>
      </div>
        <div className="content__bottom">
        <p>{data?data.view:'1'} views</p>
        <p>Last update: {data.time?data.time:'00:00:00'}----

            {data.date?data.date:'01/01/21'}
        </p>
        <div className="content__bottom-icon">
          <div><i className="far fa-paper-plane"/>{data?data.plane:'00'} Vote</div>
          <div><i className="fas fa-retweet" />{data?data.share:'00'} Shares</div>
          <div><i className="far fa-heart" />{data?data.heart:'00'} Likes</div>
        </div>
      </div>
        </>
    )
}

export default FeedCardButtons
