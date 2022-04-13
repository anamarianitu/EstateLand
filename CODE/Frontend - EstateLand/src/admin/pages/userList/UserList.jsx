import "./UserList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import userService from "../../../services/UserService";
import UserService from "../../../services/UserService";

function UserList() {
  const [data, setData] = useState(null);

  useEffect(() => {
    userService.getAllUsers(setData);
  }, []);

  if (!data) return null;

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
    UserService.deleteUser(id);
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
        field: "user",
        headerName: "User",
        width: 120,
        renderCell: (params) => {
            return (
                <div className="userListUser">
                    {params.row.firstName} {params.row.lastName}
                </div>
            );
        },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
        field: "userId",
        headerName: "User Id",
        width: 120,
    },
    {
        field: "notLocked",
        headerName: "Not Locked",
        width: 150,
    },
    {
        field: "role",
        headerName: "Role",
        width: 160,
    },
    {
        field: "action",
        headerName: "Action",
        width: 150,
        renderCell: (params) => {
            return (
                <>
                    <Link to={{
                        pathname: `/admin/users/${params.row.id}`,
                        state: { id: params.row.id }
                    }}>
                        <button className="userListEdit">Edit</button>
                    </Link>
                    <DeleteOutline
                        className="userListDelete"
                        onClick={() => {
                            const confirmBox = window.confirm(
                                "Do you really want to delete this user?"
                            )
                            if (confirmBox === true) {
                                handleDelete(params.row.id)
                            }
                        }}
                    />
                </>
            );
        },
    },
];


  return (
    <div className="userList">
      <div className="userTitleContainer">
        <h1 className="userTitle">Users Overview</h1>
      </div>
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}

export default UserList;