import "./rightbar.css"
import { Users } from "../../User-Data"
import Online from "../online/Online"
import Followers from "../followers/Followers"


export default function RightBar({profile}) {

    const HomeRightBar = () => {
        return (
            <>
            <div className="bithdayContainer">
                    <img className="birthdayImg" src="/assets/BirthdayImg.jpg" alt="" />
                    <span className="birthdayText">
                        <b>Mike</b> and <b>3 other friends</b> have a birthday today
                    </span>
                </div>
                <img className="rightBarAd" src="/assets/KFC.jpg" alt="" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFrendList">
                    {Users.map(u =>(
                        <Online key={Users.id} user={u} 

                        />
                    ))}
                </ul>
            </>
        )
    }

    const ProfileRightBar = () => {
        return (
            <>
                <h1 className="rightbarTitle">User Information Title</h1>
                <div className="rightbarInfor">
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">City:</span>
                        <span className="rightbarInfoKey">Manchester</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">From:</span>
                        <span className="rightbarInfoKey">Manchester</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Relationship:</span>
                        <span className="rightbarInfoKey">Single</span>
                    </div>
                </div>
                <h1 className="rightbarTitle">User Friends</h1>
                <div className="rightbarFollowings">
                    {Users.map(u =>(
                        <Followers key={Users.id} user={u} 

                        />
                    ))}               
                </div>

            </>
        )
    }

    return (
        <div className="rightbar">
            <div className="rightBarWrapper">
                <ProfileRightBar />
            </div>
        </div>
    )
}