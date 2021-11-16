import "./rightbar.css"
import { Users } from "../../User-Data"
import Online from "../Online/Online"


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
                    {Users.map(u =>(
                        <Online key={Users.id} user={u} 

                        />
                    ))}
                </ul>
            </div>
        </div>
    )
}