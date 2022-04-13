import "./AdminList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import UserService from "../../../services/UserService";

export default function AdminList() {
    const [data, setData] = useState(null);

    useEffect(() => {
        UserService.getAllAdmins(setData);
    }, []);

    if (!data) return null;

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
        UserService.deleteUser(id);
    };

    const columns = [
        { field: "id", headerName: "ID", width: 90 },
        {
            field: "admin",
            headerName: "Admin",
            width: 120,
            renderCell: (params) => {
                return (
                    <div className="adminListAdmin">
                        {params.row.firstName} {params.row.lastName}
                    </div>
                );
            },
        },
        { field: "email", headerName: "Email", width: 200 },
        {
            field: "userId",
            headerName: "Admin Id",
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
                            pathname: `/admin/admins/${params.row.id}`,
                            state: { id: params.row.id }
                        }}>
                            <button className="adminListEdit">Edit</button>
                        </Link>
                        <DeleteOutline
                            className="adminListDelete"
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
        <div className="adminList">

            <div className="userTitleContainer">
                <h1 className="userTitle">Admins Overview</h1>
                <Link to="/admin/newAdmin">
                    <button className="userAddButton">Add</button>
                </Link>
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