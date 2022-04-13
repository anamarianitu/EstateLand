import "./Sidebar.css";
import { useState } from "react";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@material-ui/icons";
import { AiOutlineLogout } from "react-icons/ai";
import { Link, BrowserRouter as Router } from "react-router-dom";
import authService from "../../../services/auth.service";

export default function Sidebar() {
  const [admin, setAdmin] = useState(authService.getCurrentAdmin());

  const logOut = () => {
    authService.logoutAdmin();
  }
  return (
    <>
      {admin !== null ?
        <div className="sidebar">
          <div className="sidebarWrapper">
            <div className="sidebarMenu">
              <h3 className="sidebarTitle">Dashboard</h3>
              <ul className="sidebarList">
                <Link to="/admin/home" className="link">
                  <li className="sidebarListItem active">
                    <LineStyle className="sidebarIcon" />
                    Home
                  </li>
                </Link>
                <Link to="/admin/analytics" className="link">
                  <li className="sidebarListItem">
                    <Timeline className="sidebarIcon" />
                    Analytics
                  </li>
                </Link>
              </ul>
            </div>

            <div className="sidebarMenu">
              <h3 className="sidebarTitle">Quick Menu</h3>
              <ul className="sidebarList">
                <Link to="/admin/users" className="link">
                  <li className="sidebarListItem">
                    <PermIdentity className="sidebarIcon" />
                    Users
                  </li>
                </Link>
                <Link to="/admin/properties" className="link">
                  <li className="sidebarListItem">
                    <Storefront className="sidebarIcon" />
                    Properties
                  </li>
                </Link>
                <Link to="/admin/admins" className="link">
                  <li className="sidebarListItem">
                    <AttachMoney className="sidebarIcon" />
                    Admins
                  </li>
                </Link>
                <Link to="/admin/agents" className="link">
                  <li className="sidebarListItem">
                    <BarChart className="sidebarIcon" />
                    Agents
                  </li>
                </Link>
              </ul>
            </div>

            <div className="sidebarMenu">
              <h3 className="sidebarTitle">Notifications</h3>
              <ul className="sidebarList">
                <Link to="/admin/viewings" className="link" >
                  <li className="sidebarListItem">
                    <MailOutline className="sidebarIcon" />
                    Viewings Planning
                  </li>
                </Link>
                <Link to="/admin/contactForms" className="link" >
                  <li className="sidebarListItem">
                    <DynamicFeed className="sidebarIcon" />
                    Contact Forms
                  </li>
                </Link>
                <Link to="/admin/chat" className="link" >
                  <li className="sidebarListItem">
                    <ChatBubbleOutline className="sidebarIcon" />
                    Chat
                  </li>
                </Link>
              </ul>
            </div>

            <div className="sidebarMenu">
              <h3 className="sidebarTitle">Staff</h3>
              <ul className="sidebarList">
                <li className="sidebarListItem">
                  <WorkOutline className="sidebarIcon" />
                  Manage
                </li>
                <li className="sidebarListItem">
                  <Timeline className="sidebarIcon" />
                  Analytics
                </li>
                <li className="sidebarListItem">
                  <Report className="sidebarIcon" />
                  Reports
                </li>
              </ul>
            </div>

            <div className="sidebarMenu">
              <h3 className="sidebarTitle">Logout</h3>
              <ul className="sidebarList">
                <li className="sidebarListItem" onClick={logOut}>
                  <AiOutlineLogout className="sidebarIcon" />
                  Log Out
                </li>
              </ul>
            </div>

          </div>
        </div>
        : null}
    </>

  );
}