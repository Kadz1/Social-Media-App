import "./share.css"
import { PermMedia } from "@mui/icons-material"


export default function Share() {
    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img className="shareProfilePic" src="assets/ProfilePic.jpeg" alt="" />
                    <input className="shareInput" placeholder="What's on your mind?" />
                </div>
                <hr className="shareHr" />
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <PermMedia className="shareIcon" />
                            <span className="shareOptionText">Photo or Video</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}