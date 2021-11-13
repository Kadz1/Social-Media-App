import "./rightbar.css"

export default function RightBar() {
    return (
        <div className="rightbar">
            <div className="rightBarWrapper">
                <div className="bithdayContainer">
                    <img className="birthdayImg" src="/assets/BirthdayImg.jpg" alt="" />
                    <span className="birthdayText">
                        <b>Mike</b> and <b>3 other friends</b> have a birthday today
                    </span>
                </div>
                <img className="rightBarAd" src="/assets/KFC.jpg" alt="" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFrendList">
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img className="rightbarProfileImg" src="/assets/Friend-1.jpg" alt="" />
                            <span className="rightbarOnLine"></span>
                        </div>
                        <span className="rightbarUsername">lauren Hayes</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img className="rightbarProfileImg" src="/assets/Friend-1.jpg" alt="" />
                            <span className="rightbarOnLine"></span>
                        </div>
                        <span className="rightbarUsername">lauren Hayes</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img className="rightbarProfileImg" src="/assets/Friend-1.jpg" alt="" />
                            <span className="rightbarOnLine"></span>
                        </div>
                        <span className="rightbarUsername">lauren Hayes</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img className="rightbarProfileImg" src="/assets/Friend-1.jpg" alt="" />
                            <span className="rightbarOnLine"></span>
                        </div>
                        <span className="rightbarUsername">lauren Hayes</span>
                    </li>
        
                </ul>
            </div>
        </div>
    )
}