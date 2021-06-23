import React from 'react'
const jsonUserHreft = "http://localhost:5000/profile"

const Options = (mPage) => {
    console.log(mPage);
    if (mPage == true) {
        return (
            <div className="user__settings">
                <div className="user__s user__photo">
                    <p>Profile photo</p>
                </div>
                <div className="user__s user__name">
                    <p>Username</p>
                </div>
                <div className="user__s user__delete">
                    <p>Delete Account</p>
                </div>
                <div className="user__s user__delete">
                    <div className="btn"><a href="../home/home.html"><i className="fas fa-home" /></a>
                    </div>
                </div>
            </div>
        )
    } else {
        return null;
    }
}

function UserInfoPage (user, myPage) {
    let jonUser = new XMLHttpRequest ();
    jonUser.open("GET", jsonUserHreft, false);
    jonUser.send ();                         
    let user1 = JSON.parse (jonUser.response);
    if (myPage == 1) {
        console.log("hola");
    }else{
        console.log("hola2");
        console.log(myPage);
    }
    let folowers = ""
    if (user.user.folowers >= 1000) {
        if (user.user.folowers >= 1000000) {
            folowers = (user.user.folowers / 1000000).toFixed(1) + "M";
        }else{
            folowers = (user.user.folowers / 1000).toFixed(1) + "K";
        }
    }else{
        folowers = user.user.folowers
    }

    return (
        <div>
            <div className="user__info">
                <div className="user__info-container">
                <div className="user__info-top">
                    <img src={user.user.img} alt="randomuser" />
                    <div className="user__info-top-right">
                        <p>John Smith</p>
                        <p>WhoWho user</p>
                        <div className="user__info-top-right-boxes">
                            <div>
                                <p>Connections</p>
                                <p>{user.user.conections}</p>
                            </div>
                            <div>
                                <p>Followers</p>
                                <p>{folowers}</p>
                            </div>
                            <div>
                                <p>Following</p>
                                <p>67</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="user__info-boxes">
                    <div className="user__info-box">
                        <a href="#">Chat</a>
                    </div>
                    <div className="user__info-box">
                        <a href="#">Follow</a>
                    </div>
                </div>
                </div>
            </div>
            <Options mPage={myPage}/>
            {/* <div className="user__settings">
                <div className="user__s user__photo">
                    <p>Profile photo</p>
                </div>
                <div className="user__s user__name">
                    <p>Username</p>
                </div>
                <div className="user__s user__delete">
                    <p>Delete Account</p>
                </div>
                <div className="user__s user__delete">
                    <div className="btn"><a href="../home/home.html"><i className="fas fa-home" /></a>
                    </div>
                </div>
            </div> */}
        </div>
    );
}

export default UserInfoPage
