import './App.css';
import React, { useEffect, useState } from "react";
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Home from './components/pages/HomePage/Home'
import Properties from './components/pages/PropertyPage/Properties'
import SignIn from './components/pages/SignInPage/SignIn'
import Login from './components/pages/SignInPage/Login'
import Footer from './components/sections/Footer/Footer';
import SinglePropertyPage from './components/pages/SingleProperty/SinglePropertyPage';
import Sidebar from "./admin/components/sidebar/Sidebar";
import Topbar from "./admin/components/topbar/Topbar";
import HomeAdmin from "./admin/pages/home/HomeAdmin";
import UserList from "./admin/pages/userList/UserList";
import User from "./admin/pages/user/User";
import NewUser from "./admin/pages/newUser/NewUser";
import PropertyList from "./admin/pages/propertyList/PropertyList";
import Property from "./admin/pages/property/Property";
import NewProperty from "./admin/pages/newProperty/NewProperty";
import AdminList from "./admin/pages/adminList/AdminList";
import AgentList from "./admin/pages/agentList/AgentList";
import Admin from "./admin/pages/admin/Admin";
import Agent from "./admin/pages/agent/Agent";
import MyProfile from './components/pages/MyProfilePage/MyProfile';
import UpdateMyProfile from './components/pages/MyProfilePage/UpdateMyProfile';
import ResetPasswordMyProfile from './components/pages/MyProfilePage/ResetPasswordMyProfile';
import ResetPasswordLogin from './components/pages/SignInPage/ResetPasswordLogin';
import Contact from './components/pages/ContactPage/Contact';
import ViewingsList from './admin/pages/viewingsPlanning/ViewingsList';
import Analytics from './admin/pages/analytics/Analytics';
import Chat from './admin/pages/chat/Chat';
import NewAdmin from './admin/pages/newAdmin/NewAdmin';
import NewAgent from './admin/pages/newAgent/NewAgent';
import NewsList from './components/pages/NewsPage/NewsList';
import SingleNews from './components/pages/SingleNewsPage/SingleNews';
import ContactFormList from './admin/pages/contactFormList/ContactFormList';
import ContactForm from './admin/pages/contactForm/ContactForm';
import AdminLogin from './admin/loginForm/AdminLogin';
import authService from './services/auth.service';
import UpdateProperty from './admin/pages/updateProperty/UpdateProperty';
import Viewing from './admin/pages/viewing/Viewing';

function App() {
  const path = window.location.pathname;
  const [admin, setAdmin] = useState(Object);
  const [user, setUser] = useState(Object);

  useEffect(() => {
    authService.getSetAdminLocalStorage(setAdmin);
    authService.getSetUserLocalStorage(setUser);
}, []);

  if (path.startsWith("/admin")) {
    return <>
      <Router>
        <Topbar />
        <div className="adminViewContainer">
          <Sidebar />
          <Switch>
            <Route path="/admin" exact component={AdminLogin} />
            {admin ? <Route path="/admin/home" exact component={HomeAdmin} /> : <Redirect to="/admin" />}
            <Route path="/admin/users" exact component={UserList} />
            <Route path="/admin/user/:userId" exact component={User} />
            <Route path="/admin/newUser" exact component={NewUser} />
            <Route path="/admin/properties" exact component={PropertyList} />
            <Route path="/admin/property/:propertyId" exact component={Property} />
            <Route path="/admin/newProperty" exact component={NewProperty} />
            <Route path='/admin/updateProperty/:propertyId' exact component={UpdateProperty} />
            <Route path="/admin/admins" exact component={AdminList} />
            <Route path="/admin/admins/:adminId" exact component={Admin} />
            <Route path="/admin/newAdmin" exact component={NewAdmin} />
            <Route path="/admin/agents" exact component={AgentList} />
            <Route path="/admin/agents/:agentId" exact component={Agent} />
            <Route path="/admin/newAgent" exact component={NewAgent} />
            <Route path="/admin/viewings" exact component={ViewingsList} />
            <Route path="/admin/viewings/:viewingId" exact component={Viewing} />
            <Route path='/admin/analytics' exact component={Analytics} />
            <Route path='/admin/chat' exact component={Chat} />
            <Route path="/admin/contactForms" exact component={ContactFormList} />
            <Route path="/admin/contactForms/:contactFormId" exact component={ContactForm} />
            <Route path='/admin/login' exact component={AdminLogin} />
          </Switch>
        </div>
      </Router>
    </>;
  }
  else {
    return <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/properties' component={Properties} />
        <Route path='/myProfile' exact component={MyProfile} />
        <Route path='/myProfile/update' exact component={UpdateMyProfile} />
        <Route path='/myProfile/reset' exact component={ResetPasswordMyProfile} />
        <Route path='/login/reset' exact component={ResetPasswordLogin} />
        <Route path='/signin' exact component={SignIn} />
        <Route path='/login' exact component={Login} />
        <Route path='/chat' exact component={Chat} />
        <Route path='/contact' exact component={Contact} />
        <Route path='/news' exact component={NewsList} />
        <Route path='/property/:propertyId' exact component={SinglePropertyPage} />
        <Route path='/news/:newsId' exact component={SingleNews} />
      </Switch>
      <Footer />
    </Router>;
  }
}

export default App;
