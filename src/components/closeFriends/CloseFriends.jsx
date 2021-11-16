import "./closeFriends.css"


export default function CloseFriends({user}) {
    return (
        <li className="sidebarFriend">
            <img className="sidebarFriendImg" scr={user.profilePicture} alt=""/>
            <span className="sidebarFriendName" >{user.username}</span>
        </li>
    )
}