import "./post.css"
import { MoreVert } from "@mui/icons-material"

export default function Post() {
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img 
                            className="postProfileImg" 
                            src="/assets/Friend2.jpeg" 
                            alt=""
                        />
                        <span className="postUserName">Harvey Williams </span> 
                        <span className="postDate">5 mins ago</span> 
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">Hey! it's my first post:)</span>
                    <img className="postImg" src="/assets/City.png" />
                </div>
                <div className="postBottom">                
                    <div className="postBottomLeft">
                        <img className="postLikeIcon" src="/assets/Like-Icon.png" alt="" />
                        <img className="postLikeIcon" src="/assets/Facebook-heart-icon.png" alt="" />
                        <span className="postCounter">32 people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">11 comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}