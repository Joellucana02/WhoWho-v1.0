import React from 'react'

const FeedPage = () => {
    return (
        <div>
  <div className="header">
    <a href="#">WW</a>
    <div><input type="search" id="gsearch" name="gsearch" placeholder="Explore" /><i className="fas fa-search" />
    </div>
    <form className="form-post ">
      <input type="text" name="newpost" placeholder="What's Happening?" required />
      <input type="submit" defaultValue="Hoo Hoo" />
      <input type="hidden" name="id" />
      <div className="form-post-close__btn"><i className="fas fa-times" /></div>
    </form>
  </div>
  <div className="content">
    <div className="content__container" id="content__container-id">
      <div className="content__top">
        <div className="content__top-left">
          <a href="#"><img src="#" alt="women" /></a>
          <p>Isabella Walker</p>
          <a href="#">Follow</a>
        </div>
        <div className="content__buttons">
          <button className="edit">Edit</button>
          <button className="delete">Delete</button>
        </div>
        <div className="ellipsis"><i className="fas fa-ellipsis-h" /></div>
      </div>
      <div className="content__block">
        <p className="content__block-text" />
      </div>
      <div className="content__bottom">
        <p>4.631 views</p>
        <div className="content__bottom-icon">
          <div><i className="far fa-paper-plane" /></div>
          <div><i className="fas fa-retweet" /></div>
          <div><i className="far fa-heart" /></div>
        </div>
      </div>
    </div>
    
  </div>
  <div className="btn"><a href="#"><i className="fas fa-plus" /></a>
  </div>
  <div className="btn btn-2"><a href="#"><i className="fas fa-user" /></a>
  </div>
</div>
    )
}

export default FeedPage
