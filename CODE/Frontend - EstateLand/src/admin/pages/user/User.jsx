import { Link } from "react-router-dom";
import "./User.css";
import UserShowDetailsCard from "../../components/generalComponents.jsx/ShowDetailsCard";
import UpdateDetails from "../../components/generalComponents.jsx/UpdateDetails";

function User() {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>

        <Link to="/newUser">
          <button className="userAddButton">Create</button>
        </Link>
      </div>

      <div className="userContainer">
        <UserShowDetailsCard image='https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' fName='Anna' lName='Becker' job='Software Engineer'
          username='annabeck99' dateOfBirth='10.12.1999' phone='+1 123 456 67' email='annabeck99@gmail.com' address='New York | USA'
        />
        <UpdateDetails image='https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
          username='annabeck99' fullName='Anna Beck' email='annabeck99@gmail.com' phone='+1 123 456 67' address='New York | USA' />
      </div>
    </div>
  );
}

export default User