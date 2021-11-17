import "./followers.css"

export default function Followers({user}) {
    return (
        <div>
             <div className="rightbarFollowing">
                <img 
                className="rightbarFolllowingImg" 
                src={user.profilePicture} 
                alt="" 
                />
                <span className="rightbarFollowerName">{user.username}</span>
            </div>
        </div>
    )
}
