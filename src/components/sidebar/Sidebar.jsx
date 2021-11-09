import "./sidebar.css";
import { Chat, Bookmark, Group,Event, PlayCircleFilledOutlined, RssFeed, School, WorkOutline } from "@mui/icons-material"


export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <RssFeed className="sidebarIcon"/>
                        <span className="sidebarListItemText">Feed</span>
                    </li>
                    <li className="sidebarListItem">
                        <Chat className="sidebarIcon"/>
                        <span className="sidebarListItemText">Chats</span>
                    </li>
                    <li className="sidebarListItem">
                        <PlayCircleFilledOutlined className="sidebarIcon"/>
                        <span className="sidebarListItemText">Videos</span>
                    </li>
                    <li className="sidebarListItem">
                        <Group className="sidebarIcon"/>
                        <span className="sidebarListItemText">Groups</span>
                    </li>
                    <li className="sidebarListItem">
                        <Bookmark className="sidebarIcon"/>
                        <span className="sidebarListItemText">Bookmarks</span>
                    </li>
                    <li className="sidebarListItem">
                        <WorkOutline className="sidebarIcon"/>
                        <span className="sidebarListItemText">Jobs</span>
                    </li>
                    <li className="sidebarListItem">
                        <Event className="sidebarIcon"/>
                        <span className="sidebarListItemText">Events</span>
                    </li>
                    <li className="sidebarListItem">
                        <School className="sidebarIcon"/>
                        <span className="sidebarListItemText">Courses</span>
                    </li>
                </ul>
                <button className="sidebarButton">Show More</button>
                <hr className="sidebarHr"/>
                <ul className="sidebarFriendList">
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/Friend2.jpeg" alt="" />
                        <span className="sidebarFriendNmae">Harvey</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/Friend1.jpeg" alt="" />
                        <span className="sidebarFriendNmae">Isabela</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/friend3.jpeg" alt="" />
                        <span className="sidebarFriendNmae">Zion</span>
                    </li>
                    <li className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/friend4.jpeg" alt="" />
                        <span className="sidebarFriendNmae">Cassar</span>
                    </li>
                </ul>
            </div>
        </div> 
    )
}