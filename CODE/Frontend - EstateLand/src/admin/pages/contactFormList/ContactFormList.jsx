import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import ContactService from "../../../services/ContactService"

export default function ContactFormList() {
    const [data, setData] = useState(null);

    useEffect(() => {
        ContactService.getAllContactForms(setData);
    }, []);

    if (!data) return null;

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
        ContactService.deleteContactForm(id);
    };

    const columns = [
        { field: "id", headerName: "ID", width: 90 },
        {
            field: "title",
            headerName: "Title",
            width: 100,
            renderCell: (params) => {
                return (
                    <div className="adminListAdmin">
                        {params.row.title}
                    </div>
                );
            },
        },
        { field: "userEmail", headerName: "Email", width: 190 },
        { field: "userPhone", headerName: "Phone", width: 120 },
        {
            field: "message",
            headerName: "Message",
            width: 560,
        },
        {
            field: "action",
            headerName: "Action",
            width: 130,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={{
                            pathname: `/admin/contactForms/${params.row.id}`,
                            state: { id: params.row.id }
                        }}>
                            <button className="adminListEdit">Edit</button>
                        </Link>
                        <DeleteOutline
                            className="adminListDelete"
                            onClick={() => {
                                const confirmBox = window.confirm(
                                    "Do you really want to delete this contact form?"
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
                <h1 className="userTitle">Contact Forms Overview</h1>
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
